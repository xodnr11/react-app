import './App.css';
import { Component } from 'react';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';
import CreateContent from './components/CreateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
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
    var _title, _decs, _article = null;

    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _decs = this.state.welcome.decs;
      _article = <ReadContent title={_title} decs={_decs}></ReadContent>
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
      _article = <ReadContent title={_title} decs={_decs}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_decs) {
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, decs:_decs}
        )
        this.setState({
          contents:_contents
        })
      }.bind(this)}></CreateContent>
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

        {_article}
      </div>
    );
  }
}

export default App;