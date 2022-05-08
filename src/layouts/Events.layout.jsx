import React from "react";

import Nav from "../component/Navbar/Navbar.component";
import Footer from "../component/footer/footer.component";
import Events from "../component/Events/events.component";
import SimpleSlider from "../component/Hero.carousel/HeroCaraousal";
const Eventslayout = (props)=>{
    return(
        <>
            <Nav/>
            <SimpleSlider/>
            <Events/>
            <Footer />
           
        </>
    );
};

export default Eventslayout;
