import "./App.css";
import JokeCard from "./components/JokeCard";
import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";


const StyledDiv = styled.div`
  background-color: black;
`;

const App = () => {
  return (
    <StyledDiv className="App">
      <JokeCard />
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    error: state.error,
    loading: state.loading,
    ready: state.ready,
  };
};

export default connect(mapStateToProps, {})(App);
