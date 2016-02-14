var Toolbar = React.createClass({
  render: function() {
    console.log(this.props.greeting);
    return (
      <h1>{ this.props.greeting }</h1>
    );
  }
});