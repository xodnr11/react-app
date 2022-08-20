import { Component } from 'react';

class Content extends Component {
    render() {
      console.log('Content render');

      return (
        <header>
          <h3>{this.props.title}</h3>
          {this.props.decs}
        </header>
      );
    }
  }

  export default Content;