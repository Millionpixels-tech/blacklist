import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
const AppLayout = () => {

  return (
    <Fragment>
      <div className={`page-wrapper compact-wrapper`}  id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          {/* <Sidebar /> */}
              <div className="page-body">
                <div>
                  <div>
                    <Outlet />
                  </div>
                </div>
              </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};
export default AppLayout;
