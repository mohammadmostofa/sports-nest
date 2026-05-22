"use client"
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
const AddFacilityPage = () => {
const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const AddFacilityInfo = Object.fromEntries(formData.entries());
  // token
      const {data:tokenData} =  await authClient.token();
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${tokenData?.token}`

      },
      body: JSON.stringify(AddFacilityInfo),
    });

    const data = await res.json();

        if (!res.ok) {
          toast.error("Try Again!");
    } else {
          toast.success("Facility Added  Successfully");
    }  
  
};


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
    <span className="label-text font-semibold text-gray-300">
      Facility Type
    </span>
  </label>

  <select name="facilityType"  className="select w-full text-center  pt-2 focus:select-primary transition-all duration-200"
      required
     defaultValue=""
  >
    <option value="" disabled className="text-center"> Select Facility Type</option>
    <option value="Field Sports" className="text-center">Field Sports</option>
    <option value="Court Sports" className="text-center">Court Sports</option>
    <option value="Water Sports" className="text-center">Water Sports</option>
    <option value="Indoor Fitness" className="text-center">Indoor Fitness</option>
    <option value="Track & Athletics" className="text-center">Track & Athletics</option>
  </select>
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