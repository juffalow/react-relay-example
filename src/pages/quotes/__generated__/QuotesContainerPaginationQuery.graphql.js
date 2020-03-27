/**
 * @flow
 * @relayHash 4f4e6e6b0618479a31cb787b0dae0b5d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type QuotesContainer_quotes$ref = any;
export type QuotesContainerPaginationQueryVariables = {|
  first: number,
  after?: ?string,
|};
export type QuotesContainerPaginationQueryResponse = {|
  +$fragmentRefs: QuotesContainer_quotes$ref
|};
export type QuotesContainerPaginationQuery = {|
  variables: QuotesContainerPaginationQueryVariables,
  response: QuotesContainerPaginationQueryResponse,
|};
*/


/*
query QuotesContainerPaginationQuery(
  $first: Int!
  $after: String
) {
  ...QuotesContainer_quotes
}

fragment QuoteCard_quote on Quote {
  _id
  text
  author {
    id
    firstName
    lastName
  }
}

fragment QuotesContainer_quotes on Query {
  quotes(first: $first, after: $after) {
    totalCount
    edges {
      node {
        ...QuotesList_quotes
        id
        __typename
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}

fragment QuotesList_quotes on Quote {
  id
  ...QuoteCard_quote
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QuotesContainerPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "QuotesContainer_quotes",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QuotesContainerPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "quotes",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "QuoteConnection",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "QuoteEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Quote",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "text",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "author",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Author",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "firstName",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lastName",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "quotes",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "QuotesList_quotes",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "QuotesContainerPaginationQuery",
    "id": null,
    "text": "query QuotesContainerPaginationQuery(\n  $first: Int!\n  $after: String\n) {\n  ...QuotesContainer_quotes\n}\n\nfragment QuoteCard_quote on Quote {\n  _id\n  text\n  author {\n    id\n    firstName\n    lastName\n  }\n}\n\nfragment QuotesContainer_quotes on Query {\n  quotes(first: $first, after: $after) {\n    totalCount\n    edges {\n      node {\n        ...QuotesList_quotes\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment QuotesList_quotes on Quote {\n  id\n  ...QuoteCard_quote\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b81c00147d53d8e5cad9a719b7c9b1c6';

module.exports = node;
