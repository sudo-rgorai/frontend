import React from 'react'
import {FormLabel,Grid,TextField} from '@material-ui/core'

function Daily1 () {
    return(

        <div style={{margin:'2em 0'}}>

    <FormLabel component="legend">Timings</FormLabel>
<hr />
    <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <Grid item xs={12} sm={1} style={{padding:'1em'}}>
                <h6>Daily Timing</h6>
            </Grid>
            <Grid item xs={12} sm={1} style={{padding:'1em'}}>
            <TextField
                id="date"
                label="Starts at"
                type="time"
                defaultValue='16:30'
            />
            </Grid>
            <Grid item xs={12} sm={1} style={{padding:'1em'}}>
            <TextField
                id="date"
                label="Ends at"
                type="time"
                defaultValue='18:30'
            />
            </Grid>
            
        </Grid>
        <div style={{borderTop:'2px solid gray'}}/>
        </div>
    )
}

export default Daily1;