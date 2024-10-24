import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'; // Optional: Add custom styles here
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-dark' style={{backgroundColor: 'white'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='linkedin' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold '>
                <MDBIcon icon='../assets/logo.svg' className='me-3' />
                <img src={logo} width={140}  alt="logo" />
                Make My Build
              </h6>
              <p className='text-dark'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 mt-5' id='links'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p> 
                <a href='/' className='text-reset'>
                How it Works
                </a>
              </p>
              <p>
                <a href='/projects' className='text-reset'>
                Our Projects
                </a>
              </p>
              <p >
                <a href='/about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 mt-5' id='links'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/cost-estimator' className='text-reset'>
                  cost Estimation
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  projects
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  career
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 mt-5' id='links'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-2' />
                # 6-132-1 Satyadeva Nagar. Rahamath funcation hall Lane, Ballary By-pass Road, Anantapur 515001
              </p>
              <p>
                <MDBIcon icon='envelope' className='me-3' />
                info@makemybuild.com
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> +91 8886786687
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> +91 9441999968
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        © 2023 Copyright : &nbsp;
        <a className='text-reset fw-bold' href='/https://www.makemybuild.in'>
          Makemybuild.in
        </a>
      </div>
    </MDBFooter>
  );
}