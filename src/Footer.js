import React from 'react';
import Button from './Button';
import {connect} from 'react-redux';
import { filterShowAll,filterShowDone,filterShowUnderDone } from './action/filter';
import { removeAllStorage } from './action/auth';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Footer extends React.Component {

render() {

    let {filterShowAll,filterShowDone,filterShowUnderDone,removeAllStorage} = this.props;
    return (
        <MDBRow>
          <Button color="blue" text="show all" onClick={() => filterShowAll()}/>
          <Button color="blue" text="show done" onClick={() => filterShowDone()}/>
          <Button color="blue" text="show underdone" onClick={() => filterShowUnderDone()}/>
          <Button color="peach" text="remove all" onClick={() => removeAllStorage()}/>
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
      filterShowUnderDone : () => dispatch(filterShowUnderDone()),
      removeAllStorage : () => dispatch(removeAllStorage())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
