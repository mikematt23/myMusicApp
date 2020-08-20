import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Login from './Components/Login'

import NavBar from './Components/Navbar'
import SimpleCard from './Components/Switch'

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const changeState = ()=>{
  this.setState({
    isLoggedIn: !this.state.isLoggedIn
  })
  console.log(this.state.isLoggedIn)
}

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
        <div >

        <NavBar></NavBar>
        <div className="SignIn">
        <form  noValidate autoComplete="off">
          <TextField id="standard-basic" label="UserName" /><br/>
          <TextField id="standard-basic" label="Password" /><br/><br/>
          < Button variant="contained" color="primary" onClick ={this.changeState}> Log In</ Button>
         
    </form>
    </div>
          
          <h1></h1>

        </div>
      )
    }
  }
}

export default App;

