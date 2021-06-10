import {Button, ButtonBase, makeStyles} from '@material-ui/core';
import React from 'react';

import Typography from '@material-ui/core/Typography';
import {useHistory, useLocation} from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {format} from 'date-fns';
import Avatar from '@material-ui/core/Avatar';
import {useMediaQuery, useTheme} from '@material-ui/core';
import TemporaryDrawer from './drawer/TemporaryDrawer';

const menuItems = [
  {
    text: 'My Notes',
    path: '/',
  },
  {
    text: 'Create Note',
    path: '/create',
  },
];
// const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    active: {
      display: 'none',
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'row',
      },
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});
function Layout({children}) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0} color="secondary">
        {isMatch ? (
          <TemporaryDrawer />
        ) : (
          <Toolbar>
            <Typography className={classes.date}>
              Today is {format(new Date(), 'do MMMM Y')}{' '}
            </Typography>
            <Typography style={{marginRight: 40}}>
              {menuItems.map((item) => (
                <ButtonBase
                  button
                  key={item.text}
                  onClick={() => history.push(item.path)}
                  className={
                    location.pathname == item.path ? classes.active : null
                  }
                  style={{marginRight: 40}}
                >
                  <Typography>{item.text}</Typography>
                </ButtonBase>
              ))}
            </Typography>

            <Typography>Surya</Typography>
            <Avatar src="/mario-hero.jpg" className={classes.avatar} />
          </Toolbar>
        )}
      </AppBar>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
