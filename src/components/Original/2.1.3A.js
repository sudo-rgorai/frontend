import React, {useState} from 'react';

import Card1 from '../../images/card-1.png'
import Card2 from '../../images/card-2.png'
import Card3 from '../../images/card-3.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Step1.css'

export default function SimpleCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
  
   
  <div style={{padding: '5% 10%'}}>
      <div class="row" style={{textAlign:'center'}}>
        <Button variant="warning" onClick={handleShow} style={{width:'10rem'}}>
          Demo Button
        </Button>
      </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Online Reading Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      <div style={{margin: '0.2% 5%'}}>
  
  <div style={{margin: '1% 2%'}}>
  <p>Paste Link</p></div>
  <div className="row" style={{margin:'1% 5%'}}>
  <input type="text" name="text" style={{width:'100%', backgroundColor:'#e5e4e2', border:'none', borderRadius:'5px', margin:'1% 0'}}/>
  
  <button type="button" className="btn btn-light" style={{ width: '10rem', fontSize: '15px'}}>Add another link</button>
  </div>
  <div style={{margin: '1% 2%'}}>
  <p>Description(Optional)</p></div>
  <div className="row" style={{margin:'1% 5%'}}>
  <input type="text" name="text" style={{width:'100%', height:'70px', backgroundColor:'#e5e4e2', border:'none',borderRadius:'5px'}}/>
  </div>
  <div style={{margin: '0 2%'}}>
  <p>Select Applicable Batches</p></div>
        <div className="row" style={{margin:'1% 5%'}}>
      <div className="column1">
      <input type="checkbox" name="fav1" value="one"/> Batch A
      </div>
      <div className="column1">
      <input type="checkbox" name="fav1" value="one"/> Batch B
      </div>
      <div className="column1">
      <input type="checkbox" name="fav1" value="one"/> Batch C
      </div>
          
      </div>
      <div className="row" style={{margin:'1% 5%'}}>
      <div className="column1">
      <input type="checkbox" name="fav1" value="one"/> Batch D
      </div>
      <div className="column1">
      <input type="checkbox" name="fav1" value="one"/> Batch E
      </div>
      
          
      </div>
      
  </div>	
      
      
      </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="warning" onClick={handleClose}>
             Create
            </Button>
          </Modal.Footer>
        </Modal>
  
  </div>
     
  
    );
}