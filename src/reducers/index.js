import {
  FETCH_JOKE_LOADING,
  FETCH_JOKE_SETUP,
  FETCH_JOKE_DELIVERY,
  FETCH_JOKE_READY,
  FETCH_JOKE_FAIL,
  FETCH_JOKE_READY_FALSE,
  FETCH_JOKE_HIDDEN,
} from "../actions/index.js";

const initialState = {
  loading: false,
  setup: "",
  delivery: "",
  error: "",
  ready: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOKE_SETUP:
      return {
        ...state,
        loading: false,
        setup: action.payload,
        ready: false,
      };
    case FETCH_JOKE_DELIVERY:
      return {
        ...state,
        loading: false,
        delivery: action.payload,
      };
    case FETCH_JOKE_READY:
      return {
        ...state,
        ready: true,
      };
    case FETCH_JOKE_READY_FALSE:
      return {
        ...state,
        ready: false,
      };
    case FETCH_JOKE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FETCH_JOKE_HIDDEN:
      return {
        ...state,
        setup: "",
      };
    default:
      return state;
  }
};
export default reducer;
