import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdbreact';

class Todo extends React.Component {
    render() {
        let {oneTodo , onClick} = this.props
        let {id , text, complete } = oneTodo
        return (
            <div style={{ marginTop:'10px' }}>
                <MDBCard key={id} onClick={onClick} style={{ textDecoration : complete ? 'line-through' : 'none' }}>
                    <MDBCardBody>
                            <MDBCardText>
                                {text}
                            </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}

export default Todo;