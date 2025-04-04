import React from "react";
import MedicalCostLookup from "../components/MedicalCostLookup";

const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Medical Cost Lookup</h1>
      <MedicalCostLookup />
    </div>
  );
};

export default HomeScreen;