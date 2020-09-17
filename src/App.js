import React from 'react';
import logo from './logo.svg';
import './App.css';
/**
1. two elements: elementA and elementB
2. click elementA
-- elementA text is bold
-- elementB text is normal
3. click elementB
-- elementA text is normal
-- elementB text is bold
**/

export default class App extends Component {

  state = {
    isAClicked: false,
  }

  handleClick = (clicked) => {
    this.setState({
      isAClicked: clicked
    })
  }

  render(){
    return (
      <div className="App">
        <div className={this.state.isAClicked ? "bold" : ""} onClick={() => this.handleClick(true)}  > 
          Element A 
        </div>
        <div className={this.state.isAClicked ? "" : "bold"} onClick={() => this.handleClick(false)}  > 
          Element B
        </div>
      </div>
    );
  }
  
}