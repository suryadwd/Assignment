import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiSettings, FiFileText, FiBarChart2, FiUser } from "react-icons/fi";


const Dashboard = () => {

  const [contracts, setContracts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [riskFilter, setRiskFilter] = useState("");

  return (
    <div>This is HomePage</div>
  )
}

export default Dashboard