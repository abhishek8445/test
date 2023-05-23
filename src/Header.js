import React from 'react'
import image from './myimage/nav_logo2.png'
import {Container,Row,Col} from 'react-bootstrap'

function Header() {

    const header={

        width:"100%",
        height:"3.5rem"

    }

    const img={
        height:"3.2rem",
        width:"3rem", 
    }                   

    const WebName={
        fontSize:"2rem",
        fontWeight:"bolder",
        fontFamily:"cursive",
        marginTop:"0.5rem"   
        
    }                      

   
  return (
   <>
   
   <Container>
      <Row>
        <Col sm={2}><img src={image} style={img} /></Col>
        <Col sm={10}><h1 style={WebName}> FAST-FOOD ALIGARIAN </h1></Col>
      </Row>

    </Container>




   
   
  
   </>
  )
}

export default Header
