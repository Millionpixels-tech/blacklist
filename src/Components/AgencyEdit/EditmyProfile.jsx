import React, { Fragment } from "react";
import { Btn, H4 } from "../../AbstractElements";
import { Row, Col, CardHeader, CardBody, CardFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import { EditProfile, Company, Username, UsersCountryMenu, AboutMe, UpdateProfile, FirstName, LastName, Address, EmailAddress, PostalCode, Country, City } from '../../Constant';

const EditMyProfile = () => {

    return (
        <Fragment>
            <Form className="card">
                <CardHeader>
                    <H4 attrH4={{ className: "card-title mb-0" }}>{EditProfile}</H4>
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
                        <Col md="12">
                            <FormGroup><Label className="form-label">Company Name</Label>
                                <Input className="form-control" type="text" placeholder="Company Name" /><span style={{ color: "red" }}>{'Company Name is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">
                            <FormGroup> <Label className="form-label">Company Registration No</Label>
                                <Input className="form-control" type="text" placeholder="Reg No"  /><span style={{ color: "red" }}>{'NIC is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">
                            <FormGroup> <Label className="form-label">{EmailAddress}</Label>
                                <Input className="form-control" type="email" placeholder="Email" /><span style={{ color: "red" }}>{'EmailAddress is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup><Label className="form-label">{Address}</Label>
                                <Input className="form-control" type="text" placeholder="Company Address"  /><span style={{ color: "red" }}>{'Address is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="4">
                            <FormGroup> <Label className="form-label">{City}</Label>
                                <Input className="form-control" type="text" placeholder="City"/><span style={{ color: "red" }}>{'City is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="3">
                            <FormGroup><Label className="form-label">{PostalCode}</Label>
                                <Input className="form-control" type="number" placeholder="ZIP Code" />
                            </FormGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup><Label className="form-label">{Country}</Label>
                                <Input type="select" name="select" className="form-control btn-square">
                                    {UsersCountryMenu.map((items, i) =>
                                        <option key={i}>{items}</option>
                                    )}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter className="text-end">
                    <Btn attrBtn={{ color: "primary", type: "submit" }} >{UpdateProfile}</Btn>
                </CardFooter>
            </Form>
        </Fragment>
    )
}
export default EditMyProfile