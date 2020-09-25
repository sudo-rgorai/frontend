import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import Check from "@material-ui/icons/Check";
import Alarm from "@material-ui/icons/Alarm";
import Archive from "@material-ui/icons/Archive";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GetAppIcon from '@material-ui/icons/GetApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col } from 'react-bootstrap';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CircularProgress from '@material-ui/core/CircularProgress';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  subjectName: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
  },
});

function createData(name, classes, progress, icons) {
  return { name, classes, progress, icons };
}

const rows = [
  createData("Assign 1", "23 Aug '20 @ 5.00pm", "80", "AssignmentIcon"),
  createData("Quiz 1", "10 Aug '20 @ 8.00pm", "80", "HelpOutlineIcon"),
  createData("Subj. Assign 1", "10 Aug '20 @ 8.00pm", "70", "AssignmentIcon"),
  createData("Quiz 2", "Tomorrow at 5.00pm", "90", "HelpOutlineIcon"),
  createData("Quiz Long ...", "10 Aug '20 @ 8.00pm", "60", "HelpOutlineIcon"),
];

export default function StudentsDataGrid() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <br/>
      <Container>
        <Row>
          <Col md={4}>
            <TextField id="outlined-basic" label={<><SearchIcon />&nbsp; Search Assignments...</>} variant="outlined" size="small" />
          </Col>
          <Col md={{ span: 4, offset: 4 }} align="right">
            <Button color="error" variant="contained">
              <AddIcon />&nbsp; Add Assignments
            </Button>
          </Col>
        </Row>
      </Container>
      <br/>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" align="center" style={{marginLeft:"7%"}}>
            Name
          </Typography>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <UnfoldMoreIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" align="center" style={{marginLeft:"23%"}}>
            Due Date
          </Typography>
        </Toolbar>
      </AppBar>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
        
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell><AssignmentIcon /></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell><CircularProgress value={row.progress} variant="static" color="inherit" /></TableCell>
              <TableCell>{row.classes} </TableCell>
              <TableCell align="right">
                <Button variant="contained">
                  View Submissions
                </Button>
                <IconButton color="secondary" component="span">
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
