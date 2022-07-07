import React from 'react';
import FooterComponent from '../Components/dumb/Footer/FooterComponent/FooterComponent';
import HeaderWrapper from '../Components/dumb/header/HeaderWrapper/HeaderWrapper';
import Logo from '../Components/dumb/header/Logo/Logo';
import NavBar from '../Components/dumb/header/NavBar/NavBar';
import HeaderComponent from '../Components/smart/HeaderComponent';
import SigninComponent from '../Components/smart/SigninComponent/SigninComponent';


function SigninPage() {
  return (
    <>
     <HeaderWrapper>
        <NavBar className='navbar-home'>
            <Logo />
        </NavBar>
        <SigninComponent />
     </HeaderWrapper>
     <FooterComponent />
    </>
  )
}

export default SigninPage