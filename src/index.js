import React from 'react';
import ReactDOM from 'react-dom';
import WidgetView from '@components/widget-view';
import 'common/fonts.css';
import httpUtil from 'common/HttpUtil';

window.initWidget = function(d, appId) {
  var rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'widget-root');
  d.body.appendChild(rootElement);

  httpUtil
    .makeRequest({
      method: 'GET',
      // url: `https://configs.widgets.salonmanager.net/${appId}.json`, // TODO open when cors problem resolved
      url: `https://s3-us-west-2.amazonaws.com/configs.widgets.salonmanager.net/${appId}.json`,
    })
    .then(response => {
      const configData = response.data;

      ReactDOM.render(
        <WidgetView widgetConfig={configData} appId={appId} />,
        document.getElementById('widget-root')
      );
    });
};
