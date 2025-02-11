import { H2, Image, P } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, Col, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';

const SearchResultCard = ({ colClass }) => {

  return (
    <Fragment>
      <Col className={colClass}>
      
            <Card className={`ribbon-vertical-left-wrapper`}>
    
                <div className='ribbon ribbon-bookmark ribbon-vertical-left ribbon-primary'>
                  <i className='icofont icofont-globe-alt'></i>
                </div>
        
              <div className='job-search'>
                <CardBody>
                  <div className='media'>
                    <div className='media-body'>
                      <H2 attrH6={{ className: 'f-w-600' }}>
                        <Link to={`${process.env.PUBLIC_URL}/app/jobSearch/job-detail`}>Punchi Hewalage Malkanthi Punchihewa</Link>
                        {/* <span className='pull-right'>2 days ago</span> */}
                      </H2>
                      <P>
                        ID: 9109473827V
                      </P>
                    </div>
                  </div>
                  <P>We are looking for an experienced and Web designer and/or frontend engineer with expertise in accessibility to join our team, 3+ years of experience working in as a Frontend Engineer or comparable role.You won’t be a team of one though — you’ll be collaborating closely with other...</P>
                  <ActivityCard/>
                </CardBody>
              </div>
            </Card>
  
      </Col>
    </Fragment>
  );
};

export default SearchResultCard;
