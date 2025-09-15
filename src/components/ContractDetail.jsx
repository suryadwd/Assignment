import React, { useState, useEffect } from "react";
import axios from "axios";
import ContractMetadata from "../components/ContractMetadata";
import ClauseCard from "../components/ClauseCard";
import InsightsList from "../components/InsightsList";
import EvidenceDrawer from "../components/EvidenceDrawer";

const ContractDetail = ({ contractId }) => {
  const [contract, setContract] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchContract = async () => {
      try {
        const res = await axios.get(`/contracts/${contractId}.json`); // adjust API
        setContract(res.data);
      } catch (err) {
        console.error("Error loading contract", err);
      }
    };
    fetchContract();
  }, [contractId]);

  if (!contract) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <ContractMetadata
        name={contract.name}
        parties={contract.parties}
        start={contract.start}
        expiry={contract.expiry}
        status={contract.status}
        risk={contract.risk}
      />

      
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Clauses</h2>
        {contract.clauses.map((c, idx) => (
          <ClauseCard key={idx} {...c} />
        ))}
      </div>

     
      <InsightsList insights={contract.insights} />

     
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        onClick={() => setDrawerOpen(true)}
      >
        View Evidence
      </button>

      <EvidenceDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        evidence={contract.evidence}
      />
    </div>
  );
};

export default ContractDetail;
