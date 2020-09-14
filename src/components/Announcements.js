import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Container, Paper, Typography, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";


export default function Announce() {
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
                Announcements
              </Typography>
              <br />
              <strong>For me</strong>
              <br />
              <br />
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography style={{ "width": "100%" }}>
                    <Row>
                      <Col md={{ span: 4 }}><strong>Announcement 1</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>20th Aug, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore ut nihil magnam dolores qui atque necessitatibus quasi, ipsa dolorum distinctio alias tempore! Dolor ipsam fugiat delectus. Reprehenderit, fuga nihil.
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
                      <Col md={{ span: 4 }}><strong>Announcement 2</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>13th Sept, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore ut nihil magnam dolores qui atque necessitatibus quasi, ipsa dolorum distinctio alias tempore! Dolor ipsam fugiat delectus. Reprehenderit, fuga nihil.
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
                      <Col md={{ span: 4 }}><strong>Announcement 3</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>5th Oct, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore ut nihil magnam dolores qui atque necessitatibus quasi, ipsa dolorum distinctio alias tempore! Dolor ipsam fugiat delectus. Reprehenderit, fuga nihil.
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
                      <Col md={{ span: 4 }}><strong>Announcement 4</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>11th Nov, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore ut nihil magnam dolores qui atque necessitatibus quasi, ipsa dolorum distinctio alias tempore! Dolor ipsam fugiat delectus. Reprehenderit, fuga nihil.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <br />
              <strong>For my children</strong>
              <br />
              <br />
              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography style={{ "width": "100%" }}>
                    <Row>
                      <Col md={{ span: 4 }}><strong>Announcement 1</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>20th Aug, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore ut nihil magnam dolores qui atque necessitatibus quasi, ipsa dolorum distinctio alias tempore! Dolor ipsam fugiat delectus. Reprehenderit, fuga nihil.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography style={{ "width": "100%" }}>
                    <Row>
                      <Col md={{ span: 4 }}><strong>Announcement 2</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>13th Sept, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore ut nihil magnam dolores qui atque necessitatibus quasi, ipsa dolorum distinctio alias tempore! Dolor ipsam fugiat delectus. Reprehenderit, fuga nihil.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel7bh-content"
                  id="panel7bh-header"
                >
                  <Typography style={{ "width": "100%" }}>
                    <Row>
                      <Col md={{ span: 4 }}><strong>Announcement 3</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>5th Oct, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore ut nihil magnam dolores qui atque necessitatibus quasi, ipsa dolorum distinctio alias tempore! Dolor ipsam fugiat delectus. Reprehenderit, fuga nihil.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel8bh-content"
                  id="panel8bh-header"
                >
                  <Typography style={{ "width": "100%" }}>
                    <Row>
                      <Col md={{ span: 4 }}><strong>Announcement 4</strong></Col>
                      <Col md={{ span: 3, offset: 4 }}>11th Nov, 2020</Col>
                    </Row>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ "width": "100%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore ut nihil magnam dolores qui atque necessitatibus quasi, ipsa dolorum distinctio alias tempore! Dolor ipsam fugiat delectus. Reprehenderit, fuga nihil.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
            </Container>
          </Paper>

          <Paper elevation={3} style={{ "marginTop": "20px", "height": "600px", "background": "linear-gradient(to bottom left, #4A234E, #3AC9C7)" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "cyan" }}>
                Extra Stuff
              </Typography>
              <br />
            </Container>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
}
