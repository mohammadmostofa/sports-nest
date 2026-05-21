import FaciliticsCard from '@/components/FaciliticsCard';
import SearcAndFilterPage from '@/components/SearcAndFilter';
const AllFacilitiesPage = async() => {
      const res = await fetch(`http://localhost:5000/facility`)
      const facilities = await res.json();

  return (
    <div>
             
             {/* searchBar and filter */}
      <div className='flex flex-col justify-center items-center'> 
                <h3 className='text-3xl font-bold text-center border w-[70%]  mt-12 bg-gradient-to-r from-white/80 to-violet-700 capitalize tracking-wider  bg-clip-text text-transparent '>
                  Explore modern sports arenas, indoor courts, fitness clubs, and professional training spaces.
                </h3>
                  

                  <div>
                      <SearcAndFilterPage></SearcAndFilterPage>
                  </div>

      </div>

    <div className='flex flex-col justify-center items-center' >
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center my-20">                         
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

export default AllFacilitiesPage;