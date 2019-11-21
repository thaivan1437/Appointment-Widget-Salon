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

  function init(configData, id) {
    Sentry.init({
      dsn: 'https://21d4a1621eed4d63bf372f2e17869753@sentry.io/1826350',
    });

    ReactDOM.render(
      <WidgetView widgetConfig={configData} appId={id} />,
      document.getElementById('widget-root')
    );
  }

  function getConfigFromService() {
    httpUtil
      .makeRequest({
        method: 'GET',
        url: `https://configs.widgets.salonmanager.net/${appId}.json`,
      })
      .then(response => {
        const configData = response.data;
        const lm = toTimestamp(response.headers['last-modified']);

        setLM(lm);
        setConfig({
          ...configData,
          'lm-checker': lm,
        });

        init(configData, appId);
      });
  }

  function setConfig(config) {
    try {
      localStorage.setItem('sm.config', JSON.stringify(config));
    } catch (e) {
      console.log('widget config not stored :(', e);
    }
  }

  function getConfig() {
    try {
      const config = localStorage.getItem('sm.config');
      return JSON.parse(config);
    } catch (e) {
      return null;
    }
  }

  function setLM(data) {
    try {
      sessionStorage.setItem('sm.lm', data);
    } catch (e) {
      console.log('widget config not stored :(', e);
    }
  }

  function getLM() {
    try {
      const config = sessionStorage.getItem('sm.lm');
      return config;
    } catch (e) {
      return null;
    }
  }

  function toTimestamp(strDate) {
    const datum = Date.parse(strDate);
    return datum / 1000;
  }

  (function f() {
    const configData = getConfig();

    if (configData) {
      const lm = getLM();

      if (lm && configData['lm-checker'] == lm) {
        init(configData, appId);
      } else if (!lm) {
        httpUtil
          .makeRequest({
            method: 'HEAD',
            url: `https://configs.widgets.salonmanager.net/${appId}.json`,
          })
          .then(response => {
            const lmTimestamp = toTimestamp(response.headers['last-modified']);
            setLM(lmTimestamp);

            if (configData['lm-checker'] == lmTimestamp) {
              init(configData, appId);
            } else {
              getConfigFromService();
            }
          });
      } else {
        getConfigFromService();
      }
    } else {
      getConfigFromService();
    }
  })();
};
