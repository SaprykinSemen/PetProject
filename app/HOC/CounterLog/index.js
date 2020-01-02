import React from 'react';

export default function(Component) {
  class CounterLog extends React.Component {
    shouldComponentUpdate(nextProps) {
      if (this.props.count !== nextProps.count) {
        console.log('this.props.count--->', this.props.count);
        console.log('nextProps.count--->', nextProps.count);
        return true;
      } else {
        return false;
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }
  CounterLog.displayName = `CounterLog(${Component.displayName ||
    Component.name ||
    'Component'})`;

  return CounterLog;
}
