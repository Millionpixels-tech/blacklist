import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Input, Button, Form, FormGroup, Label, Row } from 'reactstrap';
import { H5, Breadcrumbs } from '../AbstractElements';
import DropdownCommon from '../Components/Common/Dropdown';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AddUserPage = () => {
  const history = useNavigate();
  const [userType, setUserType] = useState('HOUSEMADE');
  const [formData, setFormData] = useState({
    fullName: '',
    nicNumber: '',
    passportNumber: '',
    address: '',
    contactNumber: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {

      let errors = false;
      if(!userType || !formData.fullName || !formData.nicNumber || !formData.passportNumber || !formData.address || !formData.contactNumber || !formData.description){
        toast.error("All Fields are required");
        errors = true;
      }
      if(formData.contactNumber.length !== 10){
        toast.error("Please eneter valid phone number");
        errors = true;
      }
      if(formData.nicNumber.length < 10){
        toast.error("Please eneter valid NIC");
        errors = true;
      }
      if(errors){
        return;
      }

      const token = localStorage.getItem("accessToken"); 

      const response = await axios.post('http://localhost:8080/api/profiles/add', {
        category: userType,
        fullName: formData.fullName,
        nic: formData.nicNumber,
        passportNumber: formData.passportNumber,
        address: formData.address,
        phoneNumber: formData.contactNumber,
        description: formData.description
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      );

      if(response.status === 401 || response.status === 403){
        localStorage.setItem("accessToken", ""); 
        history(`${process.env.PUBLIC_URL}/login`);
      }

      toast.success("Added User to the blacklist successfully");

      setTimeout(() => {
        history(`${process.env.PUBLIC_URL}/search-user`);
      }, 4000);
      
    } catch (error){
      if(error.status === 401 || error.status === 403){
        localStorage.setItem("accessToken", ""); 
        history(`${process.env.PUBLIC_URL}/login`);
      }
      toast.error("Something went wrong. Please try again");
    }
  };

  const options = [
      { value: 'HOUSEMADE', label: 'Housemade' },
      { value: 'SUBAGENT', label: 'Sub Agent' }
  ];

  return (
    <><Breadcrumbs mainTitle='Add Person to BlackList' parent='User' title='Add Person to BlackList' /><Row>
      <><Col sm='3'></Col><Col sm='6' className='notification box-col-6'>
        <Card className='height-equal'>
          <CardHeader className='card-no-border'>
            <H5 attrH5={{ className: 'm-0' }}>Fill the Details</H5>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="col-form-label">Person Category</Label>
                  <Input type="select" name="selectedOption" value={userType} onChange={(e) => setUserType(e.target.value)}>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Input>
              </FormGroup>
              <FormGroup>
                <Label>Full Name</Label>
                <Input type='text' name='fullName' value={formData.lastName} onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label>NIC Number</Label>
                <Input type='text' name='nicNumber' value={formData.nicNumber} maxLength='12' onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label>Passport Number</Label>
                <Input type='text' name='passportNumber' value={formData.passportNumber} maxLength='12' onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input type='text' name='address' value={formData.address} onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label>Contact Number</Label>
                <Input type='text' name='contactNumber' value={formData.contactNumber} maxLength='10' onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label className="form-label">Description</Label>
                <Input type="textarea" name='description' className="form-control" rows="5" placeholder="Enter About your description" onChange={handleInputChange}/>
              </FormGroup>
              <Button onClick={()=>{handleSubmit()}} color='primary'>Add Person to Blacklist</Button>
            </Form>
          </CardBody>
        </Card>
        <ToastContainer/>
      </Col><Col sm='3'></Col></>
    </Row></>
  );
};

export default AddUserPage;