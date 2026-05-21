"use client"
import { Button } from "@heroui/react";
import Image from "next/image";
import Navlink from "./shared/Navlink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { ControlledOpenState } from "./shared/DropDw";

const Navbar = () => {
  const {data:session} = authClient.useSession();
    const user = session?.user;

  return (
    <div className=" m-2 border rounded-sm border-[rgba(36,47,98,0.95)] sticky top-0 z-50 bg-[rgba(25,32,65,0.8)] font-[--var-bebas]">
          <div className="navbar shadow-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {/* mobile mood */}
           <Navlink></Navlink>
        
      </ul>
    </div>
    {/* desktop style */}
      <div className=" hidden md:flex items-center justify-start space-x-1">
         <Image  src={'/logo.png'}
                 width={50}
                 height={50}
                 alt="/logo.png"
                 className="animate-spin "
                   style={{
                       animationDuration: "10s",
                     }}
          />
           
           <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[rgb(11,251,255)] via-[rgb(178,40,253)] to-[rgba(237,0,217,0.93)] bg-clip-text text-transparent">
             SportsLest
           </h2>

      </div>
  </div>
  {/* desktop mood */}
  <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-center items-center space-x-4">
      <Navlink></Navlink>
    </ul>
  </div>
  <div className="navbar-end space-x-4">
  
    
      
      {

           user ? <>
                       <ControlledOpenState/>
                 </>

                 : 


                 <>
                        <Link href={'/SignUp'} >
             <Button className="rounded-sm bg-gradient-to-r  from-[rgba(236,0,0,0.9)] to-[#5b0014]  text-white font-semibold border-0 hover:opacity-80 text-md tracking-wide transition px-4 ">
              Register now
              </Button>
    </Link>

            <Link href={'/Login'}>
           <Button className="rounded-sm bg-gradient-to-r from-[#0014f5] to-[#000a7c] text-white font-semibold border-0 hover:opacity-80  text-md tracking-widest  transition px-5">
            Login
           </Button>
           </Link>
                 </>

      }

  </div>
</div>
    </div>
  );
};

export default Navbar;