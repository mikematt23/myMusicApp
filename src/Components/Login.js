import React from "react"
import Slider from '@material-ui/core/Slider'
import App from "../App"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SimpleCard from './Switch'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './Navbar'
import SelectBar from './Select'
import SelectCard from "./Select"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '10px',
    
  },
  grid:{
    paddingTop: '30px'
  }
}));

const Login = (props)=>{
  const classes = useStyles();
   if(props.loggedIn){
     return(
       <div>
         <div className = {classes.root}>
           <NavBar></NavBar>

           <Grid className = {classes.grid}container spacing={3}>
             <Grid className = {classes.paper} item xs>
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
           </Grid>
           <Grid item xs>
             <SimpleCard></SimpleCard>
           </Grid>
           <Grid item xs>
             <SelectCard></SelectCard>
           </Grid>
           
           </Grid>
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