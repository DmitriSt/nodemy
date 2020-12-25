import {GET_NEWS} from '../types/newsTypes.js';

const initialState = {
  news: [],
}

export default function news(state = initialState, {type, payload}) {
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: [...payload],
      }
    default:
      return state
  }
}