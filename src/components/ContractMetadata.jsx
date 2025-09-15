import React from "react";

const ContractMetadata = ({ name, parties, start, expiry, status, risk }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700"> {parties}</p>
      <p className="text-gray-700"> Start: {start}</p>
      <p className="text-gray-700"> Expiry: {expiry}</p>
      <p className="text-gray-700"> Status: <span className="font-semibold">{status}</span></p>
      <p className="text-gray-700"> Risk: <span className="font-semibold">{risk}</span></p>
    </div>
  );
};

export default ContractMetadata;
