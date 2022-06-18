import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditAgjentiModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:36468/api/agjenti',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                AgjentiId:event.target.AgjentiId.value,
                AgjentiName:event.target.AgjentiName.value,
                AgjentiSurname:event.target.AgjentiSurname.value,
                Qyteti:event.target.Qyteti.value

            })
        })
        .then(agjenti=>agjenti.json())
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
            Edit Agjenti
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="AgjentiId">
                        <Form.Label>AgjentiId</Form.Label>
                        <Form.Control type="text" name="AgjentiId" required
                        disabled
                        defaultValue={this.props.agjentiid} 
                        placeholder="AgjentiId"/>
                    </Form.Group>

                    <Form.Group controlId="AgjentiName">
                        <Form.Label>AgjentiName</Form.Label>
                        <Form.Control type="text" name="AgjentiName" required 
                        defaultValue={this.props.agjentiname}
                        placeholder="AgjentiName"/>
                    </Form.Group>

                    <Form.Group controlId="AgjentiSurname">
                        <Form.Label>AgjentiSurname</Form.Label>
                        <Form.Control type="text" name="AgjentiSurname" required 
                        defaultValue={this.props.agjentisurname}
                        placeholder="AgjentiSurname"/>
                    </Form.Group>

                    
                    <Form.Group controlId="Qyteti">
                        <Form.Label>Qyteti</Form.Label>
                        <Form.Control type="text" name="Qyteti" required 
                        defaultValue={this.props.qyteti}
                        placeholder="Qyteti"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Agjenti
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