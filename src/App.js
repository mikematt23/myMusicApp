import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import Login from './Components/Login'


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
          <form>
            <input type ='text'/>
            <br/>
            <input type ='password'/>
            <br/>
            < Button onClick ={this.changeState}> Log In</ Button>
          </form>
        </div>
      )
    }
  }
}

export default App;
