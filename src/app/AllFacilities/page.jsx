import FaciliticsCard from '@/components/FaciliticsCard';
const AllFacilitiesPage = async() => {
      const res = await fetch(`http://localhost:5000/facility`)
      const facilities = await res.json();

  return (
    <div className='flex flex-col justify-center items-center py-10' >
<h1 className="font-bold text-3xl text-center bg-gradient-to-r 
 from-red-700 via-violet-600 to-blue-500 text-transparent bg-clip-text border-b-2 border-b-[rgb(1,147,149)] w-fit">
  All Facilities 
</h1>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center my-20">                         
                           {
                              facilities.map(facilities => 
                              <FaciliticsCard key={facilities._id} facilities={facilities} >                               
                              </FaciliticsCard>)
                           }

                </div>



    </div>
  );
};

export default AllFacilitiesPage;