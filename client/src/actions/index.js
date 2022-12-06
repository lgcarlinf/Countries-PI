import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    var json = await axios(`/countries`);
    return dispatch({
      type: "GET_COUNTRIES",
      payload: json.data,
    });
  };
}

export function filterCountryByRegion(payload) {
  return {
    type: "FILTER_BY_REGION",
    payload,
  };
}

export function filterByActivity(payload) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByPoblation(payload) {
  return {
    type: "ORDER_BY_POBLATION",
    payload,
  };
}

export function getNameCountries(payload) {
  return {
    type: "FIND_BY_NAME",
    payload,
  };
}

export function getActivities() {
  return async function (dispatch) {
    var request = await axios("/activity");
    return dispatch({
      type: "GET_ACTIVITIES",
      payload: request.data,
    });
  };
}

export function postActivities(payload) {
  return async function (dispatch) {
    const response = await axios.post("/activity", payload);
    console.log(response);
    return response;
  };
}

export function getDetails(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.get("/countries/" + payload);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
