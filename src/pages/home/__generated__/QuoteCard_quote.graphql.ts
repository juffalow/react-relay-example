/**
 * @generated SignedSource<<9149708c1c5708ef708249b82f9b8776>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuoteCard_quote$data = {
  readonly _id: string;
  readonly author: {
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string;
  } | null;
  readonly text: string;
  readonly " $fragmentType": "QuoteCard_quote";
};
export type QuoteCard_quote$key = {
  readonly " $data"?: QuoteCard_quote$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteCard_quote">;
};

const node: ReaderFragment = {
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

(node as any).hash = "f2187e84ec570b51588b4702373bfc1b";

export default node;
