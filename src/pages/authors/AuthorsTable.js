import React from 'react'
import Table from 'react-bootstrap/Table';

const AuthorsTable = ({ authors }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
      {
        authors.map(author => (
          <tr key={author._id}>
            <td>{author._id}</td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

export default React.memo(AuthorsTable);
