
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ItemForm from './ItemForm';
import { Card, Button, Modal, Container, Row, Col, } from 'react-bootstrap';




const ItemShow =({ id, item_name, description, cost, quantity, category, discount, brand, deleteItem }) => {
    const [showing, setShow] = useState(false)
    return(
        <>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>{item_name}</Card.Title>
              <Button variant="outline-dark" onClick={() => setShow(true)}>
                Show
              </Button>
            </Card.Body>
          </Card>
    
          <Modal show={showing} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <Container>
                    <h1>{item_name}</h1>
                    <p>Description:
                      { description ? description : "description" }
                    </p>
                    <p>cost: { cost ? cost : "cost" }</p>
                    <p>quantity: { quantity ? quantity: "quantity" }</p>
                    <p>category: { category ? category: "category" }</p>
                    <p>discount: { discount ? discount: "discount" }</p>
                    <p>brand: { brand ? brand: "brand" }</p>
                    <Link
                      to={`/${id}/updateItem`}
                      state={{
                        id,
                        item_name,
                        description,
                        cost,
                        quantity,
                        category,
                        discount,
                        brand,
                      }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => deleteItem(id)}
                    >
                      Delete
                    </Button>
                  </Container>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
          <br />
        </>
      )
    }
export default ItemShow;

