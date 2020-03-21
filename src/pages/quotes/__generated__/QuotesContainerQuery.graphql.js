/**
 * @flow
 * @relayHash 81097682408a06e87aa2f3605da1e8fb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type QuotesContainer_quotes$ref = any;
export type QuotesContainerQueryVariables = {|
  first?: ?number,
  after?: ?string,
|};
export type QuotesContainerQueryResponse = {|
  +$fragmentRefs: QuotesContainer_quotes$ref
|};
export type QuotesContainerQuery = {|
  variables: QuotesContainerQueryVariables,
  response: QuotesContainerQueryResponse,
|};
*/


/*
query QuotesContainerQuery(
  $first: Int
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
    "type": "Int",
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
    "name": "QuotesContainerQuery",
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
    "name": "QuotesContainerQuery",
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
    "name": "QuotesContainerQuery",
    "id": null,
    "text": "query QuotesContainerQuery(\n  $first: Int\n  $after: String\n) {\n  ...QuotesContainer_quotes\n}\n\nfragment QuoteRow_quote on Quote {\n  _id\n  text\n  createdAt\n}\n\nfragment QuotesContainer_quotes on Query {\n  quotes(first: $first, after: $after) {\n    totalCount\n    edges {\n      node {\n        ...QuotesTable_quotes\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment QuotesTable_quotes on Quote {\n  id\n  ...QuoteRow_quote\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6c998ae1a7241d68e1d80ae7006659be';
module.exports = node;
