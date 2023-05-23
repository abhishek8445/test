import React from 'react'

import {Navbar,Container,Nav,Form,Button}  from 'react-bootstrap'

import {Link} from "react-router-dom"



function Navv() {
  return (
   <>
    <Navbar bg="dark" variant="dark">
        <Container>
      
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link  as ={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link  as ={Link} to={"/contact"}>Contact</Nav.Link>
            <Nav.Link  as ={Link} to={"/services"}>Services</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
</>
  )
     
}

export default Navv;
