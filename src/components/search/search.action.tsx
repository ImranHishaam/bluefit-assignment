export type FETCH_SEARCH = {
  type: "FETCH_SEARCH";
  searchText: string;
};

export type FETCH_SEARCH_ERROR = {
  type: "FETCH_SEARCH_ERROR";
  error: any;
};

export type FETCH_SEARCH_SUCCESS = {
  type: "FETCH_SEARCH_SUCCESS";
  data: any;
};

export type CLEAR_SEARCH = {
  type: "CLEAR_SEARCH"
}

export type FOLLOW_NEWS = {
  type: "FOLLOW_NEWS",
  id: string
}

export const fetchSearchAction = (searchText: string): FETCH_SEARCH => {
  return {
    type: "FETCH_SEARCH",
    searchText
  };
}

export const fetchSearchSuccessAction = (data: any): FETCH_SEARCH_SUCCESS => {
  return {
    type: "FETCH_SEARCH_SUCCESS",
    data
  };
}

export const fetchSearchErrorAction = (error: any): FETCH_SEARCH_ERROR => {
  return {
    type: "FETCH_SEARCH_ERROR",
    error
  };
}


export const clearSearchAction = () => {
  return {
    type: "CLEAR_SEARCH"
  };
}

export const searchEndAction = () => {
  return {
    type: "SEARCH_END"
  }
}

export const followNews = (id: string): FOLLOW_NEWS => {
  return {
    type: "FOLLOW_NEWS",
    id
  }
}