import React from "react";
import { connect } from "react-redux";
import { getJokeSetup, fetchJokeReady } from "../actions/index.js";
import styled from "styled-components";




const JokeCard = (props) => {
  const { setup, error, loading, ready, delivery } = props;

  const handleClickSetup = (e) => {
    e.preventDefault();
    props.getJokeSetup();
  };

  const handleClickDelivery = (e) => {
    props.fetchJokeReady();
  };

  const handleLoading = () => {
    if (loading) {
      return <div>---Loading your joke, hang on a sec---</div>;
    }
  };

  const handleReadyCheck = () => {
    if (ready === true) {
      console.log("deliveryJC", delivery);
      return <h1>{delivery}</h1>;
    }
  };

  if (error) {
    console.log("error", error);
    return <h1> Error: {error.message}</h1>;
  }

  return (
    <div>
      <div>
        <StyledHeader>Joke Machine</StyledHeader>
        <StyledButton onClick={handleClickSetup}>NEW JOKE</StyledButton>
        <StyledDiv>{handleLoading()}</StyledDiv>
        <StyledDiv>{setup}</StyledDiv>
        <StyledButton onClick={handleClickDelivery}>PUNCHLINE</StyledButton>
        <StyledDiv>{handleReadyCheck()}</StyledDiv>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    delivery: state.delivery,
    loading: state.loading,
    error: state.error,
    ready: state.ready,
  };
};

export default connect(mapStateToProps, {
  getJokeSetup,
  fetchJokeReady,
})(JokeCard);

const StyledHeader = styled.h1`
color: white;
text-decoration: underline;
text-decoration: bold;
`

const StyledButton = styled.button`
color: white;
background-color: black;
`
const StyledDiv = styled.div`
color: white
`