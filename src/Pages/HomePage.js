import React from 'react';
import HeaderWrapper from '../Components/dumb/header/HeaderWrapper/HeaderWrapper';
import SigninButton from '../Components/dumb/header/SigninButton/SigninButton';
import JumboComponent from '../Components/dumb/Jumbo/JumboComponent/JumboComponent';
import JumboItem from '../Components/dumb/Jumbo/JumboItem/JumboItem';
import HeaderComponent from '../Components/smart/HeaderComponent';
import Seperator from '../Components/dumb/Seperator/Seperator';
import AccordianComponent from '../Components/dumb/Accordian/AccordianComponent/AccordianComponent';
import FooterComponent from '../Components/dumb/Footer/FooterComponent/FooterComponent';



function HomePage() {
  return (
    <>
       <HeaderComponent />
       <Seperator />
       <JumboComponent />
       <AccordianComponent />
       <Seperator />
       <FooterComponent />
       
    </>
  
  )
}

export default HomePage;