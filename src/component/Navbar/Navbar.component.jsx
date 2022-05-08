import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./car.css";

const NavLg = () => {
   return (
   <>
   
   <div className="mx-1 flex w-full">  
  
   
   <div className="bg-blue-500 flex items-center justify-center ml-30 px-30 w-full h-24 py-6"> 
     <div className="w-25 h-20 ">
    <Link to="/"><img src="http://localhost:3000/static/media/logo.78d43c0b.jpeg" className="mr-10 pr-64 w-full h-full rounded-sm" alt="" />
</Link>
     </div>
        <div className="pl-64">

<Link to="/">        <button type="submit" className="text-white text-lg  pl-40 hover:opacity-900 py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">HOME</button>
</Link>
<a href="#aboutus" className="transition delay-1000 duration-300 scroll-smooth">
<button type="submit" className="text-white text-lg pl-10  hover-text-white  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">ABOUT US</button>

</a>
<a href="#events">      <button type="submit" className="text-white text-lg pl-10 hover-text-red  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">EVENTS</button>
</a>
<Link to="/register"><button type="submit" className="text-blue text-md bg-pink-400 hover-text-white font-bold py-1 px-2 border-yellow-700 hover:border-yellow-500 rounded-md">ENROLL</button>
</Link>
        </div>
      </div>
    </div>
   </>
   );
  };


  const NavMd = () => {
    return (
     <>
     <div className="mx-1 w-full">  
       <div className="bg-blue-600 flex items-center justify-center gap-3 w-full h-20 py-4"> 
       <Link to="/"><img src="http://localhost:3000/static/media/logo.78d43c0b.jpeg" className="mr-10 pr-64 w-full h-full rounded-sm" alt="" />
</Link>         <Link to="/"><button type="submit" className="text-white text-md  pl-20 hover:opacity-900 py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">HOME</button>
</Link>
<Link to="/aboutus"><button type="submit" className="text-white text-md pl-2  hover-text-white  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">ABOUTUS</button>
</Link>
       <Link to="/events"><button type="submit" className="text-white text-md pl-4 hover-text-red  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">EVENTS</button>
</Link>
         <Link to="/register"><button type="submit" className="text-blue text-md bg-pink-400 hover:bg-red-300 hover-text-white font-bold py-1 px-2 border-yellow-700 hover:border-yellow-500 rounded-md">ENROLL</button>
</Link>
       </div>
     </div>
     </>
    );
   };

   const NavSm = () => {
    return (
      <>
      <div className="mx-1 w-full w-screen-width">  
        <div className="bg-blue-600 w-full py-4 flex items-center justify-center "> 
          <h1 className="text-white font-weight-900 text-2xl px-6"><b>ECA</b></h1>
          <Link to="/"><button type="submit" className="text-white text-sm  pl-1 hover:opacity-900 py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">HOME</button>
</Link>
<Link to="/aboutus"><button type="submit" className="text-white text-sm pl-1  hover-text-white  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">ABOUTUS</button>
</Link>
       <Link to="/events"><button type="submit" className="text-white text-sm pl-1 hover-text-red  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">EVENTS</button>
</Link>
          <Link to="/register"><button type="submit" className="text-blue text-sm bg-pink-400 hover:bg-red-300 hover-text-black font-bold py-1 px-3 border-yellow-700 hover:border-yellow-500 rounded-md">JOIN</button>
</Link>
        </div>
      </div>
      </>
     );
   };


   const Nav = ()=>{
    return(
        <nav>
          <div className="hidden lg:flex">
      <NavLg/>
          </div>
        <div className="hidden md:flex lg:hidden">
          <NavMd/>
        </div>
        <div className="sm:flex md:hidden lg:hidden">
          <NavSm/>
          </div>
        </nav>
    );
}


  export default Nav;