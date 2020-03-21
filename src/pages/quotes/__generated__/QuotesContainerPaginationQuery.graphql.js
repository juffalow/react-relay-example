/**
 * @flow
 * @relayHash d0c4cc7374161ff6c031f10efba87251
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

fragment QuoteRow_quote on Quote {
  _id
  text
  createdAt
}

fragment QuotesContainer_quotes on Query {
  quotes(first: $first, after: $after) {
    totalCount
    edges {
      node {
        ...QuotesTable_quotes
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

fragment QuotesTable_quotes on Quote {
  id
  ...QuoteRow_quote
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
];
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
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
    "text": "query QuotesContainerPaginationQuery(\n  $first: Int!\n  $after: String\n) {\n  ...QuotesContainer_quotes\n}\n\nfragment QuoteRow_quote on Quote {\n  _id\n  text\n  createdAt\n}\n\nfragment QuotesContainer_quotes on Query {\n  quotes(first: $first, after: $after) {\n    totalCount\n    edges {\n      node {\n        ...QuotesTable_quotes\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment QuotesTable_quotes on Quote {\n  id\n  ...QuoteRow_quote\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b81c00147d53d8e5cad9a719b7c9b1c6';
module.exports = node;
