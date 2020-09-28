import React from "react";
import { Grid,TextField } from "@material-ui/core";

function Slot(props) {
  return (
    <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
    >
      <Grid item xs={6} sm={1} style={{padding:'1em'}}>{props.children}</Grid>
      <Grid item xs={6} sm={1} style={{padding:'1em'}}>
        <TextField
            id="start"
            label="Starts at"
            type="time"
            defaultValue="06:30"
        />
      </Grid>
      <Grid item xs={6} sm={1} style={{padding:'1em'}}>
        <TextField
            id="end"
            label="Ends at"
            type="time"
            defaultValue="09:30"
        />
      </Grid>
      
    </Grid>
  );
}

export default Slot;
