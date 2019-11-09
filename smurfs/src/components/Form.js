import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createSurf } from "../actions";

function Form() {
    const [formValues, setFormValues] = useState({
        name: "",
        age: "",
        height: "",
        id: ""
    })
    const formUpdater = (e, id) => {
        setFormValues((formValues) => (
            {
                ...formValues,
                id: e.target.value
            }
        ))
    };
    const onSubmit = e => {
        e.preventDefault();
        props.createSmurf(formValues)
        setFormValues({
            name: "",
            age: "",
            height: "",
            id: ""
        });
    };
    return (
        <form>
            <label htmlFor="name">Smurf Name:</label>
            <input type="text" id="name" placeholder="ex: Papa Smurf" />

            <label htmlFor="age">Smurf Age:</label>
            <input type="text" id="age" placeholder="ex: 150" />

            <label htmlFor="height">Smurf Height:</label>
            <input type="text" id="height" placeholder="ex: 5cm" />

            <label htmlFor="id">Smurf ID:</label>
            <input type="text" id="id" placeholder="ex: 32" />

            <button onClick={onSubmit}>Click Here To Add Smurf</button>

        </form>
    )
}
export default connect(null, { createSmurf })(Form)