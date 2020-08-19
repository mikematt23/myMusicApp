import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button'
import Login from './Components/Login'

import NavBar from './Navbar'



class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      isLoggedIn : false,
      user: ''
    }
  }

  changeState = ()=>{
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
    console.log(this.state.isLoggedIn)
  }

  render(){
    if(this.state.isLoggedIn){
      return(
        <div>
          <Login loggedIn = {this.state.isLoggedIn} click = {this.changeState}/>
        </div>
      )
    } else{
      return(
        <div>

        <NavBar></NavBar>
          <form>
            <input type ='text'/>
            <br/>
            <input type ='password'/>
            <br/>
            < Button onClick ={this.changeState}> Log In</ Button>
          </form>

          
          <h1></h1>

        </div>
      )
    }
  }
}

export default App;
