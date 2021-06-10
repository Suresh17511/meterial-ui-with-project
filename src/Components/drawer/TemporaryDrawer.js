import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import {Box, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {AddCircleOutlineOutlined, SubjectOutlined} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import {useHistory, useLocation} from 'react-router';

const useStyles = makeStyles((theme) => {
  return {
    title: {
      padding: theme.spacing(2),
    },
    drawer: {
      width: 500,
    },
    active: {
      background: '#f4f4f4',
    },
    header__menu: {
      display: 'flex',
      fontWeight: 'bolder',
      letterSpacing: 0.5,
    },
  };
});
const menuItems = [
  {
    text: 'My Notes',
    icon: <SubjectOutlined color="secondary" />,
    path: '/',
  },
  {
    text: 'Create Note',
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: '/create',
  },
];
export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        // aria-label="open-drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon
          style={{
            color: '#ffe',
            fontSize: 35,
            marginLeft: 5,
          }}
        />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        className={classes.drawer}
      >
        <Typography variant="h5" className={classes.title}>
          Ninja Notes
        </Typography>
        <Divider style={{height: 2}} />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
