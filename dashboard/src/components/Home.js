import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("tradeLockerToken", token);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location.search]);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
