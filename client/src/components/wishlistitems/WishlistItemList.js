import { Container, Row, Col } from 'react-bootstrap';

const WishlistItemList = ({ wishlistitems }) => (
  <Container>
    <Row sm='4'>
      { wishlistitems.map( wi => 
        <Col key={wi.id}>
          {/* <WishlistItemShow 
            {...wi}
          /> */}
        </Col>
      )}
    </Row>
  </Container>
)

export default WishlistItemList;