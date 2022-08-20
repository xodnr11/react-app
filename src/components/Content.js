import { Component } from 'react';

class Content extends Component {
    render() {
      return (
        <header>
          <h3>{this.props.title}</h3>
          world wide web!!
        </header>
      );
    }
  }

  export default Content;