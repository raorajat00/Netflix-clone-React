import React from 'react';
import './SignInput.css';

function SignInput( { chidren , ...restProps }) {
  return (
    <input className='sign-input' {...restProps} />
  )
}

export default SignInput;