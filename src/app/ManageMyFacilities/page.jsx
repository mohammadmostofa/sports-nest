import Conformed from "@/components/Conformed";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ManageMyFaclilitiesPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const res = await fetch(`http://localhost:5000/booking/${user?.id}`,{
   cache:"no-store"
});

 const booked = await res.json();


  return (
         
    <div>
                {
                    booked.map(booked => <Conformed key={booked._id} booked={booked} ></Conformed> )
                }
    </div>
  
  );
};

export default ManageMyFaclilitiesPage;