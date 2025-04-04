import React, { useState } from "react";
import { fetchMedicalCosts } from "../services/medicalCosts";

const MedicalCostLookup = () => {
  const [procedure, setProcedure] = useState("");
  const [code, setCode] = useState("");
  const [location, setLocation] = useState("");
  const [costData, setCostData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchMedicalCosts(procedure, code, location);
    setCostData(data);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Procedure (e.g., MRI)"
        value={procedure}
        onChange={(e) => setProcedure(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Procedure Code (e.g., CPT 70551)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Location (e.g., New York)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="bg-green-500 text-white p-2 rounded">Search Cost</button>
      {costData && <div className="p-4 border rounded">Cost Estimate: {costData.cost}</div>}
    </div>
  );
};

export default MedicalCostLookup;