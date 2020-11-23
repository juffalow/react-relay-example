/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AuthorRow_author$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorsTable_authors$ref: FragmentReference;
declare export opaque type AuthorsTable_authors$fragmentType: AuthorsTable_authors$ref;
export type AuthorsTable_authors = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: AuthorRow_author$ref,
  +$refType: AuthorsTable_authors$ref,
|}>;
export type AuthorsTable_authors$data = AuthorsTable_authors;
export type AuthorsTable_authors$key = $ReadOnlyArray<{
  +$data?: AuthorsTable_authors$data,
  +$fragmentRefs: AuthorsTable_authors$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = '05979f8c8b521d8dcb200fc789bd5c85';

module.exports = node;
