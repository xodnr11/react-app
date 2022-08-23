import './App.css';
import { Component } from 'react';
import Content from './components/Content';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome', //props와 state 값이 바뀌면 render 함수가 다시 실행된다.
      selected_id:2,
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
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_id) {
          _title = data.title;
          _decs = data.decs;
          break;
        }
        i++;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>

        <TOC
          data={this.state.contents}
          onChangePage = {function(id){
            this.setState({
              mode:'read',
              selected_id : Number(id)
            })
          }.bind(this)}>
        </TOC>
        
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>

        <Content title={_title} decs={_decs}></Content>
      </div>
    );
  }
}

export default App;