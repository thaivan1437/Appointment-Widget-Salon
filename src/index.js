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
    .then(
      response => {
        const configData = response.data;

        Sentry.init({
          dsn: 'https://42b8f6c49ef64e5db61139711826584b@sentry.io/1468247',
        });

        ReactDOM.render(
          <WidgetView widgetConfig={configData} appId={appId} />,
          document.getElementById('widget-root')
        );
      },
      () => {
        const configData = {
          email: 'developer@salonmanager.net',
          style: 'red',
          widgetData: {
            appointments: {
              'Hair (kids)': [
                {
                  isSelected: false,
                  id: 'J2BO3EXIE3VSWTXMEU5JGK2B',
                  categoyId: 'ISAVKHURPAINIVIMVC563ZAK',
                  name: 'Ombré',
                  categoryName: 'Hair (kids)',
                },
                {
                  isSelected: false,
                  id: 'GGHBY6ACNZG3KCOLIJVTCO6O',
                  categoyId: 'ISAVKHURPAINIVIMVC563ZAK',
                  name: 'Haircut + Shampoo (girl)',
                  categoryName: 'Hair (kids)',
                },
                {
                  isSelected: false,
                  id: 'J2BO3EXIE3VSWTXMEU5JGK2B',
                  categoyId: 'ISAVKHURPAINIVIMVC563ZAK',
                  name: 'Haircut (girl)',
                  categoryName: 'Hair (kids)',
                },
                {
                  isSelected: false,
                  id: 'GGHBY6ACNZG3KCOLIJVTCO6O',
                  categoyId: 'ISAVKHURPAINIVIMVC563ZAK',
                  name: 'Haircut + Shampoo (girl)',
                  categoryName: 'Hair (kids)',
                },
                {
                  isSelected: false,
                  id: 'J2BO3EXIE3VSWTXMEU5JGK2B',
                  categoyId: 'ISAVKHURPAINIVIMVC563ZAK',
                  name: 'Ombré',
                  categoryName: 'Hair (kids)',
                },
                {
                  isSelected: false,
                  id: 'GGHBY6ACNZG3KCOLIJVTCO6O',
                  categoyId: 'ISAVKHURPAINIVIMVC563ZAK',
                  name: 'Haircut + Shampoo (girl)',
                  categoryName: 'Hair (kids)',
                },
              ],
            },
            pricings: [{ test: 'test', amount: 10 }],
            promotions: [{ test: 'test' }],
          },
          widgets: ['WIDGET_APPOINTMENT'],
          position: 'BOTTOM_LEFT',
          orientation: 'HORIZONTAL',
        };
        Sentry.init({
          dsn: 'https://42b8f6c49ef64e5db61139711826584b@sentry.io/1468247',
        });

        setTimeout(() => {
          ReactDOM.render(
            <WidgetView widgetConfig={configData} appId={appId} />,
            document.getElementById('widget-root')
          );
        });
      }
    );
};
