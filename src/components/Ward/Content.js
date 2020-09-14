import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Container, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { ExpandMore, CloudDownload } from "@material-ui/icons";


export default function StuffMaterial() {
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
                CONTENT
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
                      <Col md={{ span: 4 }}><strong>Assignment 1</strong></Col>
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
                            <Col md={{ span: 4 }}><strong>File</strong></Col>
                            <Col md={{ span: 4, offset: 4 }}><strong>Size</strong></Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <Typography><small>Action</small></Typography>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Questions.docx</Col>
                            <Col md={{ span: 4, offset: 4 }}>15 KB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Answers.docx</Col>
                            <Col md={{ span: 4, offset: 4 }}>25 KB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Performance-List.pdf</Col>
                            <Col md={{ span: 4, offset: 4 }}>5 MB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
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
                      <Col md={{ span: 4 }}><strong>Quiz 1</strong></Col>
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
                            <Col md={{ span: 4 }}><strong>File</strong></Col>
                            <Col md={{ span: 4, offset: 4 }}><strong>Size</strong></Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <Typography><small>Action</small></Typography>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Questions.docx</Col>
                            <Col md={{ span: 4, offset: 4 }}>15 KB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Answers.docx</Col>
                            <Col md={{ span: 4, offset: 4 }}>25 KB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Performance-List.pdf</Col>
                            <Col md={{ span: 4, offset: 4 }}>5 MB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
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
                      <Col md={{ span: 4 }}><strong>Assignment 2</strong></Col>
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
                            <Col md={{ span: 4 }}><strong>File</strong></Col>
                            <Col md={{ span: 4, offset: 4 }}><strong>Size</strong></Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <Typography><small>Action</small></Typography>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Questions.docx</Col>
                            <Col md={{ span: 4, offset: 4 }}>15 KB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Answers.docx</Col>
                            <Col md={{ span: 4, offset: 4 }}>25 KB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Performance-List.pdf</Col>
                            <Col md={{ span: 4, offset: 4 }}>5 MB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
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
                      <Col md={{ span: 4 }}><strong>Quiz 2</strong></Col>
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
                            <Col md={{ span: 4 }}><strong>File</strong></Col>
                            <Col md={{ span: 4, offset: 4 }}><strong>Size</strong></Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <Typography><small>Action</small></Typography>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Questions.docx</Col>
                            <Col md={{ span: 4, offset: 4 }}>15 KB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Answers.docx</Col>
                            <Col md={{ span: 4, offset: 4 }}>25 KB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={<Row>
                            <Col md={{ span: 4 }}>Performance-List.pdf</Col>
                            <Col md={{ span: 4, offset: 4 }}>5 MB</Col>
                          </Row>}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CloudDownload />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
            </Container>
          </Paper>

          <Paper elevation={3} style={{ "marginTop": "20px", "height": "600px", "background": "linear-gradient(to top right, #1e221a, #42db00)" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "lawngreen" }}>
                EXTRA STUFF
              </Typography>
              <br />
            </Container>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
}