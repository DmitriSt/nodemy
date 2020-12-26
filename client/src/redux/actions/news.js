import { API_DOMAIN } from '../../constants/envConstants';
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
} from '../types/newsTypes';

import axios from 'axios';

// get

export const getAllNews = () => {
  return dispatch => {
    dispatch(getNewsStarted());
    axios
      .get(`${API_DOMAIN}/api/news`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        dispatch(getNewsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getNewsFailure(err.message));
      });
  };
};

const getNewsSuccess = news => ({
  type: GET_NEWS_SUCCESS,
  payload: news
});

const getNewsStarted = () => ({
  type: GET_NEWS_REQUEST
});

const getNewsFailure = error => ({
  type: GET_NEWS_FAILURE,
  payload: error
});

// post

export const setNewNews = news => {
  return dispatch => {
    dispatch(setNewsStarted());
    axios
      .post(`${API_DOMAIN}/api/news/add`, news, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        dispatch(setNewsSuccess(res.data));
      })
      .catch(err => {
        dispatch(setNewsFailure(err.message));
      });

    dispatch(getAllNews());
  };
};

const setNewsSuccess = news => ({
  type: SET_NEWS_SUCCESS,
  payload: news
});

const setNewsStarted = () => ({
  type: SET_NEWS_REQUEST
});

const setNewsFailure = error => ({
  type: SET_NEWS_FAILURE,
  payload: error
});

// delete

export const deleteNews = newsId => {
  return dispatch => {
    dispatch(removeNewsStarted());
    axios
      .delete(`${API_DOMAIN}/api/news/delete`, {
        headers: {
          'Content-Type': 'application/json'
        },
        data: {_id: newsId}
      })
      .then(res => {
        dispatch(removeNewsSuccess(res.data));
        dispatch(getAllNews());
      })
      .catch(err => {
        dispatch(removeNewsFailure(err.message));
      });
  }
}

const removeNewsSuccess = news => ({
  type: REMOVE_NEWS_SUCCESS,
  payload: news
});

const removeNewsStarted = () => ({
  type: REMOVE_NEWS_REQUEST
});

const removeNewsFailure = error => ({
  type: REMOVE_NEWS_FAILURE,
  payload: error
});