import React from 'react';
import Toolbar from './Toolbar.react.jsx';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Hello There'
    };
  }
  render() {
    return (
      <div className="container">
        <Toolbar greeting={ this.state.greeting }/>
      </div>
    );
  }
};

module.exports = Dashboard;