import React from "react";
import qr from "./QR.jpeg";
import logo  from "./logo.jpeg";
const RegisterLg = ()=>{

   
    return (
        <>
        <div className="flex w-5/2 rounded-lg items-center justify-center min-h-screen bg-gray-100 " >
    <div className="px-8 py-6 mx-4 mt-4 rounded-lg text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center rounded-lg">
        <div className="flex justify-center  w-1/2 rounded-lg">
            <img src={logo} alt="" />
        </div>
        </div>
        <h3 class="text-2xl font-bold text-center">Join us</h3>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScQQSPsV7CDyt-um66Otweti0T0mKUFNMwlXsa6D6FpWn1MIA/formResponse"
        method="post">
            <div className="mt-4">
                <div>
                    <label className="block" for="Name">NAME</label>
                            <input type="text" placeholder="Name" name="entry.160193649"
                             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" for="email">EMAIL</label>
                            <input type="text" placeholder="Email" name="entry.520949942"
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" >Year</label>
                            <input type="text" placeholder="Year" name="entry.1256562274"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" >BRANCH</label>
                            <input type="text" placeholder="Branch" name="entry.1228840174"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">SECTION</label>
                            <input type="text" placeholder="Section" name="entry.1887786423"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">ROLL NO :</label>
                            <input type="text" placeholder="Roll No." name="entry.1039235763"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">MOBILE NO</label>
                            <input type="text" placeholder="Mobile No." name="entry.1816745702"

                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4 w-100">
                    <img src={qr} alt="" className="w-auto" />
                </div>
                <div className="mt-4">
                    <label className="block">TRANSACTION ID</label>
                            <input type="text" placeholder="Enter your transaction Id..." required name="entry.1816745702"

                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="flex">
                    <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-2xl hover:bg-blue-900">Submit</button>
                </div>
                
            </div>
            </form>
            </div>
            </div>
        </>
    );    
}
const RegisterMd = ()=>{

   
    return (
        <>
        <div className="flex w-5/2 rounded-lg items-center justify-center min-h-screen bg-gray-100 " >
    <div className="px-8 py-6 mx-4 mt-4 rounded-lg text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center rounded-lg">
        <div className="flex justify-center  w-1/2 rounded-lg">
            <img src={logo} alt="" />
        </div>
        </div>
        <h3 class="text-2xl font-bold text-center">Join us</h3>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScQQSPsV7CDyt-um66Otweti0T0mKUFNMwlXsa6D6FpWn1MIA/formResponse"
        method="post">
            <div className="mt-4">
                <div>
                    <label className="block" for="Name">NAME</label>
                            <input type="text" placeholder="Name" name="entry.160193649"
                             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" for="email">EMAIL</label>
                            <input type="text" placeholder="Email" name="entry.520949942"
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" >Year</label>
                            <input type="text" placeholder="Year" name="entry.1256562274"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" >BRANCH</label>
                            <input type="text" placeholder="Branch" name="entry.1228840174"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">SECTION</label>
                            <input type="text" placeholder="Section" name="entry.1887786423"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">ROLL NO :</label>
                            <input type="text" placeholder="Roll No." name="entry.1039235763"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">MOBILE NO</label>
                            <input type="text" placeholder="Mobile No." name="entry.1816745702"

                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4 w-100">
                    <img src={qr} alt="" className="w-auto" />
                </div>
                <div className="mt-4">
                    <label className="block">TRANSACTION ID</label>
                            <input type="text" placeholder="Enter your transaction Id..." required name="entry.1816745702"

                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="flex">
                    <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-2xl hover:bg-blue-900">Submit</button>
                </div>
                
            </div>
            </form>
            </div>
            </div>
        </>
    );    
}


const Registersm = ()=>{
    return (
        <>
        
        <div className="flex w-full rounded-lg items-center justify-center min-h-screen" >
    <div className="px-8 py-6 mx-4 mt-4 rounded-lg text-left bg-white shadow-lg w-2/3">
        <div className="flex justify-center pl-20 ml-20 w-1/2 rounded-lg">
            <img src={logo} alt="" />
        </div>
        <h3 class="text-2xl font-bold text-center">Join us</h3>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScQQSPsV7CDyt-um66Otweti0T0mKUFNMwlXsa6D6FpWn1MIA/formResponse"
        method="post">
            <div className="mt-4">
                <div>
                    <label className="block" for="Name">NAME</label>
                            <input type="text" placeholder="Name" name="entry.160193649"
                             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" for="email">EMAIL</label>
                            <input type="text" placeholder="Email" name="entry.520949942"
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" >Year</label>
                            <input type="text" placeholder="Year" name="entry.1256562274"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" >BRANCH</label>
                            <input type="text" placeholder="Branch" name="entry.1228840174"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">SECTION</label>
                            <input type="text" placeholder="Section" name="entry.1887786423"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">ROLL NO :</label>
                            <input type="text" placeholder="Roll No." name="entry.1039235763"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">MOBILE NO</label>
                            <input type="text" placeholder="Mobile No." name="entry.1816745702"

                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="flex">
                    <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-2xl hover:bg-blue-900">Submit</button>
                </div>
                
            </div>
            </form>
            </div>
            </div>
        </>
    );
}

const Register = ()=>{
    return (
        <login>
            <div className="hidden lg:block">
                <RegisterLg/>
            </div>
            <div className="sm:hidden md:block lg:hidden">
                <RegisterMd/>
            </div>
            
        </login>
    );
}
export default Register;
