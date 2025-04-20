import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";

import SearchBox from "./SearchBox";
import SearchResultCard from "./SearchResultCard";

const Dashboard = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Search Person" parent="Dashboard" title="Search Person" />
      <Row>
      <Col sm='3'></Col>
      <Col sm='6'>
      <Container fluid={true}>
        <Row className="widget-grid">
          <SearchBox />
          <SearchResultCard />
        </Row>
      </Container>
      </Col>
      <Col sm='3'></Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
