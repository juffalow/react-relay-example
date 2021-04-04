import Table from 'react-bootstrap/Table';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import AuthorRow from './AuthorRow';
import { Author } from '../../types/Author';

interface Props {
  authors: Array<Author>;
}

const AuthorsTable = (props: Props) => {
  const authors = useFragment<any>(
    graphql`
      fragment AuthorsTable_authors on Author @relay(plural: true) {
        id
        ...AuthorRow_author
      }`,
    props.authors
  );

  return (
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
          authors.map((author: Author) => (
            <tr key={author.id}>
              <AuthorRow author={author} />
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default AuthorsTable;
