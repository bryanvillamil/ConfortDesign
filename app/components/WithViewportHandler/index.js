/* eslint-disable no-undef */
/**
 *
 * WithViewportHandler
 *
 */

import React, { Component } from 'react';
import { getViewPortState } from './handlers';

export const ViewPortController = WrappedComponent =>
  class ViewPortControllerInner extends Component {
    //eslint-disable-line
    // static displayName = `ViewPortController(${getDisplayName(WrappedComponent)})`;
    state = {
      windowWidth: window.innerWidth,
      viewportType: getViewPortState(),
    };

    // React methods
    componentDidMount() {
      window.addEventListener('resize', this.handleResizeWindow);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResizeWindow);
    }

    // -- end react methods
    handleResizeWindow = () => {
      const { viewportType } = this.state;
      const newViewPortType = getViewPortState();
      if (newViewPortType !== viewportType) {
        this.setState({
          windowWidth: window.innerWidth,
          viewportType: newViewPortType,
        });
      }
    };

    setWindowWidth = () => this.setState({ windowWidth: window.innerWidth });

    render() {
      const props = Object.assign({}, this.props, {
        viewport: {
          type: this.state.viewportType,
          isMobileView: this.state.viewportType === 'mobile',
          isTabletView: this.state.viewportType === 'tablet',
          isDesktopView: this.state.viewportType === 'desktop',
          windowWidth: this.state.windowWidth,
        },
      });
      return <WrappedComponent {...props} />;
    }
  };

export default ViewPortController;
