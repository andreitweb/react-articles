import React from 'react';
import PropTypes from 'prop-types';
import { map, keys } from 'lodash';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

export const Articles = ({ list }) => {
  if (!keys(list).length) return (
    <Typography variant="body1" color="textSecondary" gutterBottom >At the moment there are no articles!</Typography>
  );
  
  return (
    <Grid container spacing={2}>
      {map(list, ({id, date, title, text}) => (
        <Grid item key={id}>
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
        </Grid>
      ))}
    </Grid>
  );
};

Articles.propTypes = {
  list: PropTypes.object.isRequired,
};