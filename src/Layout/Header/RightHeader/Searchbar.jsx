import React, { useState } from 'react';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';
import { Btn } from "../../../AbstractElements";
import { Link } from "react-router-dom";

const Searchbar = () => {

  return (
    <>
      <Link
        to={`${process.env.PUBLIC_URL}/search-user`}
        className="edit-icon"
        style={{marginRight: '10px'}}
      >
          <Btn attrBtn={{ color: "primary" }}>Search Person</Btn>
      </Link>
      <Link
        to={`${process.env.PUBLIC_URL}/add-person-to-blacklist`}
        className="edit-icon"
      >
        <Btn attrBtn={{ color: "primary" }}>Add to Blacklist</Btn>
      </Link>
      
    </>
  );
};

export default Searchbar;
