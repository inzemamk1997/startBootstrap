import React from "react";
import NavBar from "./NavBar";
import MastHead from "./MastHead";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const App = ()=>{
    return(
        <>
            <NavBar/>
            <MastHead/>
            <Portfolio/>
            <AboutSection/>
            <ContactSection/>
        </>
    );
};

export default App;