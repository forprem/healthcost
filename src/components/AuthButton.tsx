import React from "react";
import { Button } from "@/components/ui/button";
import { signInWithGoogle, signInWithFacebook } from "../services/auth";

const AuthButton = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Button onClick={signInWithGoogle} className="bg-red-500 text-white">Sign in with Google</Button>
      <Button onClick={signInWithFacebook} className="bg-blue-600 text-white">Sign in with Facebook</Button>
    </div>
  );
};

export default AuthButton;