import React from 'react'
import Table from 'react-bootstrap/Table';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import AuthorRow from './AuthorRow';
import { Author } from '../../types/Author';

interface Props {
  authors: Array<Author>;
}

const AuthorsTable = (props: Props) => (
  <Table striped bordered responsive hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First name</th>
        <th>Last name</th>
      </tr>
    </thead>
    <tbody>
      {
        props.authors.map(author => (
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
