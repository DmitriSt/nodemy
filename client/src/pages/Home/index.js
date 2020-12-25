import { connect } from 'react-redux';
import { getAllNews } from '../../redux/actions/news';
import Home from './Home';

// const mapStateToProps = state => {
//   news: state.news.news
// }

const mapDispatchToProps = {
  getAllNews
}

export default connect(null, mapDispatchToProps)(Home);
