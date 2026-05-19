import Image from "next/image";

const FaciliticsCard = ({ facilities }) => {
  const { facilityName, facilityType, location, pricePerHour, email, image, description, availableTimeSlots,} = facilities;

  return (
    <div className="group relative w-[310px] h-[420px] mx-auto rounded-[25px] overflow-hidden bg-[#ffc9fb1e] 
    border border-white/10 shadow-xl transition-all duration-500 hover:shadow-purple-500/40 hover:border-purple-500">
      
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          fill
          alt={facilityName}
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 350px) 100vw, 350px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070114] via-[#070114]/80
         to-[#070114]/20 transition-opacity duration-500 group-hover:opacity-95" />
      </div>


      <div className="absolute top-4 left-4 z-10">
        <span className="text-[11px] font-bold tracking-wider uppercase  bg-purple-800/50 border border-purple-500/60
           text-purple-100 px-3 py-1 rounded-full">
          {facilityType}
        </span>
      </div>


      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white h-full">
        
        <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0 mb-3">
          <span className="inline-block bg-purple-500/20 border border-purple-500/30
           text-purple-200 font-semibold text-xs px-3.5 py-1 rounded-full backdrop-blur-md">
             {availableTimeSlots && availableTimeSlots.length > 0 ? availableTimeSlots[0] : "No Slots"}
          </span>
        </div>

        <h1 className="text-2xl tracking-wider font-extrabold mb-4 line-clamp-1 group-hover:text-purple-400 transition-colors duration-300">
          {facilityName}
        </h1>

        <div className="flex items-center gap-1 text-xs text-gray-400 mb-2 transform opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-6">
          <span>📍 {location}</span>
        </div>

        <p className="text-sm text-gray-300/90 font-light line-clamp-2 mb-4 group-hover:text-white transition-colors duration-300">
          {description}
        </p>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between transform translate-y-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-100">Price/Hour</span>
            <span className="text-xl font-black text-white">
              ${pricePerHour}
            </span>
          </div>
          
          {/* Action Button */}
          <button className="bg-purple-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-purple-500 active:scale-95 transition-all duration-300 shadow-lg shadow-purple-600/20">
            View Details
          </button>
          
        </div>

      </div>
    </div>
  );
};

export default FaciliticsCard;