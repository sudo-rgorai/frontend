import React from 'react'
import { Row, Col } from 'react-bootstrap';
import 'react-chat-elements/dist/main.css';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, Container, Paper, Typography, List, ListItem, ListItemText, Tab, Tabs, AppBar } from "@material-ui/core";
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, CartesianGrid, Tooltip, Pie, PieChart } from "recharts";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Homepage() {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const data = [
    { name: "Test A", percent: 24 },
    { name: "Test B", percent: 13 },
    { name: "Test C", percent: 98 },
    { name: "Test D", percent: 39 },
    { name: "Test E", percent: 48 },
    { name: "Test F", percent: 38 },
    { name: "Test G", percent: 43 },
  ];
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];
  const data02 = [
    { name: "Group A", value: 240 },
    { name: "Group B", value: 456 },
    { name: "Group C", value: 139 },
    { name: "Group D", value: 980 },
    { name: "Group E", value: 390 },
    { name: "Group F", value: 480 },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container style={{ "marginTop": "100px" }}>
      <Paper elevation={3} style={{ paddingTop: "20px" }}>
        <Container>
          <Typography variant="h6" gutterBottom style={{ "color": "#3f51b5" }}>
            <Row>
              <Col md={8}>Quick Announcements</Col>
              <Col md={4} align='right'>
                <AppBar position="static" color="transparent" elevation={0}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                  >
                    <Tab label="For me" {...a11yProps(0)} style={{ textTransform: "none" }} />
                    <Tab label="For my children" {...a11yProps(1)} style={{ textTransform: "none" }} />
                  </Tabs>
                </AppBar>
              </Col>
            </Row>
          </Typography>


          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <List dense={true} disablePadding={true}>
                <ListItem button={true}>
                  <ListItemText
                    button={true}
                    primary="Hey this is me!"
                    secondary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, sequi eos blanditiis vero culpa quis ex quae quisquam."
                  />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText
                    button={true}
                    primary="Hey this is me!"
                    secondary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, sequi eos blanditiis vero culpa quis ex quae quisquam, a dolore itaque error? Iste libero ab recusandae exercitationem beatae. Repellat, itaque."
                  />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText
                    button={true}
                    primary="Hey this is me!"
                    secondary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, sequi eos blanditiis vero culpa quis ex quae quisquam."
                  />
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <List dense={true} disablePadding={true}>
                <ListItem button={true}>
                  <ListItemText
                    button={true}
                    primary="Hey this is me!"
                    secondary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, sequi eos blanditiis vero culpa quis ex quae quisquam, a dolore itaque error? Iste libero ab recusandae exercitationem beatae. Repellat, itaque."
                  />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText
                    button={true}
                    primary="Hey this is me!"
                    secondary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, sequi eos blanditiis vero culpa quis ex quae quisquam."
                  />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText
                    button={true}
                    primary="Hey this is me!"
                    secondary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, sequi eos blanditiis vero culpa quis ex quae quisquam, a dolore itaque error? Iste libero ab recusandae exercitationem beatae. Repellat, itaque."
                  />
                </ListItem>
              </List>
            </TabPanel>
          </SwipeableViews>
          <br />
        </Container>
      </Paper>
      <br />
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant='h6' gutterBottom style={{ color: "teal" }}>
          Test-wise marks
				    </Typography>
        <br />
        <ResponsiveContainer height={300}>
          <BarChart data={data} barCategoryGap='45%'>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='percent' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
        <br />
      </Paper>
      <br />
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant='h6' gutterBottom style={{ color: "teal" }}>
          Overall
				    </Typography>
        <Row>
          <Col md={4} align='center'>
            <PieChart width={250} height={250}>
              <Tooltip />
              <Pie
                data={data01}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                outerRadius={50}
                fill='#8884d8'
              />
              <Pie
                data={data02}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                innerRadius={60}
                outerRadius={80}
                fill='#82ca9d'
              />
            </PieChart>
						Quizzes
					</Col>
          <Col md={4} align='center'>
            <PieChart width={250} height={250}>
              <Tooltip />
              <Pie
                data={data01}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                outerRadius={50}
                fill='#8884d8'
              />
              <Pie
                data={data02}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                innerRadius={60}
                outerRadius={80}
                fill='#82ca9d'
              />
            </PieChart>
						Lessons
					</Col>
          <Col md={4} align='center'>
            <PieChart width={250} height={250}>
              <Tooltip />
              <Pie
                data={data01}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                outerRadius={50}
                fill='#8884d8'
              />
              <Pie
                data={data02}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                innerRadius={60}
                outerRadius={80}
                fill='#82ca9d'
              />
            </PieChart>
						Assignments
					</Col>
        </Row>
        <br />
      </Paper>
      <br />
    </Container>
  );
}