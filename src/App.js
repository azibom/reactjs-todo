import React from 'react';
import AddTodoList from './AddTodoList';
import ShowList from './ShowList';
import Footer from './Footer';
import { MDBContainer, MDBRow } from "mdbreact";

class App extends React.Component {

render() {
    return (
      <MDBContainer >
        <MDBRow center md="12"><AddTodoList /></MDBRow>
        <MDBRow center><ShowList /></MDBRow>
        <MDBRow center><Footer /></MDBRow>
      </MDBContainer>
    )
  }
}

export default App;
