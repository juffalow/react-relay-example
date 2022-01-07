/**
 * @generated SignedSource<<47dd10d3f999f02db4a1531a2517079c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthorRow_author$data = {
  readonly _id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly " $fragmentType": "AuthorRow_author";
};
export type AuthorRow_author = AuthorRow_author$data;
export type AuthorRow_author$key = {
  readonly " $data"?: AuthorRow_author$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuthorRow_author">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuthorRow_author",
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
  "type": "Author",
  "abstractKey": null
};

(node as any).hash = "29d2e2c3b5e4e242afc3a32a4923d822";

export default node;
