import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import { Grid, Box, makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 800,
  },
}));

export const NewArticle = ({ onSubmit }) => {
  const classes = useStyles();
  const [fields, setState] = useState({title: '', text: ''});
  
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setState(merge(fields, {[name]: value}));
  };
  
  const handleSubmit = () => {
    // todo: submit form
    onSubmit();
  };
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            required
            name="title"
            label="Title"
            fullWidth
            variant="outlined"
            value={fields.title}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="text"
            label="Text"
            multiline
            rows={5}
            fullWidth
            variant="outlined"
            value={fields.text}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">Post</Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

NewArticle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};