"use client"

// import toast from "react-hot-toast";

const AddFacilityPage = () => {
  const onSubmit = async (e) =>{
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const AddFacilityInfo = Object.fromEntries(formData.entries());
      console.log(AddFacilityInfo)

      // post api to sent data in mongodb
      const res = await fetch(`http://localhost:5000/facility`,{
           method:"POST",
           headers:{
                'content-type':'application/json'
           },    
            //  sent data in body by process json data type
            body:JSON.stringify(AddFacilityInfo),
            
  
          })    
        

          // comment receive 
          const data = await res.json();

          // condition 

          //    if (data.insertedId) {
          //     toast.success("Destination Added Successfully");
          //  } else {
          //     toast.error("Try Again !");
          //  }


}



  return (
    <div className="hero bg-base-200 min-h-screen py-12 px-4">
      <div className="hero-content w-full p-0">
        <div className="card bg-base-100 w-full max-w-3xl shadow-2xl border border-gray-800">
          <div className="card-body p-6 sm:p-10">
            
            {/* Header */}
            <div className="mb-6 text-center md:text-left border-b border-gray-800 pb-4">
              <h1 className="text-3xl font-extrabold text-white tracking-wide">
                Create New Facility
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Please fill up the form to list a new sports or fitness facility.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Facility Name */}
              <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Facility Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                  placeholder="e.g. Premium Football Turf"
                  required
                />
              </fieldset>

              {/* Facility Type */}
              <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Facility Type</span>
                </label>
                <input
                  type="text"
                  name="facilityType"
                  className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                  placeholder="Select or Type Type"
                  list="facilityTypes"
                  required
                />
                <datalist id="facilityTypes">
                  <option value="Field Sports" />
                  <option value="Court Sports" />
                  <option value="Water Sports" />
                  <option value="Indoor Fitness" />
                  <option value="Track & Athletics" />
                </datalist>
              </fieldset>

              {/* Image URL */}
              <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Image URL</span>
                </label>
                <input
                  type="url"
                  name="image"
                  className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </fieldset>

              {/* Location */}
              <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                  placeholder="Enter Area / City"
                  required
                />
              </fieldset>

              {/* Price Per Hour */}
              <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Price Per Hour</span>
                </label>
                <div className="relative w-full flex items-center">
                  <span className="absolute left-4 z-10 text-lg font-bold text-white pointer-events-none select-none">
                    $
                  </span>
                  <input
                    type="number"
                    name="pricePerHour"
                    min="0"
                    step="0.01"
                    className="input input-bordered w-full pl-10 pr-4 text-white focus:input-primary transition-all duration-200"
                    placeholder="0.00"
                    required
                  />
                </div>
              </fieldset>

              {/* Capacity */}
              <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Capacity (Persons)</span>
                </label>
                <input
                  type="number"
                  name="capacity"
                  min="1"
                  max="15"
                  className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                  placeholder="Maximun player"
                  required
                />
              </fieldset>

              {/* Time Slots */}
              <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Available Time Slots</span>
                </label>
                <input 
                  type="date" 
                  name="timeSlots"
                  className="input input-bordered w-full text-white focus:input-primary transition-all duration-200" 
                  required
                />
              </fieldset> 
                
              {/* Email (Auto Input) */}
              <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Owner Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                  placeholder="user@example.com"
                  required
                />
              </fieldset>

           <fieldset className="fieldset col-span-1 md:col-span-2 w-full">
           <label className="label">
             <span className="label-text font-semibold text-gray-300">Describe your new Facility</span>
           </label>
           <textarea
             name="description"
             placeholder="Write details about the facility here..."
             className="textarea textarea-bordered h-28 w-full text-white focus:textarea-primary transition-all duration-200"
             required
           ></textarea>
         </fieldset>


              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 mt-4">
                <button 
                 type="submit" 
                 className="btn btn-primary w-full text-white font-bold hover:shadow-lg transition-all duration-200">
                 Add New Facility
               </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFacilityPage;