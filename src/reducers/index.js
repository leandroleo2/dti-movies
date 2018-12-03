//import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/actionTypes';


let defaultState = {
  movies: [],
  movieDetail:{Ratings:[]}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIE: {
      return {
        ...state,
        movies: action.movies
      };
    }
    case ActionTypes.SEARCH_MOVIE_DETAIL: {
      return {
        ...state,
        movieDetail: action.movieDetail
      };
    }
    default:
      return state;
  }
};