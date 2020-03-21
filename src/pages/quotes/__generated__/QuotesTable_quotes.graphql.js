/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type QuoteRow_quote$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuotesTable_quotes$ref: FragmentReference;
declare export opaque type QuotesTable_quotes$fragmentType: QuotesTable_quotes$ref;
export type QuotesTable_quotes = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: QuoteRow_quote$ref,
  +$refType: QuotesTable_quotes$ref,
|}>;
export type QuotesTable_quotes$data = QuotesTable_quotes;
export type QuotesTable_quotes$key = $ReadOnlyArray<{
  +$data?: QuotesTable_quotes$data,
  +$fragmentRefs: QuotesTable_quotes$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "QuotesTable_quotes",
  "type": "Quote",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "QuoteRow_quote",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ea43b2e9640102c277f80276d9fdd72f';
module.exports = node;
