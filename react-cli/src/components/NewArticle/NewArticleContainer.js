import { connect } from 'react-redux';
import { addArticle } from '../../store/articles/actions';

import { getLoading } from './selectors';
import { NewArticle } from './NewArticle';

const mapStateToProps = (state) => {
  return {
    loading: getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (formData) => dispatch(addArticle(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);