import { Link } from "react-router-dom";
import { CardCol, CardRow, CardImg, TeamCenter, Cardinfo } from "../styles/shared";
import { StyledComponent } from "styled-components";
const About= () =>(
  <>

  <h1>
    Meet the Team!
  </h1>
  <TeamCenter>
  <CardRow>
    <CardCol>
      <CardImg src="https://images.unsplash.com/photo-1674761252747-fd297ba00cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80" alt="Member1" />
      <Cardinfo>
      <h1>
        test
      </h1>
      <p>
        test
      </p>
      </Cardinfo>
    </CardCol>
      <CardImg src="https://images.unsplash.com/photo-1674761252747-fd297ba00cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80" alt="Member2" />
    <CardCol>
    </CardCol>
  </CardRow>
  <CardRow>
    <CardCol>
      <CardImg src="https://images.unsplash.com/photo-1674761252747-fd297ba00cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80" alt="Member3" />
    </CardCol>
    <CardCol>
      <CardImg src="https://images.unsplash.com/photo-1674761252747-fd297ba00cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80" alt="Member4" />
    </CardCol>
    <CardCol>
      <CardImg src="https://images.unsplash.com/photo-1674761252747-fd297ba00cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80" alt="Member5" />
    </CardCol>
  </CardRow>
  </TeamCenter>

  </>
)
export default About;