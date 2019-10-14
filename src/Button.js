import React from 'react';
import { MDBBtn } from "mdbreact";
class Button extends React.Component {

render() {
    let {text, onClick, color} = this.props;
    return (
        <div>
          <MDBBtn gradient={color} onClick={onClick}>
            {text}  
          </MDBBtn>  
        </div>
    )
  }
}

export default Button;
