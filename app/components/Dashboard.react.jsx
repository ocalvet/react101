var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      greeting: 'Hello There'
    }
  },
  render: function() {
    return (
      <div className="container">
        <Toolbar greeting={ this.state.greeting }/>
      </div>
    );
  }
});