import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      isLoggedIn : false,
      user: ''
    }
  }
  render(){
    if(this.state.isLoggedIn){
      return(
        <div>
          <h1></h1>
        </div>
      )
    } else{
      return(
        <div>
          <h1></h1>
        </div>
      )
    }
  }
}

export default App;
