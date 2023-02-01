import { Link } from "react-router-dom";
import HomeBackground from '../images/HomeBackground.jpeg';
import BigLogo from '../images/BigLogo.png';
import { Card, Image } from 'react-bootstrap';
import { InversePurpleBtn, MaxWidthDiv } from "../styles/NewsletterStyles";

const HomeHeader = () => (
  <>
    <Card className="text-white">
      <Card.Img src={HomeBackground} alt="Storm Trooper" />
      <Card.ImgOverlay>
        <br />
        <div className="d-flex justify-content-center align-items-center">
          <Image 
            src={BigLogo}
            alt='Elephant Store Logo' 
            width='20%'
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h2> Elephant Toy Store </h2>
        </div>
        <MaxWidthDiv className="d-flex justify-content-center align-items-center">
          <h4> From Toys, Collectibles, and board games. Elephant Toy Store has it all. </h4>
        </MaxWidthDiv>
        <div className="d-flex justify-content-center align-items-center">
          <Link to='/categorys'>
            <InversePurpleBtn type="submit">
              View All
            </InversePurpleBtn>
          </Link>
        </div>
      </Card.ImgOverlay>
    </Card>
  </>
)

export default HomeHeader;