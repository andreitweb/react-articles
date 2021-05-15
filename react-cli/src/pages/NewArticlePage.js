import React from 'react';
import { Typography } from '@material-ui/core';

import { NewArticle } from '../components';

export const NewArticlePage = () => (
  <>
    <Typography variant="h1">Add new Article</Typography>
    <NewArticle />
  </>
);