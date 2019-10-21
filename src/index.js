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
      url: `${appId}.json`,
    })
    .then(response => {
      console.log(response);
    });

  ReactDOM.render(<WidgetView />, document.getElementById('widget-root'));
};
