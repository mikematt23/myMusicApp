import React from 'react';
import './App.css';
import NavBar from './Navbar'


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
          <NavBar></NavBar>
          <h1></h1>
        </div>
      )
    }
  }
}

export default App;
