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
        <Modal.Title className='ms-auto' id="contained-modal-title-vcenter">
            Edit Agent
        </Modal.Title>
        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6} className="mx-auto">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="AgjentiId">
                        <Form.Label>AgentId</Form.Label>
                        <Form.Control type="text" name="AgjentiId" required
                        disabled
                        defaultValue={this.props.agjentiid} 
                        placeholder="AgentId"/>
                    </Form.Group>

                    <Form.Group controlId="AgjentiName">
                        <Form.Label>Agent Name</Form.Label>
                        <Form.Control type="text" name="AgjentiName" required 
                        defaultValue={this.props.agjentiname}
                        placeholder="Agent Name"/>
                    </Form.Group>

                    <Form.Group controlId="AgjentiSurname">
                        <Form.Label>Agent Surname</Form.Label>
                        <Form.Control type="text" name="AgjentiSurname" required 
                        defaultValue={this.props.agjentisurname}
                        placeholder="Agent Surname"/>
                    </Form.Group>

                    
                    <Form.Group controlId="Qyteti">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="Qyteti" required 
                        defaultValue={this.props.qyteti}
                        placeholder="City"/>
                    </Form.Group>

                    <Form.Group className='d-flex justify-content-center'>
                        <Button variant="primary" className='rounded-5' type="submit">
                            Update
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
 
</Modal>

            </div>
        )
    }

}