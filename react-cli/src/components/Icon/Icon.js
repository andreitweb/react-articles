import React from 'react';
import PropTypes from 'prop-types';

import { AllInbox, Chat } from '@material-ui/icons';

export const Icon = ({ name }) => {
  switch (name) {
    case 'allInbox':
      return <AllInbox />;
    case 'chat':
      return <Chat />;
    default:
      return;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};