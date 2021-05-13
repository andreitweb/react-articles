import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

export const Articles = ({list}) => (
  <Grid container>
    {list.map(({id, title, text}) => (
      <Grid item key={id}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
);

Articles.propTypes = {
  list: PropTypes.array.isRequired,
};