import { FlipCard, FlipCardBack, FlipCardFront, FlipCardInner } from '../styles/CardStyles';
import { Image, Container, Row, Col } from 'react-bootstrap';
import GitHubIcon from '../images/GitHubIcon.png';
import LinkedInIcon from '../images/LinkedInIcon.png';
import BrandonProfile from '../images/BrandonProfile.jpeg';
import HannahProfile1 from '../images/HannahProfile1.jpg';
import Ashlynprofile from '../images/AshlynProfile.jpeg';
import HenryPortrait from '../images/HenryPortrait.jpeg';
import FacebookIcon from '../images/FacebookIcon.png';
import Bitmap1 from '../images/Bitmap1.png';
import DaylanPic from '../images/DaylanPic.jpg'

const Team = () => (
  <>
    <br/>
    <Container>
      <Row>
        <Col>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Image 
                  src={BrandonProfile}
                  alt='home' 
                  width='300px'
                  height='300px'
                  className='rounded'
                />
              </FlipCardFront>
              <FlipCardBack className='main-Sans-font'>
                <br/>
                <h4>Brandon Ferguson</h4>
                <h6>Jr. Developer</h6>
                <br/>
                <p>Contributed: User Auth, Admin Routes, Navbar, and Front-End Styling</p>
                <br/>
                <a href='https://github.com/Brandon-Ferguson' target='_blank' rel="noreferrer">
                  <Image 
                    src={GitHubIcon}
                    alt='Github' 
                    width='30px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.linkedin.com/in/brandon-ferguson-byu/' target='_blank' rel="noreferrer">
                  <Image 
                    src={LinkedInIcon}
                    alt='LinkedIn' 
                    width='32px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.facebook.com/brandon.ferguson.182' target='_blank' rel="noreferrer">
                  <Image 
                    src={FacebookIcon}
                    alt='Facebook' 
                    width='30px'
                    className='me-3'
                  />
                </a>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Col>
        <Col>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Image 
                  src={HannahProfile1}
                  alt='home' 
                  width='300px'
                  height='300px'
                  className='rounded'
                />
              </FlipCardFront>
              <FlipCardBack className='main-Sans-font'>
                <br/>
                <h4>Hannah Holt</h4>
                <h6>Jr. Developer</h6>
                <br/>
                <p>Contributed: Front End, Styled Fonts, Footer, & Front-End Styling   </p>
                <br/>
                <a href='https://github.com/hannahholt15' target='_blank' rel="noreferrer">
                  <Image 
                    src={GitHubIcon}
                    alt='Github' 
                    width='30px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.linkedin.com/in/hannah-holt-/' target='_blank' rel="noreferrer">
                  <Image 
                    src={LinkedInIcon}
                    alt='LinkedIn' 
                    width='32px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.facebook.com/hannah.holt.735/' target='_blank' rel="noreferrer">
                  <Image 
                    src={FacebookIcon}
                    alt='Facebook' 
                    width='30px'
                    className='me-3'
                  />
                </a>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Col>
        <Col>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Image 
                  src={Ashlynprofile}
                  alt='home' 
                  width='300px'
                  height='300px'
                  className='rounded'
                />
              </FlipCardFront>
              <FlipCardBack className='main-Sans-font'>
                <br/>
                <h4>Ashlyn Knight</h4>
                <h6>Jr. Developer</h6>
                <p>Contributed: Reviews Item, NavBar, wishlist </p>
                <a href='https://github.com/AshlynsherieKnight' target='_blank' rel="noreferrer">
                <br/>
                <Image 
                    src={GitHubIcon}
                    alt='Github' 
                    width='30px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.linkedin.com/in/ashlyn-knight-ab955b252/' target='_blank' rel="noreferrer">
                  <Image 
                    src={LinkedInIcon}
                    alt='LinkedIn' 
                    width='32px'
                    className='me-3'
                  />
                </a>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Image 
                  src={DaylanPic}
                  alt='home' 
                  width='300px'
                  height='300px'
                  className='rounded'
                />
              </FlipCardFront>
              <FlipCardBack className='main-Sans-font'>
                <br/>
                <h4>Daylan Merritt</h4>
                <h6>Jr. Developer</h6>
                <br/>
                <p>Contributed: CRUD for Reviews, OrderItems, Orders, Items, and Wishlists. Models & Controllers, Admin Functionality, and Providers</p>
                <br/>
                <a href='https://github.com/DaylanM' target='_blank' rel="noreferrer">
                  <Image 
                    src={GitHubIcon}
                    alt='Github' 
                    width='30px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.linkedin.com/in/daylan-merritt-508722231/' target='_blank' rel="noreferrer">
                  <Image 
                    src={LinkedInIcon}
                    alt='LinkedIn' 
                    width='32px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.facebook.com/daylan.merritt/' target='_blank' rel="noreferrer">
                  <Image 
                    src={FacebookIcon}
                    alt='Facebook' 
                    width='30px'
                    className='me-3'
                  />
                </a>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Col>
        <Col>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Image 
                  src='https://res.cloudinary.com/dn2hrtbyt/image/upload/v1675303350/Elephante/LuisMugShot_qacqhu.jpg'
                  alt='home' 
                  width='300px'
                  height='300px'
                  className='rounded'
                  style={{objectFit: 'cover'}}
                />
              </FlipCardFront>
              <FlipCardBack className='main-Sans-font'>
                <br/>
                <h4>Luis Topete</h4>
                <h6>Jr. Developer</h6>
                <br/>
                <p>Contributed: Back and FrontEnd WishlistItems, backend User, Styling for Wishlist and wishlistitem.</p>
                <br/>
                <a href='https://github.com/LuisTopete' target='_blank' rel="noreferrer">
                  <Image 
                    src={GitHubIcon}
                    alt='Github' 
                    width='30px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.linkedin.com/in/luistopeterenteria/' target='_blank' rel="noreferrer">
                  <Image 
                    src={LinkedInIcon}
                    alt='LinkedIn' 
                    width='32px'
                    className='me-3'
                  />
                </a>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Col>
        <Col>
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Image 
                  src={HenryPortrait}
                  alt='home' 
                  width='300px'
                  height='300px'
                  className='rounded'
                />
              </FlipCardFront>
              <FlipCardBack className='main-Sans-font'>
                <br/>
                <h4>Henry Doan</h4>
                <h6>Sr. Developer</h6>
                <br/>
                <p>Contributed: Team training and overview </p>
                <br/>
                <a href='https://github.com/henry-doan' target='_blank' rel="noreferrer">
                  <Image 
                    src={GitHubIcon}
                    alt='Github' 
                    width='30px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.linkedin.com/in/henrydoan/' target='_blank' rel="noreferrer">
                  <Image 
                    src={LinkedInIcon}
                    alt='LinkedIn' 
                    width='32px'
                    className='me-3'
                  />
                </a>
                <a href='https://www.facebook.com/henry.doan.33' target='_blank' rel="noreferrer">
                  <Image 
                    src={FacebookIcon}
                    alt='Facebook' 
                    width='30px'
                    className='me-3'
                  />
                </a>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Col>
      </Row>
    </Container>
    <br/>
    <br/>
    <br/>
    <br/>
  </>
)

export default Team;