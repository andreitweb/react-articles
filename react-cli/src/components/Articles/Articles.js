import React from 'react';
import PropTypes from 'prop-types';
import { map, keys } from 'lodash';
import { Grid, Card, CardActionArea, CardContent, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
  },
}));

export const Articles = ({ list }) => {
  if (!keys(list).length) return (
    <Typography variant="body1" color="textSecondary" gutterBottom >At the moment there are no articles!</Typography>
  );
  
  const classes = useStyles();
  
  return (
    <Grid container spacing={2}>
      {map(list, ({date, title, text}, key) => (
        <Grid item key={key}>
          <Link to={`article/${key}`} className={classes.link}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {date}
                  </Typography>
                  <Typography gutterBottom variant="h3" component="h3">
                    {title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

Articles.propTypes = {
  list: PropTypes.object.isRequired,
};