import { connect } from 'react-redux';
import { setNewNews } from '../../redux/actions/news';
import CreateNews from './CreateNews';

const mapStateToProps = state => {
  return {
    news: state.news.news,
    isNewsLoad: state.news.isNewsLoad,
    isNewsFail: state.news.isNewsFail,
  }
}

const mapDispatchToProps = {
  setNewNews,
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateNews);
