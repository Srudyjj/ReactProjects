import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      });
    } catch (e) {
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      });
    }

  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (

      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3" >
              <h4>{contact.name}{' '} <i onClick={(e) => {
                this.setState({ showContactInfo: !this.state.showContactInfo })
              }} className="fas fa-angle-down" ></i>
                <i className="fas fa-times" style={{ float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)} />
                <Link to={`/edit/${contact.id}`}>
                  <i className="fas fa-pencil-alt" style={{
                    float: 'right',
                    color: 'black',
                    marginRight: '1rem'
                  }}></i>
                </Link>
              </h4>
              {
                showContactInfo ? (<ul className="list-group">
                  <li className="list-group-item" >Email: {contact.email}</li>
                  <li className="list-group-item" >Phone: {contact.phone}</li>
                </ul>) : null
              }
            </div >
          )
        }}
      </Consumer>


    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;