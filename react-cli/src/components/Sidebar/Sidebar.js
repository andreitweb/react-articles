import React from 'react';
import { filter } from 'lodash';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { pageList } from '../../pages';
import { Icon } from '..';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&.active': {
      color: theme.palette.primary.main,
    }
  },
  icon: {
    color: 'inherit',
  },
}));

export const Sidebar = () => {
  const classes = useStyles();
  const list = filter(pageList, page => page.showInSidebar);
  return (
    <List>
      {list.map(({name, iconName, path, exact}) => (
        <NavLink to={path} exact={exact} key={name} className={classes.link}>
          <ListItem button >
            <ListItemIcon className={classes.icon}>
              <Icon name={iconName}/>
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};