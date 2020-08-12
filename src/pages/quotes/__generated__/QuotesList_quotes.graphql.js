/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type QuoteCard_quote$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuotesList_quotes$ref: FragmentReference;
declare export opaque type QuotesList_quotes$fragmentType: QuotesList_quotes$ref;
export type QuotesList_quotes = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: QuoteCard_quote$ref,
  +$refType: QuotesList_quotes$ref,
|}>;
export type QuotesList_quotes$data = QuotesList_quotes;
export type QuotesList_quotes$key = $ReadOnlyArray<{
  +$data?: QuotesList_quotes$data,
  +$fragmentRefs: QuotesList_quotes$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "QuotesList_quotes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "QuoteCard_quote"
    }
  ],
  "type": "Quote",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '97b15e779b467624fd77817415eced04';

module.exports = node;
