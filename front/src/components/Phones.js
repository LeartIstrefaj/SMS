import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { AddPhonesModal } from '../components/AddPhonesModal';
import { EditPhonesModal } from '../components/EditPhonesModal';

export class Phones extends Component {

  constructor(props) {
    super(props);
    this.state = { phoness: [], addModalShow: false, editModalShow: false }
  }

  refreshList() {
    fetch('http://localhost:36468/api/smartphone')
      .then(response => response.json())
      .then(data => {
        this.setState({ phoness: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deletePhones(phid) {
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:36468/api/smartphone/' + phid, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }

  render() {
    const { phoness, phoneid, phonename, imei, price, type } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className='container'>
        <br />
        <b />
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Phone ID</th>
              <th>Phone Name</th>
              <th>IMEI</th>
              <th>Price</th>
              <th>Type</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {phoness.map(phones =>
              <tr key={phones.PhoneId}>
                <td>{phones.PhoneId}</td>
                <td>{phones.PhoneName}</td>
                <td>{phones.Imei}</td>
                <td>{phones.Price}</td>
                <td>{phones.Type}</td>
                <td>
                  <ButtonToolbar>
                    <Button className="mr-2" variant="warning"
                      onClick={() => this.setState({
                        editModalShow: true,
                        phoneid: phones.PhoneId, phonename: phones.PhoneName, imei: phones.Imei, price: phones.Price, type: phones.Type,
                      })}>
                      Edit
                    </Button>

                    <Button className="mr-2" variant="danger"
                      onClick={() => this.deletePhones(phones.PhoneId)}>
                      Delete
                    </Button>

                    <EditPhonesModal show={this.state.editModalShow}
                      onHide={editModalClose}
                      phoneid={phoneid}
                      phonename={phonename}
                      imei={imei}
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
            Add Phones</Button>

          <AddPhonesModal show={this.state.addModalShow}
            onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    )
  }
}

export default Phones;