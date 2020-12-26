import { connect } from 'react-redux';
import { getAllNews, deleteNews } from '../../redux/actions/news';
import Home from './Home';

const mapStateToProps = state => {
  return {
    news: state.news.news,
    isNewsLoad: state.news.isNewsLoad,
    isNewsFail: state.news.isNewsFail,
  }
}

const mapDispatchToProps = {
  getAllNews,
  deleteNews,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
