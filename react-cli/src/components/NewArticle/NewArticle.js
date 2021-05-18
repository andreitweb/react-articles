import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { trim, get, reduce, every, mapValues } from 'lodash';
import { Grid, Box, makeStyles, TextField, Button, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  buttonWrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.primary.dark,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -12,
    marginTop: -12,
  },
}));

export const NewArticle = ({ loading, onSubmit }) => {
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
        rowsMax: 10,
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
      clearForm();
    }
  };
  
  /** Clear all fields
   *
   */
  const clearForm = () => setState(mapValues(fields, field => ({...field, value: ''})));
  
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
              disabled={loading}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <div className={classes.buttonWrapper}>
              <Button type="submit" variant="contained" color="primary" disabled={loading || !isValid}>Post</Button>
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

NewArticle.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};