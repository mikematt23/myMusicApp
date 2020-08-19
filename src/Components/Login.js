import React from "react"
import Slider from '@material-ui/core/Slider'
import App from "../App"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


const Login = (props)=>{
   if(props.loggedIn){
     return(
       <div>
         <div>
          <Typography> Music Level</Typography>
           <Slider 
           defaultValue={50}
           aria-labelledby="discrete-slider"
           valueLabelDisplay="auto"
           step={10}
           marks
           min={10}
           max={100}
           />
         </div>
         <Button onClick ={props.click}>Log Out</Button>
       </div>
       
     )
   }else{
     return (
       <App/>
     )
   }
}


export default Login