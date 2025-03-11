import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Input, Button, Form, FormGroup, Label } from 'reactstrap';
import { H5 } from '../AbstractElements';
import DropdownCommon from '../Components/Common/Dropdown';

const AddUserPage = () => {
  const [userType, setUserType] = useState('Customer');
  const [formData, setFormData] = useState({
    initials: '',
    firstName: '',
    lastName: '',
    nicNumber: '',
    address: '',
    contactNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownChange = (selected) => {
    setUserType(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', { ...formData, userType });
  };

  return (
    <Col xxl='12' xl='12' md='12' sm='12' className='notification box-col-6'>
      <Card className='height-equal'>
        <CardHeader className='card-no-border'>
          <H5 attrH5={{ className: 'm-0' }}>Add New User</H5>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>User Type</Label>
              <DropdownCommon
                options={['Customer', 'Subagent']}
                selected={userType}
                onChange={handleDropdownChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Initials</Label>
              <Input type='text' name='initials' value={formData.initials} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label>First Name</Label>
              <Input type='text' name='firstName' value={formData.firstName} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input type='text' name='lastName' value={formData.lastName} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label>NIC Number</Label>
              <Input type='text' name='nicNumber' value={formData.nicNumber} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label>Address</Label>
              <Input type='text' name='address' value={formData.address} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label>Contact Number</Label>
              <Input type='text' name='contactNumber' value={formData.contactNumber} onChange={handleInputChange} />
            </FormGroup>
            <Button type='submit' color='primary'>Add User</Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddUserPage;