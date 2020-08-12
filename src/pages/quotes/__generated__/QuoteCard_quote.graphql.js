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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuoteCard_quote",
  "selections": [
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
    }
  ],
  "type": "Quote",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'f2187e84ec570b51588b4702373bfc1b';

module.exports = node;
