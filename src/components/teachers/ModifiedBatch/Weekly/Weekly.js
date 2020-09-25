import React, { useState } from "react";
import classes from "./Weekly.module.css";
import Slot from "../Slot/Slot";
import { FormLabel, Grid } from "@material-ui/core";

function Weekly() {
  const [SelectedDays, SetSelectedDays] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const selectThis = (index) => {
    console.log("inside hte functi");
    let updatedDaysList = [...SelectedDays];
    updatedDaysList[index] = !updatedDaysList[index];
    SetSelectedDays(updatedDaysList);
  };

  let SelectedDaysList = null;
  SelectedDaysList = SelectedDays.map((day, index) => {
    if (day) {
      return (<>
      <Slot>{Days[index]}</Slot>
      <div style={{borderTop:'2px solid gray'}}/>
      </>);
    }
  });

  console.log(SelectedDays);
  return (
    <div className={classes.Weekly}>
      <div style={{marginBottom:'2em'}}>
        <FormLabel>Select Days of the week</FormLabel>
        <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
          <Grid item xs= {12} md={1}
            className={SelectedDays[0] ? classes.Selected : classes.unselected}
            onClick={() => {
              selectThis(0);
            }}
          >
            Su
          </Grid>
          <Grid item xs= {12} md={1}
            className={SelectedDays[1] ? classes.Selected : classes.unselected}
            onClick={() => {
              selectThis(1);
            }}
          >
            Mo
          </Grid>
          <Grid item xs= {12} md={1}
            className={SelectedDays[2] ? classes.Selected : classes.unselected}
            onClick={() => {
              selectThis(2);
            }}
          >
            Tu
          </Grid>
          <Grid item xs= {12} md={1}
            className={SelectedDays[3] ? classes.Selected : classes.unselected}
            onClick={() => {
              selectThis(3);
            }}
          >
            We
          </Grid>
          <Grid item xs= {12} md={1}
            className={SelectedDays[4] ? classes.Selected : classes.unselected}
            onClick={() => {
              selectThis(4);
            }}
          >
            Th
          </Grid>
          <Grid item xs= {12} md={1}
          className={SelectedDays[5]?classes.Selected : classes.unselected}
            onClick={() => {
              selectThis(5);
            }}
          >
            Fr
          </Grid>
          <Grid item xs= {12} md={1}
            className={SelectedDays[6] ? classes.Selected : classes.unselected}
            onClick={() => {
              selectThis(6);
            }}
          >
            Sa
          </Grid>
        </Grid>
      </div>
      <div style={{marginBottom:'2em'}}>
        <FormLabel>Timings</FormLabel>
        <div>{SelectedDaysList}</div>
      </div>
    </div>
  );
}

export default Weekly;
