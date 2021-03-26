import axios from "axios";
export const FETCH_JOKE_LOADING = "FETCH_JOKE_LOADING";
export const FETCH_JOKE_READY_FALSE = "FETCH_JOKE_READY_FALSE";
export const FETCH_JOKE_SETUP = "FETCH_JOKE_SETUP";
export const FETCH_JOKE_DELIVERY = "FETCH_JOKE_DELIVERY";
export const FETCH_JOKE_READY = "FETCH_JOKE_READY";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";
export const FETCH_JOKE_HIDDEN = "FETCH_JOKE_HIDDEN";

export const getJokeSetup = () => (dispatch) => {
  dispatch(fetchJokeHidden());
  dispatch(fetchJokeLoading());
  dispatch(fetchJokeReadyFalse());
  axios
    .get(
      "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
    )
    .then((res) => {
      dispatch(fetchJokeSetup(res.data.setup));
      console.log("setup", res.data.setup);
      dispatch(fetchJokeDelivery(res.data.delivery));
      console.log("delivery", res.data.delivery);
    })
    .catch((error) => {
      dispatch(fetchJokeFail(error));
      console.log("error", error);
    });
};

export const fetchJokeLoading = () => {
  return { type: FETCH_JOKE_LOADING };
};

export const fetchJokeSetup = (setup) => {
  return { type: FETCH_JOKE_SETUP, payload: setup };
};

export const fetchJokeDelivery = (delivery) => {
  return { type: FETCH_JOKE_DELIVERY, payload: delivery };
};

export const fetchJokeReady = () => {
  return { type: FETCH_JOKE_READY };
};

export const fetchJokeReadyFalse = () => {
  return { type: FETCH_JOKE_READY_FALSE };
};

export const fetchJokeHidden = () => {
  return { type: FETCH_JOKE_HIDDEN };
};

export const fetchJokeFail = (error) => {
  return { type: FETCH_JOKE_FAIL, payload: error };
};
