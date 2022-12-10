import React from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Axios from "axios";
import { use } from "vue/types/umd";
const useAuth = () => {
  const user = localStorage.getItem("token");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const Protectedroutes = (props: any) => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/notFOund" />;
};

export default Protectedroutes;
