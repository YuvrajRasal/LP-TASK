
import validate from './validateInfo';
import useForm from './UseForm';

// import React ,{useState} from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Container, Grid, Typography } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import { borderRadius } from '@mui/system';
// import Avatar from '@mui/material/Avatar';
// import Checkbox from '@mui/material/Checkbox';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
// import { lightBlue } from '@mui/material/colors';
// import { Link } from 'react-router-dom';

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
const paperStyle={padding:30 ,height:'73vh', width:'20rem',margin:'20px auto', borderRadius :'30 px'}
const avatarStyle={backgroundColor:'lightBlue'}
const lowerBoxStyle={paddingBottom:'10px' }
const submitBtnStyle={padding:15  , borderRadius :'30 px'}

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
    <h1 align='center'>Login</h1>
    <Paper elevation={10} style={paperStyle} >
    <form onSubmit={handleSubmit}>
      <Grid align='center'>
    {/* <Container maxWidth='xs' mb={4}  variant='outlined'
     color='primary'> */}
    <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
       </Grid> 

       <Box mb={1} mt={1}>
        {/* <Box style={innerBoxStyle} > */}

        <Box mb={2} >
        <TextField variant='outlined'
         label='email'autoComplete='email' autoFocus fullWidth
          required
          name='email'
          value={values.email}
          onChange={handleChange}/> 
        {errors.email && <Typography color='red'>{errors.email}</Typography>} 
        </Box>

        <Box mb={2}>
        <TextField variant='outlined'
         type='password' label='password'autoComplete='password'
          autoFocus fullWidth required
          name='password'
            value={values.password}
            onChange={handleChange}/>
        {errors.password && <Typography color='red'>{errors.password}</Typography>} 
        </Box>

        <Box mb={1}>
        <TextField variant='outlined'
         type='password' label='Confirm_password'autoComplete='Confirm_password'
          autoFocus fullWidth required
          name='password2'
            value={values.password2}
            onChange={handleChange}/>
        {errors.password2 && <Typography color='red'>{errors.password2}</Typography>} 
        </Box>
        <Box >
          <Grid align='left'>
          <FormControl style={lowerBoxStyle} display='flex'>
      <FormLabel id="demo-row-radio-buttons-group-label" required>Gender</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="female"
        name='gender'
        value={values.gender}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    {errors.gender && <Typography color='red'>{errors.gender}</Typography>} 
    </FormControl>

       <Stack component="form" noValidate spacing={3} mt={1}>
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
        name='DOB'
        value={values.DOB}
        onChange={handleChange}
        mb={3}
      />
    </Stack>
    {errors.DOB && <Typography color='red'>{errors.DOB}</Typography>} 
    <Box  mb={2} mt={2} sx={{ borderRadius:'50%'}}>
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
  );
};

export default FormSignup;