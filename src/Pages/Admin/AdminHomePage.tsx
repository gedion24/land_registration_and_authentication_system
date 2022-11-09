import React from "react";
import { Link, Outlet } from "react-router-dom";

import Graph from "../../assets/Graph.png";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default HomePage;
