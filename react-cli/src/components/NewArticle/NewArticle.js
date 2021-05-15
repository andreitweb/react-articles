import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { trim, get, reduce, every } from 'lodash';
import { Grid, Box, makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 800,
  },
}));

export const NewArticle = ({ onSubmit }) => {
  const classes = useStyles();
  const [fields, setState] = useState(
    {
      title: {
        value: '',
        name: 'title',
        label: 'Title',
        required: true,
      },
      text: {
        value: '',
        name: 'text',
        label: 'Text',
        required: true,
        multiline: true,
        rows: 5,
      },
    }
  );
  
  // Every fields must be not empty
  const isValid = every(fields, ({ value }) => !!trim(value));
  
  /** Input Change Handler
   *
   * @param {element} target - event target
   */
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setState({...fields, [name]: {...fields[name], value}});
  };
  
  /** Get form data and submit form
   *
   * @param {object} event - submit event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (isValid) {
      const formDate = reduce(fields, (acc, value, key) => ({...acc, [key]: trim(get(value, ['value']))}), {});
      onSubmit(formDate);
    }
  };
  
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        {Object.values(fields).map(({name, value, ...fieldData}) => (
          <Grid item xs={12} key={name}>
            <TextField
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
              name={name}
              value={value}
              {...fieldData}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary" disabled={!isValid}>Post</Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

NewArticle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};