import React from 'react'
import ResponsiveAppBar from './NavBar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { borderRadius } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import { lightBlue } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const paperStyle={padding:30 ,height:'70vh', width:'25rem',margin:'20px auto', borderRadius :'30 px'}
const avatarStyle={backgroundColor:'lightBlue'}
const lowerBoxStyle={paddingTop:'30px',paddingBottom:'30px' }
const submitBtnStyle={padding:15  , borderRadius :'30 px'}
// const innerBoxStyle={margin:"9"}

function Signup() {
  return (
    <>
    <h1 align='center'>Sign Up</h1>
    <Paper elevation={10} style={paperStyle} >
    <form>
      <Grid align='center'>
    {/* <Container maxWidth='xs' mb={4}  variant='outlined' color='primary'> */}
    <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
       </Grid>
       <Box mb={4} mt={4}>
        {/* <Box style={innerBoxStyle} > */}
        
        <Box mb={2} >
        <TextField  variant='outlined' label='email' autoComplete='email' autoFocus fullWidth required/>  
        </Box>

        <Box mb={2}>
        <TextField variant='outlined' label='password' autoComplete='password' autoFocus fullWidth required/>   
        </Box>

        <Box>
        <TextField variant='outlined' label='Confirm_password' autoComplete='Confirm_password' autoFocus fullWidth required/>   
        </Box>

        <Box >
          <Grid align='left'>
          <FormControl style={lowerBoxStyle} display='flex'>
      <FormLabel id="demo-row-radio-buttons-group-label" required>Gender</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="female"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>


       <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Birthdate"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        required
      />
    </Stack>
    <Box  mb={2} mt={4} sx={{ borderRadius:'50%'}}>
      <Button type='submit' variant='contained' color='primary' fullWidth  style={submitBtnStyle}>Sign Up</Button>
      </Box>
      <Typography align='center'>Already a member? 
        <Link to='/Login'>Login</Link>
      </Typography>
    </Grid>  
        </Box>
      </Box>
    </form>  
    </Paper>
    </>
  )
}

export default Signup