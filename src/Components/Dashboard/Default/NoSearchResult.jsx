import { H2, Image, P } from "../../../AbstractElements";
import React, { Fragment } from "react";
import { Card, Col, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import ActivityCard from "./ActivityCard";

const NoSearchResult = ({ colClass }) => {
  return (
    <Fragment>
      <Col className={colClass}>
        <Card className={`ribbon-vertical-left-wrapper`}>
          <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-primary">
            <i className="icofont icofont-globe-alt"></i>
          </div>

          <div className="job-search">
            <CardBody>
              <div className="media">
                <div className="media-body">
                  <H2 attrH6={{ className: "f-w-600" }}>
                      No Blacklist User Found
                  </H2>
                </div>
              </div>
        
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default NoSearchResult;
