// import { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './pages/Home';
import CreateNews from './pages/CreateNews';
import 'materialize-css'

function App() {
  // const [news, setNews] = useState([])
  
//   const testFunc = async () => {
//     const url = "http://localhost:8080/api/news";
//     // let _data = {
//     //   text: "8888",
//     // }
//     fetch(url, {
//       method: 'get',
//       // body: JSON.stringify(_data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(data => data.json())
//       .then(res => setNews(res))
    
//     // var xmlHttp = new XMLHttpRequest();
//     // xmlHttp.open("POST", url, false); // false for synchronous request
//     // xmlHttp.setRequestHeader("Content-type", "application/json");
//     // xmlHttp.send(JSON.stringify(_data));
    
//     // if (response.ok) {
//     //   let json = await response.json();
//     //   console.log(json)
//     // } else {
//     //   // alert("Ошибка HTTP: " + response.status);
//     // }
//   }

//   useEffect(() => {
//     testFunc()
//   }, [])
// console.log(news)
console.log(store.getState())
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateNews />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
