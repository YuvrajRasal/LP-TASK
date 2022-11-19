import { Link } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormLogin from './FormLogin'; 
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

const navigate = useNavigate()

  function submitForm() {
    setIsSubmitted(true);
  }   

  return (
    <>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : navigate("/login")}
    </>
  );
};

export default Form;