import React, { Fragment, useEffect, useState } from "react";
import { Outlet,  useNavigate} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
const AppLayout = () => {

  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    if (!accessToken) {
      console.log('Redirecting to login...');
      navigate(`${process.env.PUBLIC_URL}/login`);
    }
  }, [accessToken]);


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
