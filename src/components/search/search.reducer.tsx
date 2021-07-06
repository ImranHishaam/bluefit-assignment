import {
  FETCH_SEARCH,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR,
  CLEAR_SEARCH,
  FOLLOW_NEWS
} from "./search.action";

import _ from 'lodash';

type SearchState = {
  isLoading: boolean,
  error: boolean,
  errorMessage: string;
  result: Array<any>,
  searchText: string,
  hasMore: boolean
}

const INITIAL_STATE: SearchState = {
  isLoading: false,
  error: false,
  errorMessage: "",
  result: [],
  searchText: "",
  hasMore: true
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: FETCH_SEARCH | FETCH_SEARCH_SUCCESS | FETCH_SEARCH_ERROR | CLEAR_SEARCH | FOLLOW_NEWS) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return Object.assign({}, state, {
        isLoading: true,
        error: false,
        hasMore: true,
        searchText: action.searchText
      });
    case "FETCH_SEARCH_SUCCESS":
      return Object.assign({}, state, {
        isLoading: false,
        error: false,
        result: action.data
      });
    case "FETCH_SEARCH_ERROR":
      console.log("test", action)
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        errorMessage: action.error.message
      });
    case "CLEAR_SEARCH":
      return Object.assign({}, state, {
        result: []
      });
    case "FOLLOW_NEWS":
      const searchedNews = state.result.map(function(eachNews) {
        if (eachNews.title === action.id) {
          if (eachNews.follow) {
            eachNews.follow = !eachNews.follow;
          } else {
            eachNews.follow = true
          }
        }
        return eachNews;
      });

      return Object.assign({}, state, {
        result: searchedNews
      });
    default:
      return state;
  }
};
