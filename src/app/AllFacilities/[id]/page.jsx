import { DeleteFacilitics } from "@/components/DeleteFaclilitics";
import EditFacilitics from "@/components/EditFacilitics";
import BookingCard from "@/components/shared/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";


  const DetailsPage = async ({params}) => {
  const {token} = await auth.api.getToken({
      headers: await headers(),
  })  

  const {id} = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`,{
      headers: {
    "Authorization": `Bearer ${token}`
  },

  })
  const DetailsFacility = await res.json() 
      const {facilityName,
             facilityType,
             location,
             pricePerHour,
             image, 
             description, 
             availableTimeSlots,} = DetailsFacility;    

  return (
    
<div className="py-8 px-4 max-w-7xl mx-auto text-white min-h-screen">
  
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10 mb-8">
    <div>
      <Link href="/AllFacilities" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back To All Facilities</span>
      </Link>
    </div>

    {/* delete and edit btn */}
    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
      <EditFacilitics DetailsFacility={DetailsFacility} />
      <DeleteFacilitics DetailsFacility={DetailsFacility} />
    </div> 
  </div>


  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-start">
    
    <div className="lg:col-span-2 space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight
         bg-gradient-to-r from-white via-gray-200 to-gray-400
          bg-clip-text text-transparent">
          {facilityName}
        </h1>
        
        <div className="flex items-center gap-2 text-gray-400 mt-3 text-sm font-medium">
          <CiLocationOn className="text-blue-400 text-lg flex-shrink-0" />
          <span>{location}</span>
        </div>

        <div className="my-6 overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-2 backdrop-blur-sm">
          <Image 
            src={image} 
            width={1000} 
            height={600} 
            alt={facilityName || 'Facility Image'} 
            className="rounded-xl object-cover w-full h-auto"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">Category</span>
              <span className="text-lg font-semibold text-gray-200">{facilityType}</span>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">Rate</span>
              <span className="text-xl font-bold text-blue-400">${pricePerHour}<span className="text-xs text-gray-400 font-normal">/hr</span> </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-black/20 rounded-xl p-3 text-sm text-gray-300 border border-white/5">
            <span className="text-amber-400 font-medium uppercase text-xs tracking-wider px-2 py-0.5 rounded bg-amber-400/10">Availability</span>
            <span className="font-medium text-gray-200">{availableTimeSlots}</span>
          </div>
          
          <hr className="border-white/10 my-6" />
          
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-wide text-gray-100">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
              {description}
            </p>
          </div>
        </div>
      </div>
         
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        
        <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20">
          <div className="flex-shrink-0 p-1.5 rounded-xl bg-green-500/10 text-green-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-200 leading-relaxed pt-0.5">
            Professional trainers for every sports category
          </p>
        </div>

        <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md 
        transition-all duration-300 hover:bg-white/10 hover:border-white/20">
          <div className="flex-shrink-0 p-1.5 rounded-xl bg-blue-500/10 text-blue-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-200 leading-relaxed pt-0.5">
            Modern equipment and premium facilities
          </p>
        </div>

        <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4
         backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20">
          <div className="flex-shrink-0 p-1.5 rounded-xl bg-red-500/10 text-red-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 8h4a2 2 0 002-2v-3a2 2 0 00-2-2h-4m0 7h-4a2 2 0 01-2-2v-3a2 2 0 012-2h4" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-200 leading-relaxed pt-0.5">
            Weekly tournaments and competitive matches
          </p>
        </div>

        <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20">
          <div className="flex-shrink-0 p-1.5 rounded-xl bg-amber-500/10 text-amber-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A8 8 0 0117.657 18.657z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-200 leading-relaxed pt-0.5">
            Flexible training schedules for all members
          </p>
        </div>

        <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md md:col-span-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
          <div className="flex-shrink-0 p-1.5 rounded-xl bg-purple-500/10 text-purple-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-200 leading-relaxed pt-0.5">
            Friendly environment focused on fitness and performance
          </p>
        </div>

      </div>
    </div>

    {/* Right */}
    <div>
       <BookingCard DetailsFacility={DetailsFacility} />
    </div>

  </div>
</div>

  );
};

export default DetailsPage;