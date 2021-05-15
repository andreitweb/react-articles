import React from 'react';
import PropTypes from 'prop-types';

import { AllInbox, Forum, PostAdd } from '@material-ui/icons';

export const Icon = ({ name }) => {
  switch (name) {
    case 'allInbox':
      return <AllInbox />;
    case 'chat':
      return <Forum />;
    case 'postAdd':
      return <PostAdd />;
    default:
      return;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};