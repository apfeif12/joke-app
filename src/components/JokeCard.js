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
      return <StyledLoading>---Loading your joke, please hang on a sec---</StyledLoading>;
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
    <Page>
      <div>
        <StyledHeader>Click-for-a-Joke</StyledHeader>
        <StyledButton onClick={handleClickSetup}>NEW JOKE</StyledButton>
        <StyledLoading>{handleLoading()}</StyledLoading>
        <StyledSetup>{setup}</StyledSetup>
        <StyledButton onClick={handleClickDelivery}>PUNCHLINE</StyledButton>
        <StyledDelivery>{handleReadyCheck()}</StyledDelivery>
        <StyledName>By Alex Pfeifer</StyledName>
      </div>
    </Page>
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

const Page = styled.div`
background-color: #01303f;
color: white;
font-family: PressStart2P;
height: 100vh;
`

const StyledHeader = styled.h1`
color: white;
text-decoration: bold;
font-size: 60px;
font-family: PressStart2P;
padding-top: 5%;
padding-bottom: 5%;
margin-top: 0;
`

const StyledButton = styled.button`
background: #cf3a5a;
background-image: -webkit-linear-gradient(top, #cf3a5a, #cf3a5a);
background-image: -moz-linear-gradient(top, #cf3a5a, #cf3a5a);
background-image: -ms-linear-gradient(top, #cf3a5a, #cf3a5a);
background-image: -o-linear-gradient(top, #cf3a5a, #cf3a5a);
background-image: linear-gradient(to bottom, #cf3a5a, #cf3a5a);
-webkit-border-radius: 5;
-moz-border-radius: 5;
border-radius: 5px;
font-family: PressStart2P;
color: #ffffff;
font-size: 30px;
padding: 10px 20px 10px 20px;
text-decoration: none;
&:hover {
  background: #cf3a5a;
  background-image: -webkit-linear-gradient(top, #cf3a5a, #cc5a72);
  background-image: -moz-linear-gradient(top, #cf3a5a, #cc5a72);
  background-image: -ms-linear-gradient(top, #cf3a5a, #cc5a72);
  background-image: -o-linear-gradient(top, #cf3a5a, #cc5a72);
  background-image: linear-gradient(to bottom, #cf3a5a, #cc5a72);
  text-decoration: none;
}
`

const StyledLoading = styled.h2`
color: white;
font-size: 30px;
`

const StyledSetup = styled.h2`
color: white;
font-size: 30px;
padding-left: 1%;
padding-right: 1%;


`

const StyledDelivery = styled.h2`
color: white;
font-size: 20px;
padding-left: 1%;
padding-right: 1%;
padding-top: 2%;

`

const StyledName = styled.h2`
color: white;
font-size: 14px;
position: absolute;
bottom: 0px;

`