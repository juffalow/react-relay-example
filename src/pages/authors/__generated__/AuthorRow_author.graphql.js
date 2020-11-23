/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorRow_author$ref: FragmentReference;
declare export opaque type AuthorRow_author$fragmentType: AuthorRow_author$ref;
export type AuthorRow_author = {|
  +_id: string,
  +firstName: string,
  +lastName: string,
  +$refType: AuthorRow_author$ref,
|};
export type AuthorRow_author$data = AuthorRow_author;
export type AuthorRow_author$key = {
  +$data?: AuthorRow_author$data,
  +$fragmentRefs: AuthorRow_author$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = '29d2e2c3b5e4e242afc3a32a4923d822';

module.exports = node;
