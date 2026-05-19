import { Button } from "@heroui/react";
import { div } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";


  const DetailsPage = async ({params}) => {
  const {id} = await params
  const res = await fetch(`http://localhost:5000/facility/${id}`)
  const DetailsFacility = await res.json()

      const {facilityName,
             facilityType,
             location,
             pricePerHour,
             email,
             image, 
             description, 
             availableTimeSlots,} = DetailsFacility;


             


  return (
    
    <div className="py-6 px-4 max-w-7xl mx-auto">
  {/* Back Button */}
  <Link href={'/AllFacilities'}>
    <p className="text-xs border-b-2 pt-2 hover:text-indigo-600 border-b-red-500 w-fit font-light mb-6">
      Back To All Facilities
    </p>
  </Link>

  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-start">
    

    <div className="lg:col-span-2 space-y-6">
      <div>
        <h2 className="font-bold text-2xl md:text-3xl py-2 shadow-sm w-fit">
          {facilityName}
        </h2>
        
        <p className="flex justify-start items-center space-x-2 text-gray-400 mt-2">
          <span><CiLocationOn /></span> 
          <span>{location}</span>
        </p>

        <div className="my-4 overflow-hidden rounded-2xl">
          <Image
            src={image}
            width={1000}
            height={600}
            alt={facilityName}
            className="w-full h-[250px] md:h-[400px] object-cover"
          />
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="flex justify-between items-center text-lg font-semibold">
            <span>{facilityType}</span> 
            <span className="text-indigo-500">${pricePerHour}/hr</span>
          </h4>
          <h5 className="text-sm text-gray-400">Date: {availableTimeSlots}</h5>
          
          <hr className="border-white/10 my-4" />
          
          <h3 className="text-xl font-bold">Overview</h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
          <span className="text-green-400 text-xl">✔</span>
          <p className="text-sm text-gray-200">
            Professional trainers for every sports category
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
          <span className="text-blue-400 text-xl">⚡</span>
          <p className="text-sm text-gray-200">
            Modern equipment and premium facilities
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
          <span className="text-red-400 text-xl">🏆</span>
          <p className="text-sm text-gray-200">
            Weekly tournaments and competitive matches
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
          <span className="text-yellow-400 text-xl">🔥</span>
          <p className="text-sm text-gray-200">
            Flexible training schedules for all members
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md md:col-span-2">
          <span className="text-violet-400 text-xl">💪</span>
          <p className="text-sm text-gray-200">
            Friendly environment focused on fitness and performance
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT  */}
    <div className="w-full max-w-md mx-auto lg:w-full bg-white/5 border
     border-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl space-y-5 lg:sticky lg:top-6">
      
      {/* Price */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">
          ${pricePerHour}
          <span className="text-sm text-gray-400 font-medium"> /hour</span>
        </h2>
      </div>

      {/* Date */}
      <div className="flex flex-col bg-black/20 rounded-2xl p-4 space-y-2">
        <p className="text-gray-400 text-sm">Booking Date</p>
        <input 
          type="date" 
          name="date" 
          className="input w-full bg-transparent text-white border border-white/20 rounded-
           p-2 outline-none focus:border-indigo-500 text-sm" 
        />
      </div>

      {/* Highlights */}
      <div className="bg-black/20 rounded-2xl p-4">
        <h3 className="text-white font-semibold mb-3 text-sm">
          Highlights
        </h3>
        <ul className="space-y-2 text-xs md:text-sm text-gray-300">
          <li className="flex items-center gap-2">✔ Professional Training Area</li>
          <li className="flex items-center gap-2">✔ Modern Sports Equipment</li>
          <li className="flex items-center gap-2">✔ Secure & Friendly Environment</li>
          <li className="flex items-center gap-2">✔ Flexible Booking Schedule</li>
        </ul>
      </div>

      {/* Button */}
      <Button variant="primary" className="w-full py-3 rounded-2xl text-white hover:text-white-900/10  ">
        Book Now
      </Button>

    </div>

  </div>
</div>

  );
};

export default DetailsPage;