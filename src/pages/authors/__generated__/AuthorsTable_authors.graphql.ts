/**
 * @generated SignedSource<<1d1abdecf816fc7ee2ab860d2e0da5ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthorsTable_authors$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"AuthorRow_author">;
  readonly " $fragmentType": "AuthorsTable_authors";
}>;
export type AuthorsTable_authors$key = ReadonlyArray<{
  readonly " $data"?: AuthorsTable_authors$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuthorsTable_authors">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "AuthorsTable_authors",
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
      "name": "AuthorRow_author"
    }
  ],
  "type": "Author",
  "abstractKey": null
};

(node as any).hash = "05979f8c8b521d8dcb200fc789bd5c85";

export default node;
