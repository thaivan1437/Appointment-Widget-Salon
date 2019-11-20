import React from 'react';
import ReactDOM from 'react-dom';
import WidgetView from '@components/widget-view';
import 'common/fonts.css';
import httpUtil from 'common/HttpUtil';
import * as Sentry from '@sentry/browser';

window.initWidget = function(d, appId) {
  var rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'widget-root');
  d.body.appendChild(rootElement);

  httpUtil
    .makeRequest({
      method: 'GET',
      url: `https://configs.widgets.salonmanager.net/${appId}.json`,
      // url: `https://s3-us-west-2.amazonaws.com/configs.widgets.salonmanager.net/${appId}.json`,
    })
    .then(response => {
      const configData = response.data;

      Sentry.init({
        dsn: 'https://42b8f6c49ef64e5db61139711826584b@sentry.io/1468247',
      });

      ReactDOM.render(
        <WidgetView widgetConfig={configData} appId={appId} />,
        document.getElementById('widget-root')
      );
    });
};
