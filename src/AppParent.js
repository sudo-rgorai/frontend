import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from './components/Toast';
import Homepage from './components/Home';
import Ward from './components/Ward';
import Grades from './components/Ward/Grades';
import Content from './components/Ward/Content';
import Navigation from './components/NavigationParent';
import TopicsPage from './components/TopicsPage';
import Announcements from './components/Announcements';
import Messenger from './components/Messenger';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AppParent() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Navigation />
        <Container>
          <Switch>
            <Route path='/toast'>
              <Toast />
            </Route>
            <Route path='/topic'>
              <TopicsPage />
            </Route>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route exact path='/ward'>
              <Ward />
            </Route>
            <Route exact path='/ward/grades'>
              <Grades />
            </Route>
            <Route exact path='/ward/content'>
              <Content />
            </Route>
            <Route exact path='/announcements'>
              <Announcements />
            </Route>
            <Route exact path='/messages'>
              <Messenger />
            </Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}
