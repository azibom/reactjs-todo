import React from 'react';
import { MDBBtn } from "mdbreact";
class Button extends React.Component {

render() {
    let {text, onClick} = this.props;
    return (
        <div>
          <MDBBtn gradient="blue" onClick={onClick}>
            {text}  
          </MDBBtn>  
        </div>
    )
  }
}

export default Button;
