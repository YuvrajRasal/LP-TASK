
import validate from './validateInfo';
import useForm from './UseForm';

import React ,{useState} from 'react'
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
import FormSuccess from './FormSuccess';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const paperStyle={padding:30 ,height:'70vh', width:'20rem',margin:'20px auto', borderRadius :'30 px'}
const avatarStyle={backgroundColor:'lightBlue'}


const FormLogin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function submitForm() {
    setIsSubmitted(true);
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
    "login"
  );

  return ( 
  <>
  { !isSubmitted ?
  <>
    <h1 align='center'>Login</h1>
    <Paper elevation={10} style={paperStyle} >
    <form onSubmit={handleSubmit}>
      <Grid align='center'>
    {/* <Container maxWidth='xs' mb={4}  variant='outlined'
     color='primary'> */}
    <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
       </Grid>
       <Box mb={4} mt={4}>
        {/* <Box style={innerBoxStyle} > */}
        <Box mb={2} >
        <TextField variant='outlined'
         label='email'autoComplete='email' autoFocus fullWidth
          required
          name='email'
          value={values.email}
          onChange={handleChange}/> 
        {errors.email && <Typography color='red'>invalid email</Typography>} 
          
        </Box>
        <Box mb={2}>
        <TextField variant='outlined'
         type='password' label='password'autoComplete='password'
         fullWidth required
          name='password'
            value={values.password}
            onChange={handleChange}/>
        {errors.password && <Typography color='red'>invalid password</Typography>} 

        </Box>
        <Box>
         <Checkbox {...label}  alignitems="flex-start" /> Remember me  
        </Box>
       
      </Box>
      <Box  mb={2}>
      <Button type='submit' variant='contained'
       color='primary' fullWidth >Login</Button>
       
      </Box>
      <Typography mb={2} mt={4}> 
        <Link to='/'>forgot password?</Link>
      </Typography>
      <Typography>Do you have an account? 
      <Link to="/">Signup</Link>
      </Typography>
    {/* </Container> */}
    </form>  
    </Paper>
    </> : 
    <FormSuccess/>}
    </>
  )
};

export default FormLogin;