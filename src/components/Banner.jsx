import { Button } from "@heroui/react";
import CountUpPage from "./CountUp";
import Link from "next/link";

const BannerPage = () => {
  return (
    <div>
      
      <div className="
                bg-[url('/Banner.jpg')]
                bg-center
                bg-cover
                min-h-screen
                bg-no-repeat 
                relative
                
                " > 


                <div className="absolute inset-0 bg-[rgba(18,19,35,0.34)] flex justify-center items-center">
                  
                      <div className="flex flex-col justify-center items-center">
                      <h1 className="text-4xl font-extrabold tracking-[4] text-center md:text-6xl lg:text-7xl text-slate-100">
                      Discover & Explore Your <br className="hidden md:inline" />
                      <span className="bg-gradient-to-r from-[#01c5fb] via-[#ff0084] to-[#93c5fd] bg-clip-text text-transparent relative dynamic-glow">
                        Favourite Sports
                      </span>
                     </h1>
                          <p className="text-xl font-medium text-white max-w-2xl mx-auto text-center leading-relaxed pt-10">
                            Discover and book the perfect sports venue effortlessly. Find your ground, reserve instantly, and focus on your game.
                          </p>

                          <div className="pt-12 flex flex-col justify-center items-center">

                               <Link href={'/AllFacilities'}>

                               <Button className='px-15 py-6 text-[16px] rounded-md bg-gradient-to-r 
                                      from-[#0014f5] to-[#000a7c]
                                       text-white font-semibold border-0 hover:opacity-80
                                       transition' >Explore Now</Button>
                                   
                               </Link>

                          </div>

                      </div>


                </div>

                

      </div>
        

        <div>

           <CountUpPage></CountUpPage>
 
        </div>
      
    </div>
  );
};

export default BannerPage;