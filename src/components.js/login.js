import React from 'react'
import ResponsiveAppBar from './NavBar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import ButtonAppBar from './newNavBar';

function Login() {
  return (
    <>
    {/* <ResponsiveAppBar/> */}
    <ButtonAppBar/>
    <h1>Login</h1>
    <form>
    {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', color:'blue'  },
      }}
      noValidate
      autoComplete="off"
      alignItems="center"
    > */}
    <h2>
        User className
        <TextField id="outlined-basic" variant="outlined" />
    </h2>
    <h2>
        User className
        <TextField id="outlined-basic" variant="outlined" />
    </h2>
    <h2>
        User className
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </h2>
    <h2>
        User className
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </h2>
      <Button type="submit" >submit</Button> 
    {/* </Box> */}
        
    </form>
    </>
  )
}

export default Login