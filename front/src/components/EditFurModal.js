import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditFurModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:36468/api/furnitori',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                FurnitoriId:event.target.FurnitoriId.value,
                EmriFurnitorit:event.target.EmriFurnitorit.value,
                QytetiOperimit:event.target.QytetiOperimit.value
            })
        })
        .then(fur=>fur.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Furnitori
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="FurnitoriId">
                        <Form.Label>FurnitoriId</Form.Label>
                        <Form.Control type="text" name="FurnitoriId" required
                        disabled
                        defaultValue={this.props.furid} 
                        placeholder="Emri i Furnitorit"/>
                    </Form.Group>

                    <Form.Group controlId="EmriFurnitorit ">
                        <Form.Label>Emri i Furnitorit </Form.Label>
                        <Form.Control type="text" name="EmriFurnitorit " required 
                        defaultValue={this.props.furname}
                        placeholder="Emri i Furnitorit "/>
                    </Form.Group>

                    <Form.Group controlId="QytetiOperimit ">
                        <Form.Label>Qyteti Operimit</Form.Label>
                        <Form.Control type="text" name="QytetiOperimit " required 
                        defaultValue={this.props.qytetio}
                        placeholder="Qyteti Operimit "/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Furnitori
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}