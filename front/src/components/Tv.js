import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddTvModal } from '../components/AddTvModal';
import { EditTvModal } from '../components/EditTvModal';

export class Tv extends Component {

  constructor(props) {
    super(props);
    this.state = { tvv: [], addModalShow: false, editModalShow: false }
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

  deleteTv(tid) {
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:36468/api/tv/' + tid, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }

  render() {
    const { tvv, tvid, tvname, serialkey, price, type } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className='container'>
        <br />
        <b />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>TV ID</th>
              <th>TV Name</th>
              <th>Serial Key</th>
              <th>Price</th>
              <th>Type</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {tvv.map(tv =>
              <tr key={tv.TvId}>
                <td>{tv.TvId}</td>
                <td>{tv.TvName}</td>
                <td>{tv.SerialKey}</td>
                <td>{tv.Price}</td>
                <td>{tv.Type}</td>
                <td>
                  <ButtonToolbar>
                    <Button className="mr-2" variant="warning"
                      onClick={() => this.setState({
                        editModalShow: true,
                        tvid: tv.TvId, tvname: tv.TvName, serialkey: tv.SerialKey, price: tv.Price, type: tv.Type,
                      })}>
                      Edit
                    </Button>

                    <Button className="mr-2" variant="danger"
                      onClick={() => this.deleteTv(tv.TvId)}>
                      Delete
                    </Button>

                    <EditTvModal show={this.state.editModalShow}
                      onHide={editModalClose}
                      tvid={tvid}
                      tvname={tvname}
                      serialkey={serialkey}
                      price={price}
                      type={type} />
                  </ButtonToolbar>

                </td>

              </tr>)}
          </tbody>

        </Table>

        <ButtonToolbar>
          <Button variant='primary'
            onClick={() => this.setState({ addModalShow: true })}>
            Add TVs</Button>

          <AddTvModal show={this.state.addModalShow}
            onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    )
  }
}

export default Tv;