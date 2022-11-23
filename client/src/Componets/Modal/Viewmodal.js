import React from "react";
import { Outlet } from "react-router-dom";

function viewmodal() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default viewmodal;
