import React from 'react';
import ReactDOM from 'react-dom';
import WidgetView from '@components/widget-view';
import '@common/fonts.css';
import httpUtil from '@common/HttpUtil';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { CONFIGS, SENTRY_DSN } from '@environment';

window.initWidget = function (d, appId) {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'widget-root');
  d.body.appendChild(rootElement);

  function init(configData, id) {
    if (!CONFIGS.isLocal) {
      Sentry.init({
        dsn: SENTRY_DSN,
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
        environment: process.env.NODE_ENV,
      });
    }

    ReactDOM.render(
      <WidgetView widgetConfig={configData} appId={id} />,
      document.getElementById('widget-root')
    );
  }

  function getConfigFromService() {
    const appointmentsData = httpUtil.makeRequest({
      method: 'GET',
      url: `https://widgets.api.salonmanager.${CONFIGS.domainExtension}/${CONFIGS.version}/appointment-services/${appId}?debug=true`,
      headers: {
        'x-api-key': CONFIGS.xApiKey,
        'x-app-version': CONFIGS.xAppVersion,
        timeZone: CONFIGS.timeZone,
      },
    });
    const pricingData = httpUtil.makeRequest({
      method: 'GET',
      url: `https://widgets.api.salonmanager.${CONFIGS.domainExtension}/${CONFIGS.version}/pricing-services/${appId}`,
      headers: {
        'x-api-key': CONFIGS.xApiKey,
        'x-app-version': CONFIGS.xAppVersion,
        timeZone: CONFIGS.timeZone,
      },
    });
    const configsData = httpUtil.makeRequest({
      method: 'GET',
      url: `https://widgets.api.salonmanager.${CONFIGS.domainExtension}/${CONFIGS.version}/configs/${appId}`,
      headers: {
        'x-api-key': CONFIGS.xApiKey,
        'x-app-version': CONFIGS.xAppVersion,
        timeZone: CONFIGS.timeZone,
      },
    });
    const businessHourData = httpUtil.makeRequest({
      method: 'GET',
      url: `https://widgets.api.salonmanager.${CONFIGS.domainExtension}/${CONFIGS.version}/business-hours/${appId}`,
      headers: {
        'x-api-key': CONFIGS.xApiKey,
        'x-app-version': CONFIGS.xAppVersion,
        timeZone: CONFIGS.timeZone,
      },
    });
    const promotionsData = httpUtil.makeRequest({
      method: 'GET',
      url: `https://widgets.api.salonmanager.${CONFIGS.domainExtension}/${CONFIGS.version}/promotions/${appId}`,
      headers: {
        'x-api-key': CONFIGS.xApiKey,
        'x-app-version': CONFIGS.xAppVersion,
        timeZone: CONFIGS.timeZone,
      },
    });

    Promise.all([
      appointmentsData,
      pricingData,
      configsData,
      businessHourData,
      promotionsData,
    ])
      .then((result) => {
        const { style, orientation, position } = result[2].data.data;
        const widgets = [
          'WIDGET_APPOINTMENT',
          'WIDGET_PRICING',
          'WIDGET_BUSINESS_HOURS',
          'WIDGET_PROMOTIONS',
        ];
        const appointments = result[0].data.data;
        const promotions = result[4].data.data;
        const businessHours = result[3].data.data;
        const pricings = result[1].data.data;
        const configData = {
          style,
          orientation,
          position,
          widgets,
          widgetData: {
            appointments,
            promotions,
            businessHours,
            pricings,
          },
        };
        init(configData, appId);
      })
      .catch((error) => console.log(`error in promises ${error}`));
  }

  (function f() {
    getConfigFromService();
  })();
};
