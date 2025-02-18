import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LayoutRoutes from "../Route/LayoutRoutes";
import Signin from "../Auth/Signin";
import { authRoutes } from "./AuthRoutes";

const Routers = () => {
  useEffect(() => {
    let abortController = new AbortController();
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <BrowserRouter basename={"/"}>
      <Suspense>
        <Routes>
          {/* Redirect to login page on initial load */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}`}
            element={<Navigate to={`${process.env.PUBLIC_URL}/login`} />}
          />
          <Route path={`/*`} element={<LayoutRoutes />} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            element={<Signin />}
          />
          {authRoutes.map(({ path, Component }, i) => (
            <Route path={path} element={Component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
