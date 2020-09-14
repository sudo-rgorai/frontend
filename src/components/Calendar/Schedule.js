import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Row, Col } from "react-bootstrap";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
// Data to be fetched from backend
function createData(date, day, color) {
  return { date, day, color};
}

const rows = [
  createData('20', 'AUG,SAT', '#3D6806'),
  createData('21', 'AUG,SUN', '#1976D2'),
  createData('22', 'AUG,MON', '#8E0C0C'),
  createData('23', 'AUG,TUE', '#3D6806'),
  createData('24', 'AUG,WED', '#3D6806'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <strong>{row.date}</strong>
              </TableCell>
              <TableCell>{row.day}</TableCell>
              <TableCell>
                  <Row>
                      <div style={{width: '10px',height: '10px', background: row.color, borderRadius:'5px' ,marginRight:'5%', marginTop:'2%'}}/>08:30 - 9 pm
                  </Row>
                  <Row>
                      <div style={{width: '10px',height: '10px', background: row.color, borderRadius:'5px' ,marginRight:'5%', marginTop:'2%'}}/>09:00 - 09:30 pm
                  </Row>
              </TableCell>
              <TableCell>
                  <Row>Course A | Batch 2 Topic Name Sample</Row>
                  <Row>Course A | Batch 2 Topic Name Sample</Row>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}