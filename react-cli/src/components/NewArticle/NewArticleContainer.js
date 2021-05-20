import { connect } from 'react-redux';
import { startCreateArticle } from '../../store/articles/actions';

import { getLoading, getTitle, getText } from './selectors';
import { NewArticle } from './NewArticle';

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  title: getTitle(state),
  text: getText(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formData) => dispatch(startCreateArticle(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);