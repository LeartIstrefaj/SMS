import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditCatModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:36468/api/category',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                CategoryId:event.target.CategoryId.value,
                CategoryName:event.target.CategoryName.value
            })
        })
        .then(category=>category.json())
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
            Edit Category
        </Modal.Title>
        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6} className="mx-auto">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="CategoryId">
                        <Form.Label>Category Id</Form.Label>
                        <Form.Control type="text" name="CategoryId" required
                        disabled
                        defaultValue={this.props.catid} 
                        placeholder="Category Id"/>
                    </Form.Group>

                    <Form.Group controlId="CategoryName">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" name="CategoryName" required 
                        defaultValue={this.props.catname}
                        placeholder="Category Name"/>
                    </Form.Group>

                    <Form.Group className='d-flex justify-content-center'>
                        <Button variant="primary" className="rounded-5" type="submit">
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