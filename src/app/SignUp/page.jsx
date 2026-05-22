"use client";
import { useState } from "react";
import { Button, Card, Input, Separator } from "@heroui/react";
import { Form, TextField, Label } from "react-aria-components";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { GrGoogle } from "react-icons/gr";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      image: user.image,
      email: user.email,
      password: user.password,
    });

    if (error) {
      toast.error(error.message || "Try Again");
    } else {
      toast.success("Signed up successfully");
      router.push("/Login");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
    });

    if (error) {
      toast.error(error.message || "Try Again");
    } else {
      toast.success("Signed up with Google successfully");
      router.push("/Login");
    }
  };

  return (
    <div className=" min-h-3xl flex items-center justify-center bg-gray-100/5 px-4 py-10">
      <Card className="w-full max-w-sm px-10 py-5 bg-violet-800/10 rounded-2xl shadow-xl border border-violet-900/40">

        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold text-white">Create Account</h2>
          <p className="text-gray-300 text-sm mt-1">
            Start your adventure with SportsLest
          </p>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-3">

          <TextField name="name" isRequired>
            <Label className="text-sm text-white">Full Name</Label>
            <div className="relative">
              <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input name="name" placeholder="Enter name"
                className="w-full pl-10 py-2 border border-white/20 bg-white/10 text-white placeholder-gray-300 rounded-lg"
              />
            </div>
          </TextField>

          <TextField name="image" isRequired>
            <Label className="text-sm text-white">Image URL</Label>
            <div className="relative">
              <AiOutlinePicture className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input name="image" placeholder="Image link"
                className="w-full pl-10 py-2 border border-white/20 bg-white/10 text-white placeholder-gray-300 rounded-lg"
              />
            </div>
          </TextField>

          <TextField name="email" isRequired>
            <Label className="text-sm text-white">Email</Label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input name="email" placeholder="example@mail.com"
                className="w-full pl-10 py-2 border border-white/20 bg-white/10 text-white placeholder-gray-300 rounded-lg"
              />
            </div>
          </TextField>

          <TextField name="password" isRequired>
            <Label className="text-sm text-white">Password</Label>
            <div className="relative">
              <Input
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                minLength={6}
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                title="At least 6 characters, one uppercase letter, and one lowercase letter"
                className="w-full pl-10 pr-10 py-2 border border-white/20 bg-white/10 text-white placeholder-gray-300 rounded-lg"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
              >
                {showPass ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </TextField>

          <Button type="submit" className="w-full py-2 mt-2 rounded-lg bg-blue-700 text-white font-medium">
            Sign up →
          </Button>
        </Form>

        <div className="flex items-center gap-2 mt-3">
          <Separator className="flex-1 bg-white/30" />
          <span className="text-sm text-gray-300 whitespace-nowrap">
            or sign in with
          </span>
          <Separator className="flex-1 bg-white/30" />
        </div>

        <Button onClick={handleGoogleSignIn}
          type="button"
          className="w-full mt-3 rounded-lg bg-white text-black flex items-center justify-center gap-2"
        >
          <GrGoogle className="text-lg" />
          Continue with Google
        </Button>

      </Card>
    </div>
  );
};

export default SignUpPage;