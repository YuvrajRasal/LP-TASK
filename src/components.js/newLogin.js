import React ,{useState} from 'react'
import ResponsiveAppBar from './NavBar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { borderRadius } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';

import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import { lightBlue } from '@mui/material/colors';
import { Link } from 'react-router-dom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const paperStyle={padding:30 ,height:'70vh', width:'25rem',margin:'20px auto', borderRadius :'30 px'}
const avatarStyle={backgroundColor:'lightBlue'}
// const innerBoxStyle={margin:"9"}

function NewLogin() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [submitError, setSubmitError] = useState(false)



  function loginHandler(e) {
    e.preventDefault()

    if( ! setEmailError() || ! setPasswordError() )
    {
      setSubmitError(true)
      console.log('error')
    }
    else{
      setSubmitError(false)
      console.log('no error')
    }
    
  }

  function emailHandler(e) {
    let item = e.target.value;
    if(!item.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/))
    {
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }   
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if(!item.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/))
    {
      setPasswordError(true)
    }
    else{
      setPasswordError(false)
    }   
  }
  return (
    <>
    <h1 align='center'>Login</h1>
    <Paper elevation={10} style={paperStyle} >
    <form onSubmit={loginHandler}>
      <Grid align='center'>
    {/* <Container maxWidth='xs' mb={4}  variant='outlined' color='primary'> */}
    <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
       </Grid>
       <Box mb={4} mt={4}>
        {/* <Box style={innerBoxStyle} > */}
        <Box mb={2} >
        <TextField onChange={emailHandler} variant='outlined' label='email' autoComplete='email' autoFocus fullWidth required/> 
        {emailError? <Typography color='red'>invalid email</Typography>:''} 
        </Box>
        <Box mb={2}>
        <TextField onChange={passwordHandler}  variant='outlined' type='password' label='password' autoComplete='password' autoFocus fullWidth required/>   
        {passwordError? <Typography color='red'>password between 7 to 15 characters which contain at least one numeric digit and a special character</Typography>:''} 
        </Box>
        <Box    >
         <Checkbox {...label}  alignitems="flex-start" /> Remember me  
        </Box>
       
      </Box>
      <Box  mb={2}>
      <Button onChange={loginHandler} type='submit' variant='contained' color='primary' fullWidth >Login</Button>
       
      </Box>
      {submitError? <Typography color='red'>Please fix the error to submit</Typography>:''}
      <Typography mb={2} mt={4}> 
        <Link to='/'>forgot password?</Link>
      </Typography>
      <Typography>Do you have an account? 
      <Link to="/">Signup</Link>
      </Typography>
    {/* </Container> */}
    </form>  
    </Paper>
    </>
  )
}

export default NewLogin