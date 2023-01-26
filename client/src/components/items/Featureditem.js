import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Featureditem = () => {
  const [item, setItem] = useState({ id: 1, item_name: '', description: '', quantity: '', category: '', discount: '', brand: '', image: '' })

  useEffect( () => {
    axios.get("/api/featured")
    .then(res => setItem(res.data))
    .catch(err => console.log(err))
  },[])

  const { item_name, image, id } = item
  return (
    <>
      <Link to={`/items/${id}`} state={{ ...item }}>
        <Card style={{ width: '10rem' }}>
          <Card.Header>Featured</Card.Header>
          <Card.Img variant="top" src={image} alt={item_name} />
          <Card.Body>
            <Card.Title>{item_name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
   </>
  )
}

export default Featureditem;