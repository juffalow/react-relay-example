export default `// QuotesContainer.js
const QuotesList = createPaginationContainer(
  // instead of using directly the component where the data
  // will be used, I use render prop
  (props) => (props.render(props.query, props.relay)),
  // the name of the fragment must be prefixed by
  // the name of the component (filename)
  graphql\`
  fragment QuotesContainer_query on Query {
    <fragment code>
  }
  \`,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      /* code */
    },
    getFragmentVariables(prevVars, totalCount) {
     /* code */
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      /* code */
    },
    query: graphql\`
      query QuotesContainerPaginationQuery(
        $first: Int!
        $after: ID
      ) {
        ...QuotesContainer_query
      }
    \`
  }
);

export default ({ render }) => (
  <QueryRenderer
    environment={environment}
    query={graphql\`
      query QuotesContainerQuery($first: Int!, $after: ID) {
        ...QuotesContainer_query
      }
    \`}
    variables={{ first: 9, after: null }}
    render={({error, props}) => {

      if (!props) {
        return ( <p>Loading...</p> );
      }

      return (
        <QuotesList query={props} render={render} />
      );
    }}
  />
);
`