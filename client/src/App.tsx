import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./componets/Wellcome/Navbar";
import Wellcomepage from "./Componets/Wellcome/WellcomePage";
import EmployeeHomePage from "./Pages/Employee/EmployeeHomePage";
import Axios from "axios";

import Signup from "./Componets/Wellcome/Signup";
import Navbar from "./Componets/Navbar/Navbar";
import Login from "./Componets/Wellcome/Login";
import Landreg from "./Pages/Employee/Landreg";
import AdminPage from "./Pages/Admin/AdminPage";
import ManageEmp from "./Pages/Admin/ManageEmp";
import RegisterEmp from "./Pages/Admin/RegisterEmp";
import Employeeprofile from "./Pages/Employee/Employeeprofile";
import Employee from "./Pages/Admin/Employee";
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import Updateland from "./Pages/Employee/Updateland";
import Footer from "./Componets/Navbar/Footer";
import EmployeePage from "./Pages/Employee/EmployeePage";
import Ownerprofile from "./Pages/Employee/Ownerprofile";
import PasswrdPage from "./Pages/authentication/PasswrdPage";

import Landregistrated from "./Pages/Employee/Landregistrated";
import Ownerstable from "./Pages/Employee/Ownerstable";
import Protectedroutes from "./Routes/Protectedroutes";
import { getRoles } from "@testing-library/react";
import IdContext from "./Helpers/Context";
const ROLES = {
  User: 2001,

  Admin: 5150,
};

function App() {
  // const [userid, setuserid] = useState([]);
  Axios.defaults.withCredentials = true;
  const [isOpen, setIsOpen] = useState(false);
  const [showOption, setShowOption] = useState(false);

  return (
    <>
      <div className="">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Wellcomepage />} />
          <Route path="/" element={<Protectedroutes />}>
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/employeehomepage" element={<EmployeeHomePage />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordpage" element={<PasswrdPage />} />
            <Route
              path="/employeeprofile"
              element={
                <Employeeprofile
                  empProfile={showOption}
                  setempProfile={setShowOption}
                />
              }
            />
            {/* <IdContext.Provider value={{ userid, setuserid }}> </IdContext.Provider> */}
            <Route path="/adminhomepage" element={<AdminHomePage />} />

            <Route path="/AdminPage" element={<AdminPage />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="/landregistration" element={<Landreg />} />
            <Route path="/updateland" element={<Updateland />} />
            <Route path="/manageEmployee" element={<ManageEmp />} />
            <Route path="/registerEmployee" element={<RegisterEmp />} />
            <Route path="/EmployeePage" element={<EmployeePage />} />
            <Route path="/owners" element={<Ownerstable />} />
            {/*  this will decise which route it will take based on the role */}

            {/* Admin Route */}

            <Route path="/adminhomepage" element={<AdminHomePage />}>
              <Route index element={<AdminPage />} />
              <Route path="registerEmployee" element={<RegisterEmp />} />
              <Route path="employees" element={<Employee />} />
              <Route path="manageEmployee" element={<ManageEmp />} />
              <Route path="lands" element={<Landregistrated />} />
            </Route>

            {/* Employye Route */}
            <Route path="/employeehomepage" element={<EmployeeHomePage />}>
              <Route index element={<EmployeePage />} />
              <Route
                path="employeeprofile"
                element={
                  <Employeeprofile
                    empProfile={showOption}
                    setempProfile={setShowOption}
                  />
                }
              />
              <Route path="owners" element={<Ownerstable />} />
              <Route path="landregistration" element={<Landreg />} />
              <Route path="lands" element={<Landregistrated />} />
              <Route
                path="ownerprofile"
                element={<Ownerprofile show={isOpen} setShow={setIsOpen} />}
              />
            </Route>
            {/* <Route path="/viewmodal" element={<Viewmodal />}>
            <Route index element={<Modal />} />
            <Route path="setmodal" element={<Setmodal />} />
          </Route> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
