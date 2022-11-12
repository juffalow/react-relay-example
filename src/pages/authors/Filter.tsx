import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  onUpdate: (values: any) => void;
}

const Filter: React.FC<Props> = (props: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [orderField, setOrderField] = useState('ID');
  const [orderDirection, setOrderDirection] = useState('ASC');

  const handleFirstNameChange = (e: any) => {
    const { value } = e.target;

    setFirstName(value);
    update({ firstName: value.length === 0 ? null : value });
  };

  const handleLastNameChange = (e: any) => {
    const { value } = e.target;

    setLastName(value);
    update({ lastName: value.length === 0 ? null : value });
  };

  const handleOrderFieldChange = (e: any) => {
    const { value } = e.target;

    setOrderField(value);
    update({ orderBy:[{ field: value, direction: orderDirection }] });
  };

  const handleOrderDirectionChange = (e: any) => {
    const { value } = e.target;

    setOrderDirection(value);
    update({ orderBy:[{ field: orderField, direction: value }] });
  };

  const update = (values: any) => {
    props.onUpdate({
      ...{
        firstName: firstName.length === 0 ? null : firstName,
        lastName: lastName.length === 0 ? null : lastName,
        orderBy: [{ field: orderField, direction: orderDirection }],
      }, ...values
    });
  };

  return (
    <Form>
      <Row>
        <Col>
          <FormGroup controlId="firstName">
            <Form.Label>First name:</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="lastName">
            <Form.Label>Last name:</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={lastName}
              onChange={handleLastNameChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <Row>
            <Col>
              <FormGroup controlId="orderField">
                <Form.Label>Order by:</Form.Label>
                <Form.Control as="select" placeholder="field" value={orderField} onChange={handleOrderFieldChange}>
                  <option value="ID">ID</option>
                  <option value="FIRST_NAME">FIRST_NAME</option>
                  <option value="LAST_NAME">LAST_NAME</option>
                  <option value="CREATED_AT">CREATED_AT</option>
                </Form.Control>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup controlId="orderDirection">
                <Form.Label>Sort:</Form.Label>
                <Form.Control as="select" placeholder="direction" value={orderDirection} onChange={handleOrderDirectionChange}>
                  <option value="ASC">ASC</option>
                  <option value="DESC">DESC</option>
                </Form.Control>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
