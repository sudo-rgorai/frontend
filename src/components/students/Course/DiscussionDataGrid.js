import React from "react";
import { Container, Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import {makeStyles, Table, TableBody, TableContainer, Paper, Button} from '@material-ui/core'
import {AccountCircle as AccountCircleIcon, ArrowForwardIos as ArrowForwardIosIcon} from '@material-ui/icons'

import introimg from '../Images/introimg.png'
import PostDiscussion from './PostDiscussion'

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

function createData(date, title) {
    return {date, title};
  }
  
  const rows = [
    createData("19:36 July 31", "[Sub Topic 1] Discussion thread #1 title short description"),
    createData("19:36 July 31", "[Sub Topic 2] Discussion thread #2 title short description"),
    createData("19:36 July 31", "[Sub Topic 3] Discussion thread #3 title short description"),
  ];

export default function DiscussionDataGrid() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <br/>
      <Container>
        <Row>
          <PostDiscussion />
        </Row>
      </Container>
      <br/>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
        {rows.map((row) => (
            <Card className="text-left">
                
                <Card.Header><strong>{row.date}<br />{row.title}</strong>
                   
                        <Button color="error" variant="contained" style={{position:'relative', left:'25%'}}>View Details&nbsp;
                            <ArrowForwardIosIcon /> 
                        </Button>
                    
                </Card.Header>
               <Row style={{display:'flex'}}>
                
                    <Col style={{flex:'40%', margin:'2%'}}>
                    <img src={introimg} alt="Logo" />
                    </Col>
                
                
                
                <Col style={{flex:'40%', margin:'2%'}}>
                    <AccountCircleIcon fontSize='large' />
                  With supporting text below as a natural lead-in to additional content.<br />
                  <AccountCircleIcon fontSize='large' />
                  With supporting text below as a natural lead-in<br /> to additional content.
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text></InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl as="textarea" aria-label="With textarea" placeholder='Write a Comment...Enter to post'/>
                    </InputGroup>
                    </Col>
                
             
              </Row>
            </Card>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
