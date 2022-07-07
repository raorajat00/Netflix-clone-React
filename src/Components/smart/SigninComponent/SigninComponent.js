import React from 'react';
import SignButton from '../../dumb/SignButton/SignButton';
import SignCaptcha from '../../dumb/SignCaptcha/SignCaptcha';
import SignInput from '../../dumb/SignInput/SignInput';
import SignLink from '../../dumb/SignLink/SignLink';
import SignText from '../../dumb/SignText/SignText';
import SignTitle from '../../dumb/SignTitle/SignTitle';
import './SigninComponent.css';

function SigninComponent( {children , ...restProps }) {
  return (
    <div className='sign-form-wrapper' {...restProps }>
        <form className='sign-form-base'>
            <SignTitle> Sign In </SignTitle>
            <SignInput 
              type='text'
              placeholder='Email Address'

            />
            <SignInput 
             type="password"
             placeholder='Password'
             autoComplete='off'
            />
            <SignButton> Sign In </SignButton>
            <SignText> New to Netflix?  <SignLink>Signup Now </SignLink> </SignText>
            <SignCaptcha> This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</SignCaptcha>
        </form>    
    </div>
  )
}

export default SigninComponent;