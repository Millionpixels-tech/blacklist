import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../AbstractElements";

import SearchBox from "../Components/Dashboard/Default/SearchBox";
import SearchResultCard from "../Components/Dashboard/Default/SearchResultCard";
import axios from 'axios';
import NoSearchResult from "../Components/Dashboard/Default/NoSearchResult";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {

  const [foundUser, setFoundUser] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const history = useNavigate();

  const searchUser = async (nic) => {

    try {

      const token = localStorage.getItem("accessToken"); 

      const response = await axios.get(
        `http://localhost:8080/api/profiles/person/${nic}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('ssssss');
      if(response.status === 401 || response.status === 403){
        localStorage.setItem("accessToken", ""); 
        history(`${process.env.PUBLIC_URL}/login`);
      }

      if(!response.data){
        setFoundUser(null);
        setNotFound(true);
      } else {
        setFoundUser(response.data);
        setNotFound(false);
      }

    } catch (error){
      if(error.status === 401 || error.status === 403){
        localStorage.setItem("accessToken", ""); 
        history(`${process.env.PUBLIC_URL}/login`);
      }
      setFoundUser(null);
      setNotFound(true);
    }
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Search Person" parent="Dashboard" title="Search Person" />
      <Row>
      <Col sm='3'></Col>
      <Col sm='6'>
      <Container fluid={true}>
        <Row className="widget-grid">
          <SearchBox searchUser={searchUser}/>
          {foundUser && 
            <SearchResultCard foundUser={foundUser}/>
          }
          {notFound && <NoSearchResult/>}
        </Row>
      </Container>
      </Col>
      <Col sm='3'></Col>
      </Row>
    </Fragment>
  );
};

export default SearchPage;
