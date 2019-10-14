import React from 'react';
import Button from './Button';
import {connect} from 'react-redux';
import { filterShowAll,filterShowDone,filterShowUnderDone } from './action/filter';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Footer extends React.Component {

render() {

    let {filterShowAll,filterShowDone,filterShowUnderDone} = this.props;
    return (
        <MDBRow>
          <Button text="show all" onClick={() => filterShowAll()}/>
          <Button text="show done" onClick={() => filterShowDone()}/>
          <Button text="show underdone" onClick={() => filterShowUnderDone()}/>
        </MDBRow>
    )
  }
}

const mapStateToProps = state => {
  return {
      todo : state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
      filterShowAll : () => dispatch(filterShowAll()),
      filterShowDone : () => dispatch(filterShowDone()),
      filterShowUnderDone : () => dispatch(filterShowUnderDone())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
