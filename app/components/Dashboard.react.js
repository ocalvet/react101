var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      greeting: 'Hello There'
    }
  },
  render: function() {
    return React.createElement(
      'div', 
      null,
      React.createElement(Toolbar, { greeting: this.state.greeting })
    );
  }
})