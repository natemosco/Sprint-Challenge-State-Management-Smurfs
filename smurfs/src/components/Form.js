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
        let target = e.target
        setFormValues((formValues) => (
            {
                ...formValues,
                [target.id]: target.value
            }
        ))
    };
    const onSubmit = e => {
        e.preventDefault();
        console.log(formValues);
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
            <input type="text" id="name" value={formValues.name} onChange={formUpdater} placeholder="ex: Papa Smurf" />

            <label htmlFor="age">Smurf Age:</label>
            <input type="text" id="age" value={formValues.age} onChange={formUpdater} placeholder="ex: 150" />

            <label htmlFor="height">Smurf Height:</label>
            <input type="text" id="height" value={formValues.height} onChange={formUpdater} placeholder="ex: 5cm" />

            <label htmlFor="id">Smurf ID:</label>
            <input type="text" id="id" value={formValues.id} onChange={formUpdater} placeholder="ex: 32" />

            <button onClick={onSubmit}>Click Here To Add Smurf</button>

        </form>
    )
}
export default connect(null, { createSmurf })(Form)