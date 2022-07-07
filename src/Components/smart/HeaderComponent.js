import React from "react";
import SubscribeButton from "../dumb/Forms/Subscribe/SubscribeButton/SubscribeButton";
import SubscribeEmail from "../dumb/Forms/Subscribe/SubscribeEmail/SubscribeEmail";
import SubscribeWrapper from "../dumb/Forms/Subscribe/SubscribeWrapper/SubscribeWrapper";
import FeatureTitle from "../dumb/header/FeatureTitle/FeatureTitle";
import FeatureWrapper from "../dumb/header/FeatureWrapper/FeatureWrapper";
import HeaderWrapper from "../dumb/header/HeaderWrapper/HeaderWrapper";
import Logo from "../dumb/header/Logo/Logo";
import NavBar from "../dumb/header/NavBar/NavBar";
import SigninButton from "../dumb/header/SigninButton/SigninButton";


function HeaderComponent() {
    return (
        <>
        <HeaderWrapper>
            <NavBar className='navbar-home'>
                <Logo />
                <SigninButton />
            </NavBar>
            <FeatureWrapper className='feature-wrapper-home'>
                <FeatureTitle className='feature-title-home' >
                Unlimited movies, TV shows and more.
                </FeatureTitle>
            </FeatureWrapper>
            <SubscribeWrapper>
                <SubscribeEmail type='email' />
                <SubscribeButton> Get started</SubscribeButton>
            </SubscribeWrapper>
        </HeaderWrapper>
        </>
    )
}

export default HeaderComponent;