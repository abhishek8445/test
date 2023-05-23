import React from 'react'
import {Carousel, Card,Button,Col,Row,Container} from 'react-bootstrap'
import image from "../src/myimage/bg2.jpg"
import image2 from "../src/myimage/bg1 (2).jpg"
import image3 from "../src/myimage/bgimg2.jpg"

import item1 from "../src/myimage/font burger.png"
import item2 from "../src/myimage/font_coffee.png"
import item3 from "../src/myimage/font ice cream 2.png"
import item4 from "../src/myimage/font drink.png"
import item5 from "../src/myimage/font pizza.png"
import item6 from "../src/myimage/font sweets.png"


// Slider CSS
function Home() {
  const myimg={
    width:"100%",
    height:"36rem",

  }

 //burger  css

const burger = {
  height:"10rem",
  width:"10rem",
  marginLeft: "4rem",
  marginTop:"2rem"

}

//Coffee CSS
const coffee={
  height:"12rem",
  width:"12rem",
  marginLeft: "3rem",

}
//Ice Creame Image css

const ice={
  height:"10rem",
  width:"10rem",
  marginLeft: "4rem",
  marginTop:"2rem"

}
  const myimage={
    height:"10rem",
    width:"10rem",
    marginLeft: "4rem",
    marginTop:"2rem"
  }

  //drink css 
 
  const drink ={
    height:"9rem",
    width:"9rem",
    marginLeft: "4rem",
    marginTop:"2rem"
  }

  //pizza css

  const pizza ={
    height:"9rem",
    width:"9rem",
    marginLeft: "4rem",
    marginTop:"2rem"
  }

// Cake
  const cake ={
    width:"9rem",
    height:"9rem",
    marginLeft:"4rem",
    marginTop:"2rem"
  }

  const myRow={
    marginTop:"5rem"
  }


  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          style={myimg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Abhishek Chauhan</h3>
          <p>“They said to eat food I said give me momos”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          style={myimg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>B.J Armstrong </h3>
          <h6>Society is fast, fast food, fast cars, fast Everything.</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          style={myimg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Gopal Thakur</h3>
          <p>
          “Restaurants who don’t cook momos why they are called as restaurants”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container>
     
      <Row style={myRow}>
        <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item1} style={burger}/>
      <Card.Body>   
        <Card.Title>Burger</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item2}  style={coffee} />
      <Card.Body>
        <Card.Title>Cold Coffee</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={item3}  style={ice}/>
      <Card.Body>
        <Card.Title>Ice-Cream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>

      <Row style={myRow}>
        <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"   src={item4}  style={drink}/>
      <Card.Body>
        <Card.Title>Drink</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item5} style={pizza}/>
      <Card.Body>
        <Card.Title>Tasty  Pizza </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item6}  style={cake}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>


    </Container>
    </>


  )


}

export default Home
