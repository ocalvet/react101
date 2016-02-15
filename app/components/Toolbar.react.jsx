import React from 'react';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.greeting);
    return (
      <h1>{ this.props.greeting }</h1>
    );
  }
};

export default Toolbar;