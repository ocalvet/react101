import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard.react.jsx';
import mui from 'material-ui'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './theme/config';

var AppBar = mui.AppBar;
 
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  //the key passed through context must be called "muiTheme"
  static childContextTypes = {
      muiTheme: React.PropTypes.object,
    }
  
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }
  
  render() {
    return (
      <div>
        <AppBar title="Dashboard" />
        <Dashboard />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);