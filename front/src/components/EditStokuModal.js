import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditStokuModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:36468/api/stoku',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StokuId:event.target.StokuId.value,
                EmriProduktit:event.target. EmriProduktit.value,
                SasiaEProduktit:event.target.SasiaEProduktit.value,
                Vlera:event.target.Vlera.value

            })
        })
        .then(stoku=>stoku.json())
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
            Edit Stoku
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="StokuId">
                        <Form.Label>Stoku Id</Form.Label>
                        <Form.Control type="text" name="StokuId" required
                        disabled
                        defaultValue={this.props.stokuid} 
                        placeholder="Stoku Id"/>
                    </Form.Group>

                    <Form.Group controlId="EmriProduktit">
                        <Form.Label>Emri i Produktit</Form.Label>
                        <Form.Control type="text" name="EmriProduktit" required 
                        defaultValue={this.props.productname}
                        placeholder="Emri I Produktit"/>
                    </Form.Group>

                    <Form.Group controlId="SasiaEProduktit">
                        <Form.Label>Sasia e Produktit</Form.Label>
                        <Form.Control type="text" name="SasiaEProduktit" required 
                        defaultValue={this.props.sasia}
                        placeholder="Sasia E Produktit"/>
                    </Form.Group>

                    
                    <Form.Group controlId="Vlera">
                        <Form.Label>Vlera</Form.Label>
                        <Form.Control type="text" name="Vlera" required 
                        defaultValue={this.props.vlera}
                        placeholder="Vlera"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Stoku
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