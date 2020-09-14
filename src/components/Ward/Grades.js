import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Container, Paper, Typography, List, ListItem, ListItemText, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";


export default function Gradesheet() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container style={{ "marginTop": "100px" }}>
      <Row>
        <Col md={12} style={{ "padding": "20px" }}>
          <Paper elevation={3}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "green" }}>
                GRADES
              </Typography>
              <br />
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography style={{ "width": "100%" }}>
                    <Row>
                      <Col md={{ span: 4 }}><strong>Test Subject 1</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>20th Aug, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    <List dense={true} disablePadding={true}>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}><strong>Subsection</strong></Col>
                            <Col md={{ span: 3, offset: 3 }}><strong>Obtained Marks</strong></Col>
                            <Col md={{ span: 3 }}><strong>Total Marks</strong></Col>
                          </Row>}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 1</Col>
                            <Col md={{ span: 3, offset: 3 }}>15</Col>
                            <Col md={{ span: 3 }}>20</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 2</Col>
                            <Col md={{ span: 3, offset: 3 }}>25</Col>
                            <Col md={{ span: 3 }}>40</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 3</Col>
                            <Col md={{ span: 3, offset: 3 }}>5</Col>
                            <Col md={{ span: 3 }}>10</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                    </List>
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
                      <Col md={{ span: 4 }}><strong>Test Subject 2</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>13th Sept, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    <List dense={true} disablePadding={true}>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}><strong>Subsection</strong></Col>
                            <Col md={{ span: 3, offset: 3 }}><strong>Obtained Marks</strong></Col>
                            <Col md={{ span: 3 }}><strong>Total Marks</strong></Col>
                          </Row>}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 1</Col>
                            <Col md={{ span: 3, offset: 3 }}>15</Col>
                            <Col md={{ span: 3 }}>20</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 2</Col>
                            <Col md={{ span: 3, offset: 3 }}>25</Col>
                            <Col md={{ span: 3 }}>40</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 3</Col>
                            <Col md={{ span: 3, offset: 3 }}>5</Col>
                            <Col md={{ span: 3 }}>10</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                    </List>
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
                      <Col md={{ span: 4 }}><strong>Test Subject 3</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>5th Oct, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    <List dense={true} disablePadding={true}>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}><strong>Subsection</strong></Col>
                            <Col md={{ span: 3, offset: 3 }}><strong>Obtained Marks</strong></Col>
                            <Col md={{ span: 3 }}><strong>Total Marks</strong></Col>
                          </Row>}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 1</Col>
                            <Col md={{ span: 3, offset: 3 }}>15</Col>
                            <Col md={{ span: 3 }}>20</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 2</Col>
                            <Col md={{ span: 3, offset: 3 }}>25</Col>
                            <Col md={{ span: 3 }}>40</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 3</Col>
                            <Col md={{ span: 3, offset: 3 }}>5</Col>
                            <Col md={{ span: 3 }}>10</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                    </List>
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
                      <Col md={{ span: 4 }}><strong>Test Subject 4</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>11th Nov, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    <List dense={true} disablePadding={true}>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}><strong>Subsection</strong></Col>
                            <Col md={{ span: 3, offset: 3 }}><strong>Obtained Marks</strong></Col>
                            <Col md={{ span: 3 }}><strong>Total Marks</strong></Col>
                          </Row>}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 1</Col>
                            <Col md={{ span: 3, offset: 3 }}>15</Col>
                            <Col md={{ span: 3 }}>20</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 2</Col>
                            <Col md={{ span: 3, offset: 3 }}>25</Col>
                            <Col md={{ span: 3 }}>40</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 3 }}>Subsection 3</Col>
                            <Col md={{ span: 3, offset: 3 }}>5</Col>
                            <Col md={{ span: 3 }}>10</Col>
                          </Row>}
                          secondary='Section details'
                        />
                      </ListItem>
                    </List>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
            </Container>
          </Paper>

          <Paper elevation={3} style={{ "marginTop": "20px", "height": "600px", "background": "linear-gradient(to top right, #3f2b96, #a8c0ff)" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "cyan" }}>
                EXTRA INFO
              </Typography>
              <br />
            </Container>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
}