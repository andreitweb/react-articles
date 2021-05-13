import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 18,
    fontWeight: 500,
    color: theme.palette.grey['50'],
  },
}));

export const Logo = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>Articles</div>
  );
};