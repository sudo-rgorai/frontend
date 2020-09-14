import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { ChatList, Input, Button, MessageBox } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import { Container, Paper, Typography } from "@material-ui/core";
import dummyImage from '../images/person-shape.svg';
import dummyLogo from '../images/logo.svg';

export default function Message() {

  return (
    <Container style={{ "marginTop": "100px" }}>
      <Row>
        <Col md={4} style={{ "padding": "20px" }}>
          <Paper elevation={3} style={{ minHeight: (window.innerWidth >= 900) ? "600px" : "0px" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "#3f51b5" }}>
                Contacts
              </Typography>
              <br />
              <ChatList
                className='chat-list'
                dataSource={[
                  {
                    avatar: dummyImage,
                    alt: 'Reactjs',
                    title: 'Adam',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: dummyImage,
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: dummyImage,
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: dummyImage,
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                ]} />
              <br />
            </Container>
          </Paper>
        </Col>
        <Col md={8} style={{ "padding": "20px" }}>
          <Paper elevation={3} style={{ minHeight: "600px", background: "linear-gradient(to top right, #3f2b96, #a8c0ff)", position: "relative" }}>
            <Container>
              <Typography variant="h6" gutterBottom style={{ "paddingTop": "15px", "color": "cyan" }}>
                Adam
              </Typography>
              <hr style={{ backgroundColor: "cyan" }} />
              <MessageBox
                position={'left'}
                type={'text'}
                text={'lololololol'}
              />
              <MessageBox
                position={'right'}
                type={'photo'}
                text={'react.svg'}
                data={{
                  uri: dummyLogo,
                  status: {
                    click: false,
                    loading: 0,
                  }
                }} />
              <MessageBox
                position={'right'}
                type={'text'}
                text={'https://facebook.github.io/react/img/logo.svg'}
              />
              <MessageBox
                position={'left'}
                type={'text'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
              />
              <MessageBox
                position={'right'}
                type={'text'}
                text={'npm install react-chat-elements --save'}
              />
              <div style={{ bottom: "20px", position: "absolute", width: "92%" }}>
                <Input
                  placeholder="Type here..."
                  multiline={true}
                  rightButtons={
                    <Button
                      color='white'
                      backgroundColor='black'
                      text='Send' />
                  } />
              </div>
            </Container>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
}
