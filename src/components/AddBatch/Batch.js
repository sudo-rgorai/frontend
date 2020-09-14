import React from 'react';
import {Grid,TextField,FormControl,FormControlLabel,FormLabel,Radio,RadioGroup,Modal, Button} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core'

import Daily1 from './daily1'
import AllWeekDays from './AllWeekDays1'
import Weekly from './Weekly/Weekly';
import Custom from './Custom/Custom';

function getModalStyle() {
    const left = 50;
  
    return {
      left: `${left}%`,
      transform: `translate(-${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      height:'auto',
      width:'70%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 3),
    },
  }));

function Batch () {

    const classes = useStyles();
  
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [type,setType] = React.useState('daily')

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handletype = (e) => {
      setType(e.target.value)
    }

    const displaytype = (type) => {
      switch(type) {
        case 'daily':
          return(<Daily1 />)
        case 'weekly':
          return(<Weekly/>)
        case 'allweekdays':
          return(<AllWeekDays />)
        case 'custom':
          return(<Custom/>)
      }
        
    }

    const body = (
    <div style={modalStyle} className={classes.paper}>
        <div style={{display:'flex'}}>
        <h3>Add New Batch</h3>
        <div style={{flex:'1'}}></div>
        <CloseIcon onClick={handleClose}/>
        </div>
        
        <div style={{margin:'2em 0'}}>
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <Grid item >
            <TextField
                id="date"
                label="Starts from"
                type="date"
                defaultValue="2017-05-24" 
               
            />
            </Grid>
            <Grid item >
            <TextField
                id="date"
                label="Ends on"
                type="date"
                defaultValue="2017-05-24"
               
            />
            </Grid>

        </Grid>
        </div>

        <div style={{margin:'1em 0'}}>
        <FormControl component="fieldset">
      <FormLabel component="legend">When would classes happen?</FormLabel>
      <RadioGroup row aria-label="position" name="position" value={type} onChange={handletype}>
        <FormControlLabel
          value="daily"
          control={<Radio color="primary" />}
          label="DAILY"
          labelPlacement="end"
        />
        <FormControlLabel
          value="weekly"
          control={<Radio color="primary" />}
          label="WEEKLY"
          labelPlacement="end"
        />
        <FormControlLabel
          value="allweekdays"
          control={<Radio color="primary" />}
          label="ALL WEEKDAYS"
          labelPlacement="end"
        />
        <FormControlLabel
         value="custom"
         control={<Radio color="primary" />} 
         label="CUSTOM"
         />
      </RadioGroup>
    </FormControl>
    </div>

    {displaytype(type)}

        <Grid 
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
            <Grid item>
                <Button variant='contained' color='primary' style={{backgroundColor:'grey'}} onClick={handleClose}>cancel</Button>
            </Grid>
            <Grid item >
            <Button variant='contained' color='primary' style={{backgroundColor:'#FFD300'}}>create</Button>
            </Grid>
        </Grid>

    </div>);

    return(
        <>
        <Button variant='contained' color='primary' onClick={handleOpen}>
            ADD NEW BATCH
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            disableBackdropClick={true}
            style={{overflowY:'scroll',marginTop:'4em'}}
        >
            {body}
        </Modal>
        </>
    )
}

export default Batch;