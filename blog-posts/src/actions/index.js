import axios from "axios";
import { FETCH_POSTS, CREATE_POST } from "./types";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=halleluiha299";

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}