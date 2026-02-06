/**
 * @generated SignedSource<<c102b3b6e300e9a5ad976c14bb44714f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuotesList_quotes$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteCard_quote">;
  readonly " $fragmentType": "QuotesList_quotes";
}>;
export type QuotesList_quotes$key = ReadonlyArray<{
  readonly " $data"?: QuotesList_quotes$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuotesList_quotes">;
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

(node as any).hash = "97b15e779b467624fd77817415eced04";

export default node;
