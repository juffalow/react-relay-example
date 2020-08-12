/**
 * @flow
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = [
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuotesContainerPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "QuotesContainer_quotes"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "QuotesContainerPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "QuoteConnection",
        "kind": "LinkedField",
        "name": "quotes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "QuoteEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Quote",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "_id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Author",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastName",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "QuotesList_quotes",
        "kind": "LinkedHandle",
        "name": "quotes"
      }
    ]
  },
  "params": {
    "cacheID": "8d8f69ef222d8722451dcea27489010c",
    "id": null,
    "metadata": {},
    "name": "QuotesContainerPaginationQuery",
    "operationKind": "query",
    "text": "query QuotesContainerPaginationQuery(\n  $first: Int!\n  $after: String\n) {\n  ...QuotesContainer_quotes\n}\n\nfragment QuoteCard_quote on Quote {\n  _id\n  text\n  author {\n    id\n    firstName\n    lastName\n  }\n}\n\nfragment QuotesContainer_quotes on Query {\n  quotes(first: $first, after: $after) {\n    totalCount\n    edges {\n      node {\n        ...QuotesList_quotes\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment QuotesList_quotes on Quote {\n  id\n  ...QuoteCard_quote\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b81c00147d53d8e5cad9a719b7c9b1c6';

module.exports = node;
