var Toolbar = React.createClass({
  render: function() {
    console.log(this.props.greeting);
    return React.createElement(
      'h1',
      null,
      'Hi React'
    )
  }
})