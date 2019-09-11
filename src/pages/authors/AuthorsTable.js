import React from 'react'
import Table from 'react-bootstrap/Table';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import AuthorRow from './AuthorRow';

const AuthorsTable = ({ authors, ...rest }) => (
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
          <tr key={author.id}>
            <AuthorRow author={author} />
          </tr>
        ))
      }
    </tbody>
  </Table>
);

const AuthorsTableFragmentContainer = createFragmentContainer(AuthorsTable, {
  authors: graphql`
    fragment AuthorsTable_authors on Author @relay(plural: true) {
      id
      ...AuthorRow_author
    }
  `
});

export default AuthorsTableFragmentContainer;
