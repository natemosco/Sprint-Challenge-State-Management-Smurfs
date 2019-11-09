import React from 'react'
import { connect } from "react-redux";
import { getSmurf } from "../actions";

function DisplayAllButton(props) {
    const clickFn = e => {
        e.preventDefault();
        props.getSmurf();
    }

    return (
        <button onClick={clickFn}>Load Saved Smurfs</button>
    )
};

export default connect(null, { getSmurf })(DisplayAllButton);
