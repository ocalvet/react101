import React from 'react';
import Toolbar from './Toolbar.react.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello World'
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

export default Dashboard;