"use client"
import { useState } from "react";
import { Button, Card, Input, Separator, } from "@heroui/react";
import { Form, TextField, Label, FieldError } from "react-aria-components";
import { FaRegUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { GrGoogle } from "react-icons/gr";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LoginPage = () => {
   const [showPass, setShowPass] = useState(false);
  //  onsubmit
     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries())
   
    const { data, error } = await authClient.signIn.email({
            email:user.email,
            password:user.password,
});
    
console.log(data,'data')

   if(error){
      toast.error(error.message || "Try Again");
   } else{
     toast.success("Logged in successfully");
     redirect("/");
  }
      
 

     }   

     const handleGoogleSignIn = async () => {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
  }); 

   if(error){
      toast.error(error.message || "Try Again");
   } else{
    toast.success("Logged in with Google successfully");
     redirect("/");
  }


}


  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100/5 px-4 py-2">
   {/*card  */}
  <Card className="w-full max-w-sm px-10 py-10 bg-violet-800/10 rounded-2xl shadow-xl
   border border-violet-900/40  ">

    <div className="text-center mb-3">
      <h2 className="text-2xl font-bold text-white">Login to your account</h2>
      <p className="text-gray-300 text-sm mt-1">
        Start your adventure with SportsLest
      </p>
    </div>

    <Form onSubmit={onSubmit} className="flex flex-col gap-3">

      {/* EMAIL */}
      <TextField name="email" isRequired>
        <Label className="text-sm text-white">Email</Label>

        <div className="relative">
          <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <Input
            placeholder="example@mail.com"
            className="w-full pl-10 py-2 border border-white/20 bg-white/10 text-white
             placeholder-gray-300 rounded-lg"
          />
        </div>
      </TextField>

      {/* PASSWORD */}
      <TextField name="password" isRequired>
  <Label className="text-sm text-white">Password</Label>

  <div className="relative">
    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

    <Input
      type={showPass ? "text" : "password"}
      placeholder="Password"
      minLength={6}
      pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
      title="At least 6 characters, one uppercase letter, and one lowercase letter"
      className="w-full pl-10 px-10 py-2 
      border border-white/20 bg-white/10 text-white placeholder-gray-300 rounded-lg"
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

      {/* submit btn*/}
      <Button 
        type="submit"
        className="w-full py-2 mt-2 rounded-lg bg-blue-700 hover:bg-blue-600/40 text-white font-medium"
      >
        Log in Now →
      </Button>

    </Form>

    {/* divider */}
    <div className="flex items-center gap-2">
      <Separator className="flex-1 bg-white/30" />
      <span className="text-sm text-gray-300 whitespace-nowrap">
        or sign in with
      </span>
      <Separator className="flex-1 bg-white/30" />
    </div>

    {/* GOOGLE BUTTON */}
    <Button onClick={handleGoogleSignIn}
      type="button"
      className="w-full rounded-lg bg-white hover:bg-white/80 text-black flex items-center justify-center gap-2"
    >
      <GrGoogle className="text-lg" />
      Sign in with Google
    </Button>

  </Card>

</div>
  );
};

export default LoginPage;