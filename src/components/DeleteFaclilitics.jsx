"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

export function DeleteFacilitics({DetailsFacility}) {
  const {_id,facilityName} = DetailsFacility;
 const handleDeleteBtn = async (e) => {
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${_id}`, {
      method: "DELETE",
    });

    const data = await res.json()

    if (!res.ok) {
          toast.error("Try Again!");
    } else {
          toast.success("Facility Updated Successfully");
    }
     
    redirect('/AllFacilities')

 }


  return (
    <AlertDialog>
  <Button className='btn bg-red-800/40 hover:bg-red-800/50'><MdDelete/> Delete</Button>  
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete  permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong> {facilityName} </strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" className='bg-black'>
                Cancel
              </Button>
              <Button onClick={handleDeleteBtn} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}