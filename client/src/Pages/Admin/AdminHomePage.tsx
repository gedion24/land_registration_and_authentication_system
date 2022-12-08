import React, { useState, Dispatch } from "react";
import { Link, Outlet } from "react-router-dom";

import Graph from "../../assets/Graph.png";
import AdminNavbar from "../../Componets/Navbar/AdminNavbar";
import Navbar from "../../Componets/Navbar/Navbar";
import IdContext from "../../Helpers/Context";
type Props = {};

const HomePage = (props: Props) => {
  const [userid, setuserid] = useState();
  return (
    <>
      <IdContext.Provider value={{ userid, setuserid }}>
        <Navbar />

        <Outlet />
      </IdContext.Provider>
    </>
  );
};

export default HomePage;
