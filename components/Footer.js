import React from 'react';
import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
const Footer = () => {
  return (
    <div>
      <MDBFooter className='text-center ' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-3'>
            {/* <MDBBtn  size='md' outline color="light" floating className='m-1 ' href='#!' role='button' >
              <MDBIcon fab icon='facebook-f' /> 
            </MDBBtn> */}

            <MDBBtn size='md' outline color="light" floating className='m-1' href='https://twitter.com/GUGANMK7' role='button'>
              <MDBIcon fab icon='twitter' /> 
            </MDBBtn>

            {/* <MDBBtn  size='md'outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' /> 
            </MDBBtn> */}

            <MDBBtn  size='md' outline color="light" floating className='m-1' href='https://instagram.com/m.k.gugan?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' role='button'>
              <MDBIcon fab icon='instagram' /> 
            </MDBBtn>

            <MDBBtn  size='md' outline color="light" floating className='m-1' href='https://www.linkedin.com/in/gugan-m-k-792461244/' role='button'>
              <MDBIcon fab icon='linkedin-in' /> 
            </MDBBtn>

            <MDBBtn size='md' outline color="light" floating className='m-1' href='https://github.com/mkgugan22' role='button'>
              <MDBIcon fab icon='github' /> 
            </MDBBtn>
          </section>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Footer;
