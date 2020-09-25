import React from 'react';
import {Grid,TextField,FormControl,FormControlLabel,FormLabel,Radio,RadioGroup,Modal, Button,Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core'

import Week from './Week/week';


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
    const [type,setType] = React.useState('weekly');

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
        case 'weekly':
          return(<Week />)
      }
        
    }

    const body = (
    <div style={modalStyle} className={classes.paper}>
        <div style={{display:'flex'}}>
        <h3>Choose Schedule</h3>
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
        <Typography variant='contained' color='primary' style={{color:'white'}} onClick={handleOpen}>
            Choose Schedule
        </Typography>
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