import React  from 'react';


var RequiredInputText = React.createClass({
  getInitialState:function(){
    return {
      userInputMessage: '',
      userInput: ''
    };
  },
  handleUserInput: function (e) {
    this.setState({
      userInput: e.target.value
      
    });
  },
  
  handleUserInputMessage: function(e){
    
    this.setState({
      userInputMessage: e.target.value
    });
  },
  
  render: function () {
    return (
      <div>
      <h1>姓名</h1>
        <input 
          type="text" 
          value={this.state.userInput}
          onChange={this.handleUserInput} 
           placeholder="輸入姓名"/>
        <h1>想說什麼呢？</h1>
         <input 
          type="text" 
          value={this.state.userInputMessage}
          onChange={this.handleUserInputMessage} 
          placeholder="輸入您的留言"/>
        <h1>您的姓名  {this.state.userInput}</h1>
        <h1>您的留言  {this.state.userInputMessage}</h1>
      </div>
    );
  }
});

module.exports = RequiredInputText;

/*import React ,{Component} from 'react';
import ReactDom from 'react-dom';
export default class RequiredInputText extends Component {
    constructor(props){
        super(props);//繼承所有props
        this.state = {
            UserName: '',
            UserInput: ''};
            
    }
    
    handleUserName(e){ 
        this.setState({
            UserName: e.target.value
        });
    }
 //讓user同步輸入名字改變結束

    handleUserInput(e){
        this.setState({
           UserInput: e.target.value
        });
    }
  //讓user同步輸入留言改變結束

    render(){
        return (
            <div>
              
                  <h1>姓名</h1>
                  <input type='text' 
                  value={this.state.UserName} 
                  placeholder="輸入姓名" 
                  onChange={this.handleUserName} />
                  
                  <h1>留言</h1>
                  <input type="text" 
                  value={this.state.UserInput} 
                  placeholde="輸入您的留言" 
                  onChange={this.handleUserInput} />
                  <h1>{this.state.UserName}</h1>
                  <h1>{this.state.UserInput}</h1>
              
            </div>
        );
    }
    //render function 結束
}
*/