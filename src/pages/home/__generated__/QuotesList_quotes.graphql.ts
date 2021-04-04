/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuotesList_quotes = ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"QuoteCard_quote">;
    readonly " $refType": "QuotesList_quotes";
}>;
export type QuotesList_quotes$data = QuotesList_quotes;
export type QuotesList_quotes$key = ReadonlyArray<{
    readonly " $data"?: QuotesList_quotes$data;
    readonly " $fragmentRefs": FragmentRefs<"QuotesList_quotes">;
}>;



const node: ReaderFragment = {
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
(node as any).hash = '97b15e779b467624fd77817415eced04';
export default node;
