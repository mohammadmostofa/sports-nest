"use client"
import { Button,  Modal, Surface } from '@heroui/react';
import React from 'react';
import { BiEdit, BiEnvelope } from 'react-icons/bi';
import toast, { Toaster } from "react-hot-toast";

const UpdateManage = ({booked}) => {
  const { id,facilityName,facilityType,email, Capacity,location,pricePerHour,image, description, availableTimeSlots,} = booked;    
// onsubmit
const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const AddFacilityInfo = Object.fromEntries(formData.entries());
  const res = await fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddFacilityInfo),
    });
    
    const data = await res.json();
    
    if (!res.ok) {
          toast.error("Try Again!");
    } else {
          toast.success("Facility Updated Successfully");
    }
    
  };  
  

  return (
    <div>
      <Modal>
      <Button  className="px-5 py-2 rounded-xl bg-blue-500/20   border border-red-500/30 text-red-300  hover:bg-white/10 hover:text-white duration-300"   >
      <BiEdit/> Edit
      </Button>
    <Modal.Backdrop>
      <Modal.Container placement="auto">
        <Modal.Dialog className="sm:max-w-2xl bg-gray-900 text-white border border-gray-700">

          <Modal.CloseTrigger />

          <Modal.Header className="bg-gray-900 text-white border-b border-gray-800">
            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <BiEnvelope className="size-5"/>
            </Modal.Icon>
             <h2 className='flex justify-center text-2xl items-center'> Update Your Facility </h2>
            <Modal.Heading>Edit Facility</Modal.Heading>
          </Modal.Header>
          <Modal.Body className="p-6 bg-gray-900">
            <Surface variant='primary' className="bg-gray-900">

              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Facility Name */}
                <fieldset className="fieldset col-span-1">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-300">Facility Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={facilityName}
                    className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                    placeholder="e.g. Premium Football Turf"
                    
                  />
                </fieldset>

                <fieldset className="fieldset col-span-1">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-300">status</span>
                  </label>
                  <input
                      type="text"
                      name="status"
                      defaultValue="pending"
                    className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                      placeholder="pending or confirmed"
                    />
                </fieldset>

                <fieldset className="fieldset col-span-1">
                  <label className="label">
                    <span className="label-text font-semibold text-white">
                      Facility Type
                    </span>
                  </label>

                  <select
                    name="facilityType"
                    className="select  text-white w-full text-center pt-2 focus:select-primary transition-all duration-200"
                
                    defaultValue={facilityType}
                  >
                    <option value="" disabled className="text-center">
                      Select Facility Type
                    </option>
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
                    defaultValue={image}
                    className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                    placeholder="https://example.com/image.jpg"
                  
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
                    defaultValue={location}
                    className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                    placeholder="Enter Area / City"
                
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
                      defaultValue={pricePerHour}
                      min="0"
                      step="0.01"
                      className="input input-bordered w-full pl-10 pr-4 text-white focus:input-primary transition-all duration-200"
                      placeholder="0.00"
                      
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
                    defaultValue={Capacity}
                    min="1"
                    max="15"
                    className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                    placeholder="Maximun player"
                  
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
                    defaultValue={availableTimeSlots}
                    className="input input-bordered w-full text-white focus:input-primary transition-all duration-200"
                  
                  />
                </fieldset>

                {/* Email */}
                <fieldset className="fieldset col-span-1">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300">Owner Email</span>
                </label>
              
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  className="input input-bordered w-full text-white focus:input-primary
                   transition-all duration-200"
                  placeholder="user@example.com"
                  title="At least 6 characters, one uppercase letter, one lowercase letter"
                />
              </fieldset>
               

                {/* Description */}
                <fieldset className="fieldset col-span-1 md:col-span-2 w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-300">
                      Edit your  Facility
                    </span>
                  </label>
                  <textarea
                    name="description"
                    defaultValue={description}
                    placeholder="Write details about the facility here..."
                    className="textarea textarea-bordered h-28 w-full text-white focus:textarea-primary transition-all duration-200"
                    
                  ></textarea>
                </fieldset>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-white font-bold hover:shadow-lg transition-all duration-200"
                  >
                     update your Facility
                  </button>
                </div>

              </form>

            </Surface>
          </Modal.Body>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
</div>
  );
};

export default UpdateManage;