import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { Container, Row, Col } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

export default function PostDiscussion(){
    return(
       <div>
           <Container>
               <Row>
                   <Col>
           <AccountCircleIcon fontSize="large" style={{height:'2em'}}/>
           <TextField id="filled-basic" label="Whats in your mind!" variant="filled" />
            </Col>
               <hr width="100%"/>
           
                <Col><VideocamIcon />Add File<br /><input type="file" id="myfile" name="myfile" multiple></input></Col>
                <Col><PhotoLibraryIcon />Photo/Video<input type="file" id="myfile" name="myfile" multiple></input></Col>
                </Row>
           </Container>
            
                
        </div>
    )
}