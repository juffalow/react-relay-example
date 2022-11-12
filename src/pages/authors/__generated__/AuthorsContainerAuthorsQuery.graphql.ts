/**
 * @generated SignedSource<<6ca4efcd0f2c72b3cd27e64a7975d5da>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthorsOrderField = "CREATED_AT" | "FIRST_NAME" | "ID" | "LAST_NAME" | "%future added value";
export type Direction = "ASC" | "DESC" | "%future added value";
export type AuthorsOrder = {
  direction: Direction;
  field: AuthorsOrderField;
};
export type AuthorsContainerAuthorsQuery$variables = {
  after?: string | null;
  first?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  orderBy?: ReadonlyArray<AuthorsOrder | null> | null;
};
export type AuthorsContainerAuthorsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AuthorsContainer_authors">;
};
export type AuthorsContainerAuthorsQuery = {
  response: AuthorsContainerAuthorsQuery$data;
  variables: AuthorsContainerAuthorsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "firstName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "lastName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy"
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
  },
  {
    "kind": "Variable",
    "name": "firstName",
    "variableName": "firstName"
  },
  {
    "kind": "Variable",
    "name": "lastName",
    "variableName": "lastName"
  },
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "orderBy"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorsContainerAuthorsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AuthorsContainer_authors"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthorsContainerAuthorsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AuthorConnection",
        "kind": "LinkedField",
        "name": "authors",
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
            "concreteType": "AuthorEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Author",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
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
                    "name": "firstName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lastName",
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
        "args": (v1/*: any*/),
        "filters": [
          "firstName",
          "lastName",
          "orderBy"
        ],
        "handle": "connection",
        "key": "AuthorsTable_authors",
        "kind": "LinkedHandle",
        "name": "authors"
      }
    ]
  },
  "params": {
    "cacheID": "987ceff9cfbff864c08ba19027c03279",
    "id": null,
    "metadata": {},
    "name": "AuthorsContainerAuthorsQuery",
    "operationKind": "query",
    "text": "query AuthorsContainerAuthorsQuery(\n  $after: String\n  $first: Int\n  $firstName: String\n  $lastName: String\n  $orderBy: [AuthorsOrder]\n) {\n  ...AuthorsContainer_authors\n}\n\nfragment AuthorRow_author on Author {\n  _id\n  firstName\n  lastName\n}\n\nfragment AuthorsContainer_authors on Query {\n  authors(first: $first, after: $after, firstName: $firstName, lastName: $lastName, orderBy: $orderBy) {\n    totalCount\n    edges {\n      node {\n        ...AuthorsTable_authors\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment AuthorsTable_authors on Author {\n  id\n  ...AuthorRow_author\n}\n"
  }
};
})();

(node as any).hash = "2823c569d493a26014f13aee8ffb0e33";

export default node;
