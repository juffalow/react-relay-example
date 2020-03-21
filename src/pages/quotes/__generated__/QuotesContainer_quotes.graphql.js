/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type QuotesTable_quotes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuotesContainer_quotes$ref: FragmentReference;
declare export opaque type QuotesContainer_quotes$fragmentType: QuotesContainer_quotes$ref;
export type QuotesContainer_quotes = {|
  +quotes: ?{|
    +totalCount: number,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: QuotesTable_quotes$ref
      |}
    |}>,
    +pageInfo: {|
      +startCursor: ?string,
      +endCursor: ?string,
      +hasNextPage: ?boolean,
      +hasPreviousPage: ?boolean,
    |},
  |},
  +$refType: QuotesContainer_quotes$ref,
|};
export type QuotesContainer_quotes$data = QuotesContainer_quotes;
export type QuotesContainer_quotes$key = {
  +$data?: QuotesContainer_quotes$data,
  +$fragmentRefs: QuotesContainer_quotes$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "QuotesContainer_quotes",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "quotes"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "first",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "after",
      "type": "String"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "quotes",
      "name": "__QuotesList_quotes_connection",
      "storageKey": null,
      "args": null,
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
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "QuotesTable_quotes",
                  "args": null
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '831976b0be540f6f415698133321879a';

module.exports = node;
