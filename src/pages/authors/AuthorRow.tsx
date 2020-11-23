import React from 'react'
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Author } from '../../types/Author';

interface Props {
  author: Author;
}

const AuthorRow = ({ author }: Props) => (
  <>
    <td>{author._id}</td>
    <td>{author.firstName}</td>
    <td>{author.lastName}</td>
  </>
);

const AuthorRowFragmentContainer = createFragmentContainer(AuthorRow, {
  author: graphql`
     fragment AuthorRow_author on Author {
        _id
        firstName
        lastName
     }
  `
});

export default AuthorRowFragmentContainer;
