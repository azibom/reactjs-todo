import React from 'react';
import { MDBBtn } from "mdbreact";
import { MDBInput } from "mdbreact";
import { connect } from 'react-redux';
import { MDBCol } from "mdbreact";
import { addTodo } from './action/index';


class AddTodoList extends React.Component {
    state = {
        inputText : ''
    }

    handleChange = (event) => {
        this.setState({
            inputText : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(addTodo(this.state.inputText));
        this.setState({
            inputText : ''
        });
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <MDBCol  style={{ width : '100%' }}>
                        <MDBInput style={{ width : '100%' }} label="Material input" value={this.state.inputText} onChange={this.handleChange} />
                        <MDBBtn style={{ width : '100%' }} gradient="peach" type="submit">Add Todo</MDBBtn>
                    </MDBCol>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodoList);
