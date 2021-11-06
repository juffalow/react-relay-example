/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AuthorRow_author = {
    readonly _id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly " $refType": "AuthorRow_author";
};
export type AuthorRow_author$data = AuthorRow_author;
export type AuthorRow_author$key = {
    readonly " $data"?: AuthorRow_author$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AuthorRow_author">;
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
(node as any).hash = '29d2e2c3b5e4e242afc3a32a4923d822';
export default node;
