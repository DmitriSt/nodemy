import { GET_NEWS } from '../types/newsTypes';

export const getAllNews = () => async(dispatch) => {
  const url = "http://localhost:8080/api/news";
  await fetch(
    url, 
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify(_data),
    })
    .then(data => data.json())
    .then(res => {
      return {type: GET_NEWS, payload: res}
    })
}