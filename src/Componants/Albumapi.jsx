import axios from "axios";

let BaseUrl = "https://jsonplaceholder.typicode.com";

let get = (num) => axios.get(`${BaseUrl}/albums`);

let getByID = (albumId) => axios.get(`${BaseUrl}/albums/${albumId}`);

let Delete = (albumId) => axios.delete(`${BaseUrl}/albums/${albumId}`);

export let Albumapi = {
  get,
  getByID,
  Delete,
};
