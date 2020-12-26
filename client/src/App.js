import { Provider } from 'react-redux'
import store from './redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './pages/Home';
import CreateNews from './pages/CreateNews';
import 'materialize-css'

function App() {
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
