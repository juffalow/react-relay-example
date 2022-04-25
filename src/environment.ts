import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { RequestParameters } from 'relay-runtime/lib/util/RelayConcreteNode';
import { Variables } from 'relay-runtime/lib/util/RelayRuntimeTypes';

async function fetchGraphQL(params: RequestParameters, variables: Variables) {
  const response = await fetch(`${process.env.REACT_APP_GRAPHQL_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return await response.json();
}

export default new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
