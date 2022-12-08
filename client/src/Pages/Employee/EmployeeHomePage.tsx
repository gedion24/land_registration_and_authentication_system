import React from "react";
import { Outlet } from "react-router-dom";
import EmpNavbar from "../../Componets/Navbar/EmpNavbar";
import Navbar from "../../Componets/Navbar/Navbar";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomePage;
