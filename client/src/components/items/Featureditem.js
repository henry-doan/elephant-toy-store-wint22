import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PurpleBtn } from '../styles/NewsletterStyles';

const Featureditem = () => {
  const [item, setItem] = useState({ id: 1, item_name: '', description: '', quantity: '', category: '', discount: '', brand: '', image: '' })

  useEffect( () => {
    axios.get("/api/featured")
    .then(res => setItem(res.data))
    .catch(err => console.log(err))
  },[])

  const { item_name, image, description, id } = item
  return (
    <>
    <Container>
      <Row>
        <Col sm={6}>
          <Row>
            <Image 
              src={image}
              alt='home' 
              width='90%'
              height='50%'
            />
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <h6>Featured Item!</h6>
            <h3>{item_name}</h3>
            <p>{description}</p>
          </Row>
          <Row className="justify-content-md-center">
            <Link to={`/items/${id}`} state={{ ...item }}>
              <PurpleBtn type="submit">
                Shop Now
              </PurpleBtn>
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
   </>
  )
}

export default Featureditem;