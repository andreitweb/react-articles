import { connect } from 'react-redux';
import { startCreateArticle } from '../../store/articles/actions';

import { getLoading } from './selectors';
import { NewArticle } from './NewArticle';

const mapStateToProps = (state) => {
  return {
    loading: getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formData) => dispatch(startCreateArticle(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);