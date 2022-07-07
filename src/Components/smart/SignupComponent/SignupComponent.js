import React from 'react';
import SignButton from '../../dumb/SignButton/SignButton';
import SignCaptcha from '../../dumb/SignCaptcha/SignCaptcha';
import SignInput from '../../dumb/SignInput/SignInput';
import SignLink from '../../dumb/SignLink/SignLink';
import SignText from '../../dumb/SignText/SignText';
import SignTitle from '../../dumb/SignTitle/SignTitle';
import './SignupComponent.css';

function SignupComponent( {children , ...restProps }) {
  return (
    <div className='sign-form-wrapper' {...restProps }>
        <form className='sign-form-base'>
            <SignTitle> Sign Up </SignTitle>
            <SignInput 
              type='text'
              placeholder='Name'

            />
            <SignInput 
             type="password"
             placeholder='Password'
             autoComplete='off'
            />
            <SignButton> Sign Up </SignButton>
            <SignText> Already a User ?  <SignLink>SignIn Now </SignLink> </SignText>
            <SignCaptcha> This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</SignCaptcha>
        </form>    
    </div>
  )
}

export default SignupComponent;