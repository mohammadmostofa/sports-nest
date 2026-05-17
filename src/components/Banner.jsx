import { Button } from "@heroui/react";

const BannerPage = () => {
  return (
    <div>
      
      <div className="
                bg-[url('/Banner.jpg')]
                bg-center
                bg-cover
                min-h-[600px]
                bg-no-repeat 
                relative
                
                " > 


                <div className="absolute inset-0 bg-[rgba(18,19,35,0.34)] flex justify-center items-center">
                  
                      <div className="flex flex-col justify-center items-center">
                          <h1 className="font-extrabold text-4xl px-2 text-center  md:text-6xl
                           bg-gradient-to-r from-[rgb(1,197,251)] via-[rgb(255,0,132)] to-[rgba(194,212,237,0.93)] bg-clip-text text-transparent
                          ">Explore Your Favourite Sports</h1>
                          <p className="text-xl font-medium text-white max-w-2xl mx-auto text-center leading-relaxed pt-10">
                            Discover and book the perfect sports venue effortlessly. Find your ground, reserve instantly, and focus on your game.
                          </p>

                          <div className="pt-12 flex flex-col justify-center items-center">

                               <Button className='px-15 py-6 text-[16px] rounded-md bg-gradient-to-r 
                                      from-[#0014f5] to-[#000a7c]
                                       text-white font-semibold border-0 hover:opacity-80
                                       transition' >Explore Now</Button>

                          </div>

                      </div>


                </div>

                

      </div>

      
    </div>
  );
};

export default BannerPage;