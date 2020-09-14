import React, { useState } from "react";
import classes from "./Custom.module.css";
import { Grid,TextField, FormLabel ,Button} from "@material-ui/core";

function Custom(props) {
  const [datesArray, addNewDate] = useState(["2020-01-01"]);

  let daysList = datesArray.map((day,index) => {
    return (
      <>
      <Grid key={index}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
    >
      <Grid item xs={12} md={1} style={{padding:'1em'}}>
        <TextField
            id="date"
            label="Date"
            type="date"
            value={day}
        />
      </Grid>
      <Grid item xs={12} md={1} style={{padding:'1em'}}>
        <TextField
            id="start"
            label="Starts at"
            type="time"
            defaultValue="06:30"
        />
      </Grid>
      <Grid item xs={12} md={1} style={{padding:'1em'}}>
        <TextField
            id="end"
            label="Ends at"
            type="time"
            defaultValue="09:30"
        />
      </Grid>
      
    </Grid>
    <div style={{borderBottom:'1px solid black'}}/>
    </>
    );
  });

  const addDate = () => {
    let updatedArray = [...datesArray];
    updatedArray.push("2020-01-01");
    addNewDate(updatedArray);
  };
  return (
    <div className={classes.Custom}>
      <FormLabel>Choose the custom Date and Time</FormLabel>
      <div className={classes.Custom__SlotList}></div>
      {daysList}
      <div>
        <Button variant='contained' style={{backgroundColor:'gray',color:'white',margin:'2em 0'}} onClick={addDate}>
          Add New Date +
        </Button>
      </div>
    </div>
  );
}

export default Custom;
