import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P, Image } from '../AbstractElements';
import logoWhite from '../assets/images/logo/logo.png';
import logoDark from '../assets/images/logo/logo_dark.png';

const ForgetPwd = ({ logoClassMain }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pages/authentication/password-reset-success?email=${encodeURIComponent(email)}`);
  };

  return (
    <Fragment>
      <section>
        <Container className='p-0 login-page' fluid={true}>
          <Row className='m-0'>
            <Col className='p-0'>
              <div className='login-card'>
                <div>
                  <div>
                    <Link className={`logo ${logoClassMain ? logoClassMain : ''}`} to={process.env.PUBLIC_URL}>
                      <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'login page' }} />
                      <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'login page' }} />
                    </Link>
                  </div>
                  <div className='login-main'>
                    <Form className='theme-form login-form' onSubmit={handleSubmit}>
                      <H4>Reset Your Password</H4>
                      <FormGroup>
                        <Label className='m-0 col-form-label'>Enter Your Email</Label>
                        <Input
                          className='form-control'
                          type='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder='example@example.com'
                        />
                      </FormGroup>
                      <FormGroup className='text-end'>
                        <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }}>Send</Btn>
                      </FormGroup>
                      <P attrPara={{ className: 'text-start' }}>
                        Remember your password?
                        <Link className='ms-2' to='/login'>Sign in</Link>
                      </P>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ForgetPwd;