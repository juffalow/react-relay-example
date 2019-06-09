import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class AuthorsFilter extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    orderBy: [
      {
        field: 'ID',
        direction: 'ASC',
      }
    ],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOrderByChange = (event) => {
    const value = event.target.value;

    this.setState(state => {
      const orderBy = state.orderBy.map(orderBy => ({
        ...orderBy,
        field: value,
      }));

      return {
        orderBy
      };
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.state);
    this.props.refetch(this.state);
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Form.Group controlId="authorsFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="first name"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="authorsLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="last name"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="authorsOrderBy">
          <Form.Label>Order by</Form.Label>
          <Form.Control as="select" onChange={this.handleOrderByChange}>
            <option value="ID">ID</option>
            <option value="FIRST_NAME">First name</option>
            <option value="LAST_NAME">Last name</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="authorsOrderDirection">
          <Form.Control as="select" name="direction">
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}
