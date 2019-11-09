import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from "../actions";

function Form(props) {
    const [formValues, setFormValues] = useState({
        name: "",
        age: "",
        height: "",
        id: ""
    })
    const formUpdater = (e) => {
        setFormValues((formValues) => (
            {
                ...formValues,
                [e.tartget.id]: e.target.value
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
            <input type="text" id="name" onChange={formUpdater} placeholder="ex: Papa Smurf" />

            <label htmlFor="age">Smurf Age:</label>
            <input type="text" id="age" onChange={formUpdater} placeholder="ex: 150" />

            <label htmlFor="height">Smurf Height:</label>
            <input type="text" id="height" onChange={formUpdater} placeholder="ex: 5cm" />

            <label htmlFor="id">Smurf ID:</label>
            <input type="text" id="id" onChange={formUpdater} placeholder="ex: 32" />

            <button onClick={onSubmit}>Click Here To Add Smurf</button>

        </form>
    )
}
export default connect(null, { createSmurf })(Form)