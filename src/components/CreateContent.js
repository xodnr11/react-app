import { Component } from 'react';

class CreateContent extends Component {
    render() {
      console.log('Content render');

      return (
        <article>
          <h3>CreateContent</h3>
          <form action='/create_process' method='post' 
            onSubmit={function(e) {
              e.preventDefault();
              //debugger;
              this.props.onSubmit(
                e.target[0].value,
                e.target[1].value
              );
            }.bind(this)}>
            <p><input type='text' name='title' placeholder='title'></input></p>
            <p><textarea name='desc' placeholder='description'></textarea></p>
            <p><input type='submit'></input></p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;