import React from "react";
import AuthButton from "../components/AuthButton";

const LoginScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <AuthButton />
    </div>
  );
};

export default LoginScreen;