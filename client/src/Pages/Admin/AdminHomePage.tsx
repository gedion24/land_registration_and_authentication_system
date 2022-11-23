import React from "react";
import { Link, Outlet } from "react-router-dom";

import Graph from "../../assets/Graph.png";
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
