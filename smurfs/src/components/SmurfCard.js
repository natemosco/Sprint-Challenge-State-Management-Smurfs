import React from 'react'
import styled from "styled-components";

const StyledCharacterCard = styled.div`
    width:250px;
    height:300px;
    background-color:#000b;
    color: white;
    margin-bottom:20px;
`;

export default function SmurfCard(props) {
    return (
        <StyledSmurfCard>
            <h2 className="name">{props.smurf.name}</h2>
            <i className="age">Age: {props.smurf.age}</i>
            <p className="height">Height: {props.smurf.height}</p>
            <p className="id">id#: {props.smurf.id}</p>
        </StyledSmurfCard>
    )
};
