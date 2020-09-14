import React, { useState } from 'react';
import Cookies from 'js-cookie';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import App from "../App.js";

const useStyles = makeStyles((theme) => ({
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "35px",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function SigninPage() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");

  const handleChange = (event) => {
    switch (event.target.name){
      case "name": setName(event.target.value); break;
      case "pswd": setPswd(event.target.value); break;
      default: break;
    }
  };

  const handleSubmit = () => {
    // Should do some verification here
    Cookies.set('name', name);
    Cookies.set('isLoggedIn', true);
    Cookies.set('userType', "Teacher");
    console.log("Hello");
    return <App />
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br/>
        <label>Password:
          <input type="Password" name="pswd" value={pswd} onChange={handleChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
    </form>
  );
}
