"use client"
import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";

const DeleteConfm = ({booked}) => {
  const {_id,facilityName} = booked;
  const handleDelete = async () => {
   const res = await fetch(`http://localhost:5000/booking/${_id}`, {
      method: "DELETE"
   });

   const data = await res.json();

   if (!res.ok) {
          toast.error("Try Again!");
    } else {
          toast.success("Facility deleted successfully");
          window.location.reload();
          return
    }


   console.log(data);
};
  return (
    <div>
          <AlertDialog>
             <Button  className="px-5 py-2 rounded-xl bg-red-500/20   border border-red-500/30 text-red-300  hover:bg-red-500 hover:text-white duration-300"   >
                Delete
             </Button>
                <AlertDialog.Backdrop>
                  <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 text-white bg-white ">
                      <AlertDialog.CloseTrigger />
                      <AlertDialog.Header>
                        <AlertDialog.Icon status="danger" />
                        <AlertDialog.Heading></AlertDialog.Heading>
                      </AlertDialog.Header>
                      <AlertDialog.Body>
                        <p>
                          This will permanently Delete<strong className="text-black"> {facilityName} </strong> and all of its
                          data. This action cannot be undone.
                        </p>
                      </AlertDialog.Body>
                      <AlertDialog.Footer>
                       
                     <Button onClick={handleDelete} slot="close" variant="danger">
                        Delete
                      </Button>

                      </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                  </AlertDialog.Container>
                </AlertDialog.Backdrop>
          </AlertDialog>

    </div>
  );
};

export default DeleteConfm;