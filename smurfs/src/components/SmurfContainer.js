import React from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import SmurfCard from './SmurfCard';

const StyledSmurfContainer = styled.div`
    box-sizing:border-box;
    width: 100%;
    height: 90vh;
    padding: 30px 80px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
`;

function SmurfContainer(props) {
    return (
        <StyledSmurfContainer>
            {props.smurfs.map((smurf) => {
                return <SmurfCard key={smurf.id} smurf={smurf}></SmurfCard>
            })}
        </StyledSmurfContainer>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(CharacterContainer)