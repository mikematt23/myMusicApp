import React from "react"
import App from "../App"
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import MySlider from './Slider'
import NavBar from '../Navbar'
import '../Components/Login.css'


const Login = (props)=>{
   if(props.loggedIn){
     return(
       <div>
          <NavBar/>
          <Card className = 'width'>
            <MySlider/>
            <Button onClick ={props.click}>Log Out</Button>
          </Card>
       </div>
       
     )
   }else{
     return (
       <App/>
     )
   }
}


export default Login