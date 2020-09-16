import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Radio, RadioGroup, FormControl, FormControlLabel, Button, OutlinedInput, InputLabel, InputAdornment, IconButton, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
  card: {
    maxWidth: 512,
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

export default function SigninPage() {
  const classes = useStyles();

  const [userType, setUserType] = React.useState('student');

  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const history = useHistory();

  // const handleChange = (event) => {
  //   switch (event.target.name){
  //     case "name": setName(event.target.value); break;
  //     case "pswd": setPswd(event.target.value); break;
  //     default: break;
  //   }
  // };

  const handleClickShowPassword = () => {
    setShowPassword( !showPassword );
  };

  const handleRadioChange = (event) => {
    setUserType(event.target.value);
  };

  const handleNameChange = () => (event) => {
    setName(event.target.value);
  };

  const handlePswdChange = () => (event) => {
    setPswd(event.target.value);
  };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };


  const handleSubmit = (event) => {
    // Should do some verification here
    event.preventDefault();
    Cookies.set('name', name);
    Cookies.set('isLoggedIn', true);
    Cookies.set('userType', "Teacher");
    console.log("Hello");
    if (userType === 'student') {
      history.push("/student");
    } else if (userType === 'parent') {
      history.push("/parent");
    } else {
      history.push("/teacher");
    }
    return <App />
  };

  return (
    <div style={{textAlign: 'center', display: 'block', height: '100vw'}}>
    <Card class={classes.card} variant="outlined">
    <form onSubmit={handleSubmit}>

    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
    <Grid item xs={12}>
      Student Sign In
    </Grid>
    <Grid item md={6}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Username</InputLabel>
          <OutlinedInput
            id="filled-adornment-password"
            value={name}
            style={{minWidth: 128}}
            onChange={handleNameChange()}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end"></IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Grid>
        <Grid item md={6}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            style={{minWidth: 128}}
            value={pswd}
            onChange={handlePswdChange()}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Grid>
        
        <br/>
        
        <Grid item xs={12}>
        <FormControl component="fieldset">
        <RadioGroup row aria-label="position" name="position" defaultValue="student" onChange={handleRadioChange}>
        <FormControlLabel value="student" control={<Radio color="primary" />} label="Student" />
        <FormControlLabel value="teacher" control={<Radio color="primary" />} label="Teacher" />
        <FormControlLabel value="parent" control={<Radio color="primary" />} label="Parent" />
      </RadioGroup>
    </FormControl>
    </Grid>

    <Grid item xs={12}>
    <Button type="submit" variant="contained" color="primary">
      Log In
    </Button>
    </Grid>
    </Grid>
    </form>
    </Card>
    </div>
  );
}
