"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await authClient.updateUser({
      name: data?.name,
      
      image:
        data?.image && data.image.trim() !== ""
          ? data.image
          : undefined,
    });
  };

  return (
    <Modal>
      <Button className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 transition duration-300 font-medium">
        <BiEdit /> Update your Profile
      </Button>

      <Modal.Backdrop className="bg-black/60 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-[#0f172a] text-white rounded-2xl border border-white/10">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-violet-500/20 text-violet-300">
                <BiUser className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-white">
                Update user
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="outline" className="bg-transparent border-none">

                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  {/* Name */}
                  <TextField className="w-full text-white">
                    <Label className="text-sm text-white/80">Name</Label>
                    <Input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full mt-1 bg-white/10 text-white placeholder-white/50 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </TextField>

                  {/* Image */}
                  <TextField className="w-full text-white">
                    <Label className="text-sm text-white/80">Image URL</Label>
                    <Input
                      name="image"
                      type="url"
                      placeholder="Image URL"
                      className="w-full mt-1 bg-white/10 text-white placeholder-white/50 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </TextField>

                  {/* Footer */}
                  <Modal.Footer className="flex justify-end gap-2 pt-2">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="bg-violet-500 text-white hover:bg-violet-600"
                    >
                      Save
                    </Button>
                  </Modal.Footer>

                </form>

              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}