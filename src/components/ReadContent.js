import { Component } from 'react';

class ReadContent extends Component {
    render() {
      console.log('Content render');

      return (
        <article>
          <h3>{this.props.title}</h3>
          {this.props.decs}
        </article>
      );
    }
  }

  export default ReadContent;