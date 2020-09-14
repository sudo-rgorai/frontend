import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { makeStyles, Tabs, Tab, Typography, Box, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Chip, ListItemIcon } from "@material-ui/core";
import { CloudDownload, Person } from "@material-ui/icons";

import RecipeReviewCard from "./ResourcePost";
import ResourceGroup from "./ResourceGroup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function CreateGroupModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a new group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Add members:</Form.Label>
          <Form.Control as="select">
            {props.formMembers.map(name => <option>{name}</option>)}
          </Form.Control>
          <br/>
          <Form.Group controlId="formGroupType">
            <Form.Check inline type="radio" name="formHorizontalRadios" label="Academic" />
            <Form.Check inline type="radio" name="formHorizontalRadios" label="Non-academic" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "35px",
  }
}));

export default function ResourceTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const handleChange = (event, newValue) => setValue(newValue);
  const onlinePeople = ['Person 2', 'Person 2', 'Person 2', 'Person 2', 'Person 2', 'Person 2', 'Person 2', 'Person 2'];
  const offlinePeople = ['Person 1', 'Person 1', 'Person 1'];

  return (
    <>
      <Typography variant='h2' gutterBottom className={classes.title}>Resources</Typography><br />
      <div className={classes.root}>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          className={classes.tabs}>
          <Tab label='Discussion' {...a11yProps(0)} />
          <Tab label='People' {...a11yProps(1)} />
          <Tab label='Groups' {...a11yProps(2)} />
          <Tab label='Files' {...a11yProps(3)} />
        </Tabs>

        <TabPanel value={value} index={0} style={{ "width": "100%" }}>
          <Row>
            <Col md={12} align="center"><Typography variant='h6' gutterBottom style={{ textAlign: "left", width: 495 }}>Posts</Typography><br /></Col>
            <Col md={12} align="center"><RecipeReviewCard /><br /></Col>
            <Col md={12} align="center"><RecipeReviewCard /><br /></Col>
          </Row>
        </TabPanel>

        <TabPanel value={value} index={1} style={{ "width": "100%" }}>
          <Typography variant='h6' gutterBottom>People</Typography><br />
          <Row>
            <Col md={6}>
              <h2 style={{ fontSize: "15px" }}>
                Online <Chip label='8' />
              </h2>
              <List>
                {onlinePeople.map(name =>
                  <ListItem>
                    <ListItemIcon><Person /></ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItem>
                )}
              </List>
              <br />
            </Col>
            <Col md={6}>
              <h2 style={{ fontSize: "15px" }}>
                Offline <Chip label='3' />
              </h2>
              <List>
                {offlinePeople.map(name =>
                  <ListItem>
                    <ListItemIcon><Person /></ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItem>
                )}
              </List>
              <br />
            </Col>
          </Row>
        </TabPanel>

        <TabPanel value={value} index={2} style={{ "width": "100%" }}>
          <Row>
            <Col md={6}>
              <Typography variant='h6' gutterBottom>Groups</Typography><br />
            </Col>
            <Col md={6} align="right">
              <Button variant="secondary" onClick={() => setModalShow(true)}>
                Create Group
              </Button>
            </Col>
          </Row>
          <ResourceGroup groupType="Academic" />
          <br />
          <ResourceGroup groupType="Non-academic" />
          <br />
          <CreateGroupModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            formMembers={offlinePeople.concat(onlinePeople)}
          />
        </TabPanel>

        <TabPanel value={value} index={3} style={{ "width": "100%" }}>
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
        </TabPanel>
      </div>
    </>
  );
}
