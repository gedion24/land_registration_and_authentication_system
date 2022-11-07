import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import Navbar from "./componets/Wellcome/Navbar";
import Wellcomepage from "./componets/Wellcome/WellcomePage";
import HomePage from "./componets/Home/HomePage";

import Signup from "./componets/Wellcome/Signup";
import Navbar from "./componets/Navbar/Navbar";
import Login from "./componets/Wellcome/Login";
import Landreg from "./componets/Landregandauth/Landreg";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Wellcomepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landregistration" element={<Landreg />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
