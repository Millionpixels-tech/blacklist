import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { H4, P, Btn, Image } from '../AbstractElements';
import logoWhite from '../assets/images/logo/logo.png';
import logoDark from '../assets/images/logo/logo_dark.png';

const PasswordResetSuccess = ({ logoClassMain }) => {
  const location = useLocation();
  const email = location.state?.email || 'your email';

  return (
    <section>
      <Container className='p-0 login-page' fluid={true}>
        <Row className='m-0'>
          <Col className='p-0'>
            <div className='login-card'>
              <div>
                <div>
                  <Link className={`logo ${logoClassMain ? logoClassMain : ''}`} to={process.env.PUBLIC_URL}>
                    <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'logo' }} />
                    <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'logo' }} />
                  </Link>
                </div>
                <div className='login-main'>
                  <H4>Password Reset Email Sent</H4>
                  <P>A password reset link has been sent to <strong>{email}</strong>. Please check your email to reset your password.</P>
                  <Btn attrBtn={{ className: 'btn-block', color: 'primary', to: `${process.env.PUBLIC_URL}/login`, tag: Link }}>
                    Back to Login
                  </Btn>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PasswordResetSuccess;
