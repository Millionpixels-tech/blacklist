import React from "react";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LayoutRoutes from "../Route/LayoutRoutes";

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
                <Route exact path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard`} />} />
                {/* <Route exact path={`/`} element={<Navigate to={`${process.env.PUBLIC_URL}/`} />} /> */}
            <Route path={`/*`} element={<LayoutRoutes />} />
    
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
