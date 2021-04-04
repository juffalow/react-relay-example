import React, { Suspense, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { usePaginationFragment, useLazyLoadQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import AuthorsTable from './AuthorsTable';
import Filter from './Filter';

interface Props {
  query: any;
  values: any;
}

const Authors: React.FC<Props> = (props: Props) => {
  const values = props.values;
  const { data, loadNext, hasNext, refetch } = usePaginationFragment<any, any>(
    graphql`
      fragment AuthorsContainer_authors on Query
      @refetchable(queryName: "AuthorsContainerAuthorsQuery") {
        authors (
          first: $first
          after: $after
          firstName: $firstName
          lastName: $lastName
          orderBy: $orderBy
        ) @connection(key: "AuthorsTable_authors") {
          totalCount
          edges  {
            node {
              ...AuthorsTable_authors
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }`,
    props.query
  );

  useEffect(() => {
    refetch(values);
  }, [ values ]);
  
  return (
    <>
      <AuthorsTable authors={data.authors.edges.map((edge: any) => edge.node)} />
      <Row className="mt-4 text-center">
        <Col>
          {
            hasNext &&
            <Button onClick={() => loadNext(9)}>Load more</Button>
          }
        </Col>
      </Row>
    </>
  );
}

const AuthorsContainer = () => {
  const [values, setValues] = useState({});
  const query = useLazyLoadQuery<any>(
    graphql`
      query AuthorsContainerQuery($first: Int, $after: String, $firstName: String, $lastName: String, $orderBy: [AuthorsOrder]) {
        ...AuthorsContainer_authors
      }`, {
      first: 10,
      after: null,
    });
  
  return (
    <>
      <Row className="mt-4 mb-4">
        <Col>
          <Filter onUpdate={(values: any) => setValues(values)} />
        </Col>
      </Row>
      <Suspense fallback={<p>Loading...</p>}>
        <Authors query={query} values={values} />
      </Suspense>
    </>
  );
}

export default AuthorsContainer;
