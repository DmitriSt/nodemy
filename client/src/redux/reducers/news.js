import { 
  GET_NEWS_SUCCESS,
  GET_NEWS_REQUEST,
  GET_NEWS_FAILURE,
  SET_NEWS_SUCCESS,
  SET_NEWS_REQUEST,
  SET_NEWS_FAILURE,
  REMOVE_NEWS_SUCCESS,
  REMOVE_NEWS_REQUEST,
  REMOVE_NEWS_FAILURE,
} from '../types/newsTypes.js';

const initialState = {
  news: [],
  isNewsLoad: false,
  isNewsFail: false,
}

export default function news(state = initialState, {type, payload}) {
  switch (type) {
    // get
    case GET_NEWS_REQUEST:
      return {
        ...state,
        isNewsLoad: true,
      }
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        news: [...payload],
        isNewsLoad: false,
        isNewsFail: false,
      }
    case GET_NEWS_FAILURE:
      return {
        ...state,
        isNewsLoad: false,
        isNewsFail: true,
      }
    // post
    case SET_NEWS_REQUEST:
      return {
        ...state,
        isNewsLoad: true,
        isNewsFail: false,
      }
    case SET_NEWS_SUCCESS:
      return {
        ...state,
        news: [...payload],
        isNewsLoad: false,
        isNewsFail: false,
      }
    case SET_NEWS_FAILURE:
      return {
        ...state,
        isNewsLoad: false,
        isNewsFail: true,
      }
    case REMOVE_NEWS_REQUEST:
      return {
        ...state,
        isNewsLoad: true,
        isNewsFail: false,
      }
    case REMOVE_NEWS_SUCCESS:
      return {
        ...state,
        // news: [...news, news.filter(id => id !== payload)],
        isNewsLoad: false,
        isNewsFail: false,
      }
    case REMOVE_NEWS_FAILURE:
      return {
        ...state,
        isNewsLoad: false,
        isNewsFail: true,
      }

    default:
      return state
  }
}