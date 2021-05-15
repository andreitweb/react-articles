import { connect } from 'react-redux';
import { addArticle } from '../../store/articles/actions';

import { NewArticle } from './NewArticle';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (formData) => dispatch(addArticle(formData)),
  };
};

export default connect(null, mapDispatchToProps)(NewArticle);