import axios from "axios";
import { apikey } from "../theme";

const forcastEndPoint = (params) =>
  `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationsEndpoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apikey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("Error : ", err);
    return null;
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forcastEndPoint(params));
};

export const fetchLocations = (params) => {
  return apiCall(locationsEndpoint(params));
};
