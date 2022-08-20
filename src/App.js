import './App.css';
import { Component } from 'react';
import Content from './components/Content';
import Subject from './components/Subject';
import TOC from './components/TOC';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome', //props와 state 값이 바뀌면 render 함수가 다시 실행된다.
      welcome:{title:'Welcome', decs:'Hello, React!'},
      subject:{title:"Web", sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', decs:'HTML is for information ...'},
        {id:2, title:'CSS', decs:'CSS is for design ...'},
        {id:3, title:'JavaScript', decs:'JavaScript is for interactive ...'}
      ]
    }
  }
  render() {
    console.log('app render');
    var _title, _decs = null;

    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _decs = this.state.welcome.decs;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _decs = this.state.contents[0].decs;
    }
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href='/' onClick={function(e){
            console.log(e);
            e.preventDefault();
            alert('hi');
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>

        <Content title={_title} decs={_decs}></Content>
      </div>
    );
  }
}

export default App;