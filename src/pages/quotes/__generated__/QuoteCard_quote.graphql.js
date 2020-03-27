/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuoteCard_quote$ref: FragmentReference;
declare export opaque type QuoteCard_quote$fragmentType: QuoteCard_quote$ref;
export type QuoteCard_quote = {|
  +_id: string,
  +text: string,
  +author: ?{|
    +id: string,
    +firstName: string,
    +lastName: string,
  |},
  +$refType: QuoteCard_quote$ref,
|};
export type QuoteCard_quote$data = QuoteCard_quote;
export type QuoteCard_quote$key = {
  +$data?: QuoteCard_quote$data,
  +$fragmentRefs: QuoteCard_quote$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "QuoteCard_quote",
  "type": "Quote",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f2187e84ec570b51588b4702373bfc1b';

module.exports = node;
