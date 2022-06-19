import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddProModal} from '../components/AddProModal';
import {EditProModal} from '../components/EditProModal';

export class Product extends Component{

    constructor(props){
        super(props);
        this.state={pros:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('http://localhost:36468/api/product')
        .then(response=>response.json())
        .then(data=>{
            this.setState({pros:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(proid){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:36468/api/product/'+proid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {pros, proid,proname,catmt,photofilename,doj}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div className='container'>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ProduktiId</th>
                        <th>Emri i Produktit</th>
                        <th>Kategoria</th>
                        <th>Data e skanimit</th>
                        <th>Mundesitë</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pros.map(pro=>
                            <tr key={pro.ProductId}>
                                <td>{pro.ProductId}</td>
                                <td>{pro.ProductName}</td>
                                <td>{pro.Category}</td>
                                <td>{pro.DateOfJoining}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="warning"
    onClick={()=>this.setState({editModalShow:true,
        proid:pro.ProductId,proname:pro.ProductName,catmt:pro.Category,
        photofilename:pro.PhotoFileName,doj:pro.DateOfJoining})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteEmp(pro.ProductId)}>
            Delete
        </Button>

        <EditProModal show={this.state.editModalShow}
        onHide={editModalClose}
        proid={proid}
        proname={proname}
        catmt={catmt}
        photofilename={photofilename}
        doj={doj}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Product</Button>

                    <AddProModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}