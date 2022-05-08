import React from "react";

import Footer from "../component/footer/footer.component";
import Nav from "../component/Navbar/Navbar.component";
import Register from "../component/Register.component.jsx/register";
const RegisterLayout = (props)=>{
    return(
        <>
        <Nav/>
            <Register/>
            <Footer/>
            {props.children}
        </>
    );
};

export default RegisterLayout;
