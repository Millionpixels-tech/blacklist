import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";

import SearchBox from "./SearchBox";
import SearchResultCard from "./SearchResultCard";

const Dashboard = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Default" parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="widget-grid">
          <SearchBox />
          <SearchResultCard />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
