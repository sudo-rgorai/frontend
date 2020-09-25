import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, CartesianGrid, Tooltip } from 'recharts';

import { Container, Paper, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, LinearProgress, Button, Grid } from "@material-ui/core";
import { Image as ImageIcon, Work as WorkIcon, BeachAccess as BeachAccessIcon, LibraryBooksOutlined, AssignmentOutlined, QuestionAnswerOutlined, SpellcheckOutlined } from '@material-ui/icons';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Ward() {
  const data = [
    { "name": "Subject A", "percent": 24 },
    { "name": "Subject B", "percent": 13 },
    { "name": "Subject C", "percent": 98 },
    { "name": "Subject D", "percent": 39 },
    { "name": "Subject E", "percent": 48 },
    { "name": "Subject F", "percent": 38 },
    { "name": "Subject G", "percent": 43 }
  ];
  const events = [
    { title: 'Quiz 1', date: '2020-08-24' },
    { title: 'Annual Assessment', date: '2020-08-18' }
  ];

  return (
    <Container style={{ "marginTop": "100px" }}>
      <Row>
        <Col md={8} style={{ "padding": "20px" }}>
          <Paper elevation={3} style={{ "height": "400px" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "green" }}>
                PROGRESS
              </Typography>
              <br />
              <ResponsiveContainer height={300}>
                <BarChart data={data} barCategoryGap='40%'>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="percent" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Container>
          </Paper>
          <Paper elevation={3} style={{ "marginTop": "20px", "height": "100px" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "green" }}>
                ATTENDANCE
              </Typography>
              <br />
              <Row>
                <Col md={11}><LinearProgress value={60} variant="determinate" /></Col>
                <Col md={1}>60%</Col>
              </Row>
            </Container>
          </Paper>
          <Paper elevation={3} style={{ "marginTop": "20px" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "green" }}>
                WORKLOAD
              </Typography>
              <br />
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={events}
              />
              <br />
            </Container>
          </Paper>
          <Paper elevation={3} style={{ "marginTop": "20px", "height": "200px" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "green" }}>
                RECENT POSTS
              </Typography>
            </Container>
          </Paper>
        </Col>
        <Col md={4} style={{ "padding": "20px" }}>
          <Paper elevation={3}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "green" }}>
                QUICK LINKS
              </Typography>
              <br />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Link to="/ward/content">
                    <Button variant="outlined" color="secondary" fullWidth>
                      <Row>
                        <Col md={12} style={{ "paddingTop": "5px" }}><LibraryBooksOutlined fontSize="large" /></Col>
                        <Col md={12} style={{ "paddingTop": "5px", "color": "orange" }}>Content</Col>
                      </Row>
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" color="secondary" fullWidth>
                    <Row>
                      <Col md={12} style={{ "paddingTop": "5px" }}><AssignmentOutlined fontSize="large" /></Col>
                      <Col md={12} style={{ "paddingTop": "5px", "color": "orange" }}>Assignments</Col>
                    </Row>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" color="secondary" fullWidth>
                    <Row>
                      <Col md={12} style={{ "paddingTop": "5px" }}><QuestionAnswerOutlined fontSize="large" /></Col>
                      <Col md={12} style={{ "paddingTop": "5px", "color": "orange" }}>Quizzes</Col>
                    </Row>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Link to="/ward/grades">
                    <Button variant="outlined" color="secondary" fullWidth>
                      <Row>
                        <Col md={12} style={{ "paddingTop": "5px" }}><SpellcheckOutlined fontSize="large" /></Col>
                        <Col md={12} style={{ "paddingTop": "5px", "color": "orange" }}>Grades</Col>
                      </Row>
                    </Button>
                  </Link>
                </Grid>
              </Grid>
              <br />
            </Container>
          </Paper>
          <Paper elevation={3} style={{ "marginTop": "20px", "height": "150px" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "green" }}>
                BADGES
              </Typography>
            </Container>
          </Paper>
          <Paper elevation={3} style={{ "marginTop": "20px", "height": "400px" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "green" }}>
                COURSES
              </Typography>
              <br />
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Art" secondary="Mon, Wed, Thur" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Economics" secondary="Tue, Fri" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Sports" secondary="Mon, Fri" />
                </ListItem>
              </List>
            </Container>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
}