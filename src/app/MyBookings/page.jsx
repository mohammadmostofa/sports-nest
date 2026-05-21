import PendingCard from "@/components/shared/PendingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingPage = async () => {
   const session = await auth.api.getSession({
         headers: await headers()
     });

     const user = session?.user;

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`,{
   cache:"no-store"
});

const booking = await res.json();



  return (
    <div>

         {
          booking?.map(booking => <PendingCard key={booking._id} booking={booking} ></PendingCard> )
         }

    </div>
  );
};

export default MyBookingPage;