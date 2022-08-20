import './App.css';
import { Component } from 'react';
import Content from './components/Content';
import Subject from './components/Subject';
import TOC from './components/TOC';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:"Web", sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', decs:'HTML is for information ...'},
        {id:2, title:'CSS', decs:'CSS is for design ...'},
        {id:3, title:'JavaScript', decs:'JavaScript is for interactive ...'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>

        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="html"></Content>
      </div>
    );
  }
}

export default App;