import { FETCH_FILM, FETCH_PEOPLE } from "actions/types";
import axios from "axios";

export const fetchFilm = filmUrl => {
  const res = axios.get(filmUrl);
  return {
    type: FETCH_FILM,
    payload: res
  }
}

export const fetchPeople = peopleUrl => {
  const res = axios.get(peopleUrl);
  return {
    type: FETCH_PEOPLE,
    payload: res
  }
}