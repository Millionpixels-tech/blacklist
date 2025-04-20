import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import EditMyProfile from './EditmyProfile';
import MyProfileEdit from './MyProfile';
import UserTable from './UserTable';

const UsersEditContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Edit Blacklist Person' parent='Blacklist Person' title='Edit Blacklist Person' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
          <Col xl='3'></Col>
            <Col xl='6'>
              <EditMyProfile />
              <UserTable />
            </Col>
            <Col xl='3'></Col>
            </Row>
          
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersEditContain;
