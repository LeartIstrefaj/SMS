import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Tv extends Component {

  constructor(props) {
    super(props);
    this.state = { tvv: [] }
  }

  refreshList() {
    fetch('http://localhost:36468/api/tv')
      .then(response => response.json())
      .then(data => {
        this.setState({ tvv: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }


  render() {
    const { tvv } = this.state;

    return (
      <div className='sections'>
        <div className='container d-flex justify-content-center'>
          <br />
          <b />
          <Table className="mt-4 table-design" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>TV Name</th>
                <th>Serial Key</th>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tvv.map(tv =>
                <tr key={tv.TvId}>
                  <td>{tv.TvName}</td>
                  <td>{tv.SerialKey}</td>
                  <td>{tv.Type}</td>
                  <td>{tv.Price}</td>
                  

                </tr>)}
            </tbody>

          </Table>

        </div>
        </div>
    )
  }
}

export default Tv;