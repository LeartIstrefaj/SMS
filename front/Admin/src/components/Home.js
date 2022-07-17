import React, { Component } from 'react';


export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { countt: [] }
    }

    refreshList() {
        fetch('http://localhost:36468/api/category/GetAllCountCategory')
            .then(response => response.json())
            .then(data => {
                this.setState({ countt: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { countt } = this.state;
        
        return (
            <div className='sections'>
                <br/>
                <br/>
                <div className='container d-flex justify-content-center'>

                     <div className='col-4'>
                        <div className='box-admin me-4'>
                            <h4 className='text-dark pt-4'>Categories</h4>
                            {countt.map((count) => (
                                <p key={count.CategoryId}>{count.CategoryId}</p>
                            ))}
                            <p className='p-dashboard'>3</p>

                        </div>
                   </div>
                   <div className='col-4'>
                   <div className='box-admin me-4'>
                            <h4 className='text-dark pt-4'>Products</h4>
                            <p className='p-dashboard'>50</p>
                            {/* <h3 className='text-dark'>Items</h3> */}
                        </div>
                   </div>
                   <div className='col-4'>
                   <div className='box-admin me-4'>
                            <h4 className='text-dark pt-4'>Agents</h4>
                            <p className='p-dashboard'>4</p>
                        </div>
                    </div>

               
                </div>
            </div>
        )
    }
}

// import React from "react";
// export const Home = () => {
//     return (
//         <div className="building-info">
//             <h2>Jemi duke punuar ende , do rikthehemi për pak kohë...</h2>
//         </div>
        
//     );
// }