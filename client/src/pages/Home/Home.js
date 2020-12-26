import { useEffect } from "react";
import Spinner from "../../components/spinner";

const Home = ({getAllNews, deleteNews, news, isNewsLoad, isNewsFail}) => {

  useEffect(() => {
    getAllNews()
  }, [getAllNews])

  const removeNews = id => {
    deleteNews(id)
  }

  return (
    <div className="main container">
      <div className="row">
        {isNewsLoad &&  <Spinner />}
        {isNewsFail && news.length === 0 && "Error!"}
        {news.length !== 0 && !isNewsLoad && news.map((item, index) => (
          <div className="col s12 m6" key={item._id}>
            <div className="card indigo darken-1">
              <div className="removeNews waves-effect red btn" onClick={() => removeNews(item._id)}>Delete</div>
              <div className="card-content white-text">
                <span className="card-title">News {index + 1}</span>
                <p>{item.text}</p>
              </div>
              <div className="card-action">
                <div className="row">
                  <div className="col s12 m6"><p className="white-text">{item.date}</p></div>
                  <div className="col s12 m6"><p className="right white-text">{item.author}</p></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
