import React from "react";
import { Outlet } from "react-router-dom";
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
