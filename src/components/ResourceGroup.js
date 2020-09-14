import React, { useState } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

import { Container, Paper, Typography, List, ListItem, ListItemText, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";


export default function Gradesheet(props) {
  const [expanded, setExpanded] = useState(false);
  const onlinePeople = ['Person 2', 'Person 2', 'Person 2', 'Person 2', 'Person 2', 'Person 2', 'Person 2', 'Person 2'];
  const offlinePeople = ['Person 1', 'Person 1', 'Person 1'];

  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  return (
    <Row>
      <Col md={12}>
        <Paper elevation={3}>
          <Container>
            <Typography variant="h6" gutterBottom style={{ "paddingTop": "10px", "color": "green" }}>
              {props.groupType}
            </Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography style={{ "width": "100%" }}>
                  <Row>
                    <Col md={{ span: 4 }}><strong>Group 1</strong></Col>
                    <Col md={{ span: 3, offset: 4 }}>Created: 20th Aug, 2020</Col>
                  </Row>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ "width": "100%" }}>
                  <ListGroup horizontal>
                    {onlinePeople.map(name => <ListGroup.Item>{name}</ListGroup.Item>)}
                  </ListGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography style={{ "width": "100%" }}>
                  <Row>
                    <Col md={{ span: 4 }}><strong>Group 2</strong></Col>
                    <Col md={{ span: 3, offset: 4 }}>Created: 13th Sept, 2020</Col>
                  </Row>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ "width": "100%" }}>
                  <ListGroup horizontal>
                    {offlinePeople.map(name => <ListGroup.Item>{name}</ListGroup.Item>)}
                  </ListGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography style={{ "width": "100%" }}>
                  <Row>
                    <Col md={{ span: 4 }}><strong>Group 3</strong></Col>
                    <Col md={{ span: 3, offset: 4 }}>Created: 5th Oct, 2020</Col>
                  </Row>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ "width": "100%" }}>
                  <ListGroup horizontal>
                    {onlinePeople.map(name => <ListGroup.Item>{name}</ListGroup.Item>)}
                  </ListGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography style={{ "width": "100%" }}>
                  <Row>
                    <Col md={{ span: 4 }}><strong>Group 4</strong></Col>
                    <Col md={{ span: 3, offset: 4 }}>Created: 11th Nov, 2020</Col>
                  </Row>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ "width": "100%" }}>
                  <ListGroup horizontal>
                    {offlinePeople.map(name => <ListGroup.Item>{name}</ListGroup.Item>)}
                  </ListGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <br />
          </Container>
        </Paper>
      </Col>
    </Row>
  );
}