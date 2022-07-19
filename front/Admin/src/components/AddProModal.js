import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddProModal extends Component{
    constructor(props){
        super(props);
        this.state={cats:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    // photofilename = "anonymous.png";
    // imagesrc = 'http://localhost:36468/api/Photos/'+this.photofilename;

    componentDidMount(){
        fetch('http://localhost:36468/api/category')
        .then(response=>response.json())
        .then(data=>{
            this.setState({cats:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:36468/api/product',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                // ProductId:null,
                ProductName:event.target.ProductName.value,
                Category:event.target.Category.value,
                DateOfJoining:event.target.DateOfJoining.value,
                // PhotoFileName:this.photofilename

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


    // handleFileSelected(event){
    //     event.preventDefault();
    //     this.photofilename=event.target.files[0].name;
    //     const formData = new FormData();
    //     formData.append(
    //         "myFile",
    //         event.target.files[0],
    //         event.target.files[0].name
    //     );

    //     fetch('http://localhost:36468/api/product/savefile',{
    //         method:'POST',
    //         body:formData
    //     })
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         this.imagesrc='http://localhost:36468/api/Photos/'+result;
    //     },
    //     (error)=>{
    //         alert('Failed');
    //     })
        
    // }

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
            Add Product
        </Modal.Title>
        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6} className="mx-auto">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="ProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="ProductName" required 
                        placeholder="Product Name"/>
                    </Form.Group>

                    <Form.Group controlId="Category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select">
                        {this.state.cats.map(cat=>
                            <option key={cat.CategoryId}>{cat.CategoryName}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="DateOfJoining">
                        <Form.Label>Date Of Joining</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DateOfJoining"
                        required
                        placeholder="Date Of Joining"
                        />
                       
                        
                    </Form.Group>

                    <Form.Group className='d-flex justify-content-center'>
                        <Button variant="primary" className='rounded-5' type="submit">
                            Done
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            {/* <Col sm={6}>
                <Image width="200px" height="200px" src={this.imagesrc}/>
                <input onChange={this.handleFileSelected} type="File"/>
            </Col> */}
        </Row>
    </Modal.Body>
   

</Modal>

            </div>
        )
    }

}