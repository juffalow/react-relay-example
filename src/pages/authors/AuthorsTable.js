import React from 'react'
import Table from 'react-bootstrap/Table';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const AuthorRow = ({ author }) => (
  <>
    <td>{author._id}</td>
    <td>{author.firstName}</td>
    <td>{author.lastName}</td>
  </>
);

const AuthorRowFragmentContainer = createFragmentContainer(AuthorRow, {
  author: graphql`
     fragment AuthorsTable_author on Author {
        _id
        firstName
        lastName
     }
  `
});

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
            <AuthorRowFragmentContainer author={author} />
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
      ...AuthorsTable_author
    }
  `
});

export default AuthorsTableFragmentContainer;
