import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// TODO move logic to util
const exampleConfig = {
  appId: 'SampleAppId_111',
  cdnBaseUrl: 'http://localhost:5555',
  registeredWidgets: [
    {
      widgetName: 'appointment',
      version: '1.0.0',
      config: { position: 'bottom-right', color: 'pink' },
    },
    {
      widgetName: 'pricing',
      version: '1.0.0',
      config: { position: 'bottom-left', color: 'pink' },
    },
  ],
};

const STYLES = {
  'bottom-right': {
    position: 'fixed',
    zIndex: 10000,
    right: 0,
    bottom: 0,
  },
  'bottom-left': {
    position: 'fixed',
    zIndex: 10000,
    left: 0,
    bottom: 0,
  },
};

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgetList: null,
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    // write config to windows
    window.SMWS = {
      appId: exampleConfig.appId,
      cdnBaseUrl: exampleConfig.cdnBaseUrl,
      registerServices: exampleConfig.registeredWidgets.map(
        (item) => item.widgetName
      ),
    };

    this.setState({ widgetList: exampleConfig.registeredWidgets });
  }

  createWidgetElement = (widget) => (
    //TODO: if registered widget has config, must add widget root element
    <>
      <div
        id={`smws-${widget.widgetName}`}
        style={
          widget.config && widget.config.position
            ? STYLES[widget.config.position]
            : null
        }
      ></div>
      <Helmet>
        <script
          src={`${window.SMWS.cdnBaseUrl}/widget_${widget.widgetName}_bundle.js`}
          async
        ></script>
      </Helmet>
    </>
  );

  render() {
    return this.state.widgetList
      ? this.state.widgetList.map((widgetItem) =>
          this.createWidgetElement(widgetItem)
        )
      : null;
  }
}

export default Manager;
