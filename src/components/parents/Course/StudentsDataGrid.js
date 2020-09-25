import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {makeStyles, Table, TableBody, TableCell, TableContainer, TableRow, Paper, IconButton, Button, TextField} from '@material-ui/core';
import {GetApp as GetAppIcon, AccountCircle as AccountCircleIcon, DonutLargeRounded as DonutLargeRoundedIcon, Search as SearchIcon, Add as AddIcon} from '@material-ui/icons'


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

function createData(name, email, classes, tests) {
  return { name, email, classes, tests };
}

const rows = [
  createData("Student Name", "hey@ssup.com", "25/50 Classes", "2/3 Tests"),
  createData("Student Name", "hey@ssup.com", "25/50 Classes", "2/3 Tests"),
  createData("Student Name", "hey@ssup.com", "25/50 Classes", "2/3 Tests"),
  createData("Student Name", "hey@ssup.com", "25/50 Classes", "2/3 Tests"),
  createData("Student Name", "hey@ssup.com", "25/50 Classes", "2/3 Tests"),
];

export default function StudentsDataGrid() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <br/>
      <Container>
        <Row>
          <Col md={4}>
            <TextField id="outlined-basic" label={<><SearchIcon />&nbsp; Search Students...</>} variant="outlined" size="small" />
          </Col>
          <Col md={{ span: 4, offset: 4 }} align="right">
            <Button color="error" variant="contained">
              <AddIcon />&nbsp; Add Students
            </Button>
          </Col>
        </Row>
      </Container>
      <br/>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell><AccountCircleIcon /></TableCell>
              <TableCell component="th" scope="row">
                <strong>{row.name}</strong>
                <br />
                {row.email}
              </TableCell>
              <TableCell><DonutLargeRoundedIcon /></TableCell>
              <TableCell>{row.classes} <br /> {row.tests} </TableCell>
              <TableCell align="right">
                <Button variant="contained">
                  View Performance
                </Button>
                <IconButton color="secondary" component="span">
                  <GetAppIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
