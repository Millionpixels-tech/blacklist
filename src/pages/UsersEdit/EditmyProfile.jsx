import React, { Fragment, useState, useEffect } from "react";
import { Btn, H4 } from "../../AbstractElements";
import { Row, Col, CardHeader, CardBody, CardFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useParams } from 'react-router-dom';
import { EditProfile, Company, Username, UsersCountryMenu, AboutMe, UpdateProfile, FirstName, LastName, Address, EmailAddress, PostalCode, Country, City } from '../../Constant';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditMyProfile = () => {

    const { id } = useParams();
    const [userType, setUserType] = useState('HOUSEMADE');
    const history = useNavigate();

    //const [foundUser, setFoundUser] = useState(null);

    const [formData, setFormData] = useState({
        category: '',
        fullName: '',
        nic: '',
        passportNumber: '',
        address: '',
        phone_number: '',
        description: ''
      });
    
      const handleInputChange = (e) => {
          console.log('ssss');
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log("form", formData)
      };

    const [errors, setErrors] = useState(false);
    const handleSubmit = async () => {
        try {
    
          const token = localStorage.getItem("accessToken"); 
    
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/profiles/update`, {
            id: id,
            category: formData.category,
            fullName: formData.fullName,
            nic: formData.nic,
            passportNumber: formData.passportNumber,
            address: formData.address,
            phoneNumber: formData.phone_number,
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
    
          toast.success("Updated User details successfully");
    
        } catch (error){
          if(error.status === 401 || error.status === 403){
            localStorage.setItem("accessToken", ""); 
            history(`${process.env.PUBLIC_URL}/login`);
          }
          toast.error("Something went wrong. Please try again");
        }
      };

      const removeHandler = async () => {
        try {
    
          const token = localStorage.getItem("accessToken"); 
    
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/profiles/delete`, {
            id: id
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
    
          toast.success("User removed from blacklist successfully");

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

    useEffect(() => {
        console.log("useeffect")
        // Define the async function
        const fetchData = async () => {
          try {
            const token = localStorage.getItem("accessToken"); 

            const response = await axios.get(
              `${process.env.REACT_APP_BACKEND_SERVER}/api/profiles/person/get/${id}`,
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

            setFormData(response.data);
          } catch( error) {

            if(error.status === 401 || error.status === 403){
              localStorage.setItem("accessToken", ""); 
              history(`${process.env.PUBLIC_URL}/login`);
            }
            
          }
        }

        fetchData();
    
    }, []);

    return (
        <Fragment>
            <Form className="card">
                <CardHeader>
                    <H4 attrH4={{ className: "card-title mb-0" }}>Edit Details</H4>
                    <div className="card-options">
                        <a className="card-options-collapse" href="#javascript">
                            <i className="fe fe-chevron-up"></i>
                        </a>
                        <a className="card-options-remove" href="#javascript">
                            <i className="fe fe-x"></i>
                        </a>
                    </div>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="12" md="12">
                            <FormGroup><Label className="form-label">Full Name</Label>
                                <Input className="form-control" type="text" placeholder="Full Name" onChange={handleInputChange} value={formData.fullName} name="fullName"/><span style={{ color: "red" }}>{errors ?'Full Name is required': <p>&nbsp;</p>} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">
                            <FormGroup> <Label className="form-label">NIC</Label>
                                <Input className="form-control" type="text" placeholder="NIC" disabled onChange={handleInputChange} value={formData.nic} name="nic"/><span style={{ color: "red" }}>{errors ? 'NIC is required':  <p>&nbsp;</p>} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">
                            <FormGroup> <Label className="form-label">Passport Number</Label>
                                <Input className="form-control" type="text" placeholder="Passport Number" disabled  onChange={handleInputChange} value={formData.passportNumber} name="passportNumber"/><span style={{ color: "red" }}>{errors ? 'Passport Number is required':  <p>&nbsp;</p>} </span>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup><Label className="form-label">Addres</Label>
                                <Input className="form-control" type="text" placeholder="Home Address" onChange={handleInputChange} value={formData.address} name="address"/><span style={{ color: "red" }}>{errors ? 'Address is required':  <p>&nbsp;</p>} </span>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup><Label className="form-label">Contact Number</Label>
                                <Input className="form-control" type="text" placeholder="Contact Number" onChange={handleInputChange} value={formData.phone_number} name="phone_number"/><span style={{ color: "red" }}>{errors ? 'Contact Number is required':  <p>&nbsp;</p>} </span>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                        <FormGroup>
                            <Label className="form-label">Description</Label>
                            <Input type="textarea" className="form-control" rows="5" placeholder="Enter About your description" onChange={handleInputChange} value={formData.description} name="description"/>
                        </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter className="text-end">
                    <Button color="primary" style={{marginRight: '10px'}} onClick={() => {
                        handleSubmit();
                    }}>Update Person</Button>
                    <Button attrBtn={{ color: "danger", type: "submit" }} onClick={() => {
                        removeHandler();
                    }}>Remove From Blacklist</Button>
                </CardFooter>
            </Form>
        </Fragment>
    )
}
export default EditMyProfile