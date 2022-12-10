import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import EmpNavbar from "../../Componets/Navbar/EmpNavbar";
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
