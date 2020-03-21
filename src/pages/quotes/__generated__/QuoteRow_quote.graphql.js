/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuoteRow_quote$ref: FragmentReference;
declare export opaque type QuoteRow_quote$fragmentType: QuoteRow_quote$ref;
export type QuoteRow_quote = {|
  +_id: string,
  +text: string,
  +createdAt: string,
  +$refType: QuoteRow_quote$ref,
|};
export type QuoteRow_quote$data = QuoteRow_quote;
export type QuoteRow_quote$key = {
  +$data?: QuoteRow_quote$data,
  +$fragmentRefs: QuoteRow_quote$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "QuoteRow_quote",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '984e32e213a6f61b222e7fb4893d51ce';

module.exports = node;
