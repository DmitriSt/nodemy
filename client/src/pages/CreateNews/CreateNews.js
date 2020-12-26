import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateNews = ({
  setNewNews,
}) => {
  const history = useHistory();
  const [news, setNews] = useState({
    author: '',
    text: '',
  })

  const handleChange = e => {
    setNews({...news, [e.target.name]: e.target.value})
  }

  const handleAddNews = e => {
    e.preventDefault();
    setNewNews(news)
    history.push("/");
  }

  return (
    <div className="main row">
      <h1 className="row">Create News</h1>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input onChange={e => handleChange(e)} name="author" type="text" className="validate" />
              <label htmlFor="last_name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea onChange={e => handleChange(e)} name="text" className="materialize-textarea"></textarea>
              <label htmlFor="textarea1">News</label>
            </div>
          </div>
          <button className="waves-effect waves-light btn" onClick={e => handleAddNews(e)}>Add news</button>
        </form>
      </div>
    </div>
  );
};

export default CreateNews;
