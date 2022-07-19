import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddCatModal} from '../components/AddCatModal';
import {EditCatModal} from '../components/EditCatModal';

export class Category extends Component{

    constructor(props){
        super(props);
        this.state={cats:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('http://localhost:36468/api/category')
        .then(response=>response.json())
        .then(data=>{
            this.setState({cats:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(catid){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:36468/api/category/'+catid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {cats, catid,catname}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div className='container'>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Category Id</th>
                        <th>Category Name</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cats.map(cat=>
                            <tr key={cat.CategoryId}>
                                <td>{cat.CategoryId}</td>
                                <td>{cat.CategoryName}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="warning"
    onClick={()=>this.setState({editModalShow:true,
        catid:cat.CategoryId,catname:cat.CategoryName})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDep(cat.CategoryId)}>
            Delete
        </Button>

        <EditCatModal show={this.state.editModalShow}
        onHide={editModalClose}
        catid={catid}
        catname={catname}/>
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary' className='rounded-5'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Category</Button>

                    <AddCatModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}