// import {useState} from 'react';

import { useEffect } from "react";

const Home = ({getAllNews, news}) => {
  useEffect(() => {
    getAllNews()
  }, [getAllNews])
  // const [news, setNews] = useState([])
  console.log(news)
  return (
    <div className="main row">
      <div className="col s12 m12">
        {/* {news.length && news.map((item, index) => (
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">News {index + 1}</span>
              <p>{item.text}</p>
            </div>
            <div className="card-action">
              <p>{item.date}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
