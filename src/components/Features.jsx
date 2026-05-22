import React from 'react';
import FaciliticsCard from './FaciliticsCard';

const FeaturesPage =async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/features`)
      const facilities = await res.json()
  return (
    <div className='py-10'>        
        {/* Heading */}
        <div className="text-center mt-7 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white my-6">
            Best <span className="text-[#0f90f4]">Features</span>
          </h2>

          <p className="text-white mt-4 max-w-4xl mx-auto my-5">
            Train smarter, play harder, and enjoy world-class sports facilities designed for every athlete.
            From modern training zones to seamless booking and premium support, every feature is built to elevate your game.
          </p>
        </div>

        {/* Stats */}
            
            <div className='flex flex-col justify-center items-center' >
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-hidden gap-6 justify-items-center my-7">                         
                           {
                              facilities.map(facilities => 
                              <FaciliticsCard key={facilities._id} facilities={facilities} >                               
                              </FaciliticsCard>)
                           }

                </div>



    </div>

    </div>
  );
};

export default FeaturesPage;