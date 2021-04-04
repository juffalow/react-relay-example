import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Author } from '../../types/Author';

interface Props {
  author: Author;
}

const AuthorRow = (props: Props) => {
  const author = useFragment<any>(
    graphql`
      fragment AuthorRow_author on Author {
        _id
        firstName
        lastName
      }`,
    props.author
  );


  return (
    <>
      <td>{author._id}</td>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
    </>
  );
}

export default AuthorRow;
