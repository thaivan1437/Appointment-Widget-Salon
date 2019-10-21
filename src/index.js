import React from 'react';
import ReactDOM from 'react-dom';
import WidgetView from '@components/widget-view';
import 'common/fonts.css';

window.initWidget = function(d) {
  var rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'widget-root');
  d.body.appendChild(rootElement);

  ReactDOM.render(<WidgetView />, document.getElementById('widget-root'));
};
