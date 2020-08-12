/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type QuotesList_quotes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuotesContainer_quotes$ref: FragmentReference;
declare export opaque type QuotesContainer_quotes$fragmentType: QuotesContainer_quotes$ref;
export type QuotesContainer_quotes = {|
  +quotes: ?{|
    +totalCount: number,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: QuotesList_quotes$ref
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
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
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
  "name": "QuotesContainer_quotes",
  "selections": [
    {
      "alias": "quotes",
      "args": null,
      "concreteType": "QuoteConnection",
      "kind": "LinkedField",
      "name": "__QuotesList_quotes_connection",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "QuotesList_quotes"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '066eb97399f9dbf9006b65b630ca97d9';

module.exports = node;
