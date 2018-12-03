import { SEARCH_MOVIE, SEARCH_MOVIE_DETAIL } from './actionTypes';
import axios from "axios";

export function searchMovies(title) {
  return (dispatch) => {
    return axios.get(`http://www.omdbapi.com/?apikey=68b7a486&s=${title}`)
      .then((response) => {
        dispatch(getMovies(response.data))
      })
  }
}
export function searchMovieDetail(id) {
  return (dispatch) => {
    return axios.get(`http://www.omdbapi.com/?apikey=68b7a486&i=${id}`)
      .then((response) => {
        dispatch(getMovie(response.data))
      })
  }
}

export const getMovies = (json) => {
  return {
    type: SEARCH_MOVIE,
    movies: json.Search
  };
};
export const getMovie = (json) => {
  return {
    type: SEARCH_MOVIE_DETAIL,
    movieDetail: json
  };
};