"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
const BookingCard = ({DetailsFacility}) => {
  const { data:session } = authClient.useSession();
  const user = session?.user;
  const {facilityName, _id, facilityType, pricePerHour,image} = DetailsFacility; 
  const HourPrice =  Number(pricePerHour)
  const [dates, setDates] = useState("");
  const BookingDate = new Date(dates)
  const [timeSlot, setTimeSlot] = useState("");
  const slots = [
  "9 AM - 10 AM",
  "10 AM - 11 AM",
  "11 AM - 12 PM",
  "12 PM - 1 PM",
  "1 PM - 2 PM",
  "2 PM - 3 PM",
  "3 PM - 4 PM",
  "4 PM - 5 PM",
  "5 PM - 6 PM",
  "6 PM - 7 PM",
  "7 PM - 8 PM"
];

  const calculateHours = (slots) => {
    if (!slots) return 0;
    const [start, end] = slots.split(" - ");

    const convert = (t) => {
      const [time, period] = t.split(" ");
      let hour = parseInt(time);

      if (period === "PM" && hour !== 12) hour += 12;
      if (period === "AM" && hour === 12) hour = 0;

      return hour;
    };

    return Math.max(0, convert(end) - convert(start));
  };

  const hours = calculateHours(timeSlot);
  const totalPrice = hours * pricePerHour;


  // booking
const handleBooking = async (e) => {
  const bookingData = {
    facility_Id:_id,
    username:user?.name,
    user_id:user?.id,
    email:user?.email,
    image,
    facilityName,
    facilityType,
    BookingDate,
    timeSlot,
    totalPrice,
    pricePerHour,
    status:"panding",
  };
        
     
    //  token
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await res.json();

  if (!res.ok) {
    toast.error("Try Again!");
    return;
  }

  toast.success("Booking Created Successfully");
};
    

  return (
<div className="w-full max-w-sm mx-auto lg:sticky lg:top-10">

  <div className="bg-white/5 border border-white/10 backdrop-blur-xl  rounded-2xl shadow-lg hover:shadow-blue-500/10 md:mt-30 transition overflow-hidden">

    {/* Price Header */}
    <div className="text-center py-4 border-b border-white/10">
      <h2 className="text-2xl font-bold text-white">
        ${pricePerHour}
        <span className="text-xs text-white/60 font-normal"> /hour</span>
      </h2>
      <p className="text-[11px] text-white/40">
        Flexible booking
      </p>
    </div>

    {/* Body */}
    <div className="p-4 space-y-3">

      {/* Slot */}
      <div className="bg-black/20 border border-white/10 rounded-xl p-2.5">
        <select 
        required
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="w-full mt-1 bg-black/5 text-white text-sm outline-none"
        >
          <option  className='bg-black/10 text-black ' value="">Choose Slot</option>
          {slots.map((slot, index) => (
            <option key={index} value={slot} className="bg-black/90">
              {slot}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-black/20 border border-white/10 rounded-xl p-2.5">
        <label className="text-[10px] text-white/50 uppercase">
          Date
        </label>

        <input 
          onChange={(e) => setDates(e.target.value)}
          type="date"
          className="w-full mt-1 bg-transparent text-white text-sm outline-none"
         required
       />
      </div>

      {/* Summary */}
      <div className="bg-black/30 border border-white/10 rounded-xl p-3 space-y-1.5 text-xs">

        <div className="flex justify-between text-white/60">
          <span>Slot</span>
          <span className="text-white">{timeSlot || "None"}</span>
        </div>

        <div className="flex justify-between text-white/60">
          <span>Hours</span>
          <span className="text-white">{hours}</span>
        </div>

        <div className="flex justify-between text-white/60">
          <span>Rate</span>
          <span className="text-white">${pricePerHour}</span>
        </div>

        <div className="h-px bg-white/10 my-1" />

        <div className="flex justify-between font-bold text-green-400 text-sm">
          <span>Total</span>
          <span>$ {totalPrice}</span>
        </div>
      </div>

      {/* Button */}
      <Button  onClick={handleBooking} className="w-full py-3 rounded-xl text-white font-bold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-xs tracking-wide uppercase">
        Book Now
      </Button>

    </div>
  </div>
  
</div>
  );
};

export default BookingCard;