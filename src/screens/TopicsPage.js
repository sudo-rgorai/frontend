import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import CoursesList from "../components/CoursesList";
import CoursesListOpen from "../components/CoursesListOpen";
import TopicsDataGrid from "../components/TopicsDataGrid";
import StudentsDataGrid from "../components/StudentsDataGrid";
import AssignmentDataGrid from "../components/AssignmentDataGrid";
import DiscussionDataGrid from "../components/DiscussionDataGrid";

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "35px",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function TopicsPage() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Typography variant="h2" gutterBottom className={classes.title}>
          My Courseboard - Course Name 1
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={3}></Grid>
      <Grid container xs={12} spacing={3}>  
        <Grid item xs={3}>
        <TextField id="outlined-basic" label={<><SearchIcon />&nbsp; Search Courses...</>} variant="outlined" size="small" />
          <CoursesListOpen />
          <CoursesList />
          <CoursesList />
          <CoursesList />
          <CoursesList />
          <CoursesList />
        </Grid>
        <Grid item xs={9}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Topics" />
            <Tab label="Assignment" />
            <Tab label="Students" />
            <Tab label="Discussion Room" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <TopicsDataGrid />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AssignmentDataGrid />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <StudentsDataGrid />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <DiscussionDataGrid />
          </TabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
