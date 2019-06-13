export default `const Quotes = ({ quotes, hasMore, loadMore }) => (
  <Container>
    <Row>
      {
        quotes.map(quote => (
          <Col key={quote.id} md={4} style={{ marginBottom: 20 }}>
            <Quote quote={quote.quote} author={\`\u0024{quote.author.firstName} \u0024{quote.author.lastName}\`} />
          </Col>
        ))
      }
    </Row>
    <Row>
      <Col className="text-center">
        {
          hasMore ? (
            <Button onClick={loadMore}>Load more</Button>
          ) : null
        }
      </Col>
    </Row>
  </Container>
);

export default () => (
  <QuotesContainer render={(props, relay) => (
    <Quotes quotes={props.quotes.edges.map(edge => edge.node)}
      refetch={(params) => {
        relay.refetchConnection(
          9,
          error => {
            console.log(error);
          },
          params,
        );
      }}
      hasMore={relay.hasMore()}
      loadMore={() => {
        if (!relay.hasMore() || relay.isLoading()) {
          return;
        }

        relay.loadMore(
          9,
          error => {
            console.log(error);
          },
        );
      }} />
  )} />
);
`