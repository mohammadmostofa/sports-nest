import Image from 'next/image';
import React from 'react';
import DeletePendingData from './DeletePendingData';

const PendingCard = ({booking}) => {
 const {
       _id,
       name,
       email,
       image,
       facilityName,
       facilityType,
       BookingDate,
       timeSlot,
       pricePerHour,
       totalPrice,
       status } = booking
  return (
    
    <div className="w-full flex justify-center p-4">
  <div
    className="w-full max-w-5xl rounded-3xl border border-white/10 
    bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden
    flex flex-col md:flex-row gap-6 p-5"
  >
    
    {/* Image */}
    <div className="md:w-72 w-full overflow-hidden rounded-2xl">
      <Image
        src={image}
        width={400}
        height={250}
        alt={facilityName || "image"}
        className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-300"
      />
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col justify-between">
      
      {/* Top Info */}
      <div className="space-y-3">
        
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-white">
            {facilityName}
          </h2>

          <span
            className={`px-4 py-1 rounded-full text-sm font-medium capitalize
            ${
              status === "pending"
                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                : status === "approved"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {status}
          </span>
        </div>

        <h3 className="text-slate-300 text-lg font-medium">
          {facilityType}
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <p className="bg-white/5 px-3 py-1 rounded-lg">
            📅 {BookingDate}
          </p>

          <p className="bg-white/5 px-3 py-1 rounded-lg">
            ⏰ {timeSlot}
          </p>
        </div>

        <div className="flex items-center gap-6 mt-2">
          <p className="text-slate-300">
            Price:{" "}
            <span className="text-white font-semibold">
              ${pricePerHour}/hr
            </span>
          </p>

          <h5 className="text-2xl font-bold text-violet-400">
            ${totalPrice}
          </h5>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-6">
          
          <div>
                <DeletePendingData booking={booking} />
          </div>
        

        <button
          className="px-5 py-2 rounded-xl bg-violet-500/20 
          border border-violet-500/30 text-violet-300
          hover:bg-violet-500 hover:text-white duration-300"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default PendingCard;