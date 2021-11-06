/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import HomeContainerQuotesQuery from "./HomeContainerQuotesQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type HomeContainer_quotes = {
    readonly quotes: {
        readonly totalCount: number;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"QuotesList_quotes">;
            } | null;
        } | null> | null;
        readonly pageInfo: {
            readonly startCursor: string | null;
            readonly endCursor: string | null;
            readonly hasNextPage: boolean | null;
            readonly hasPreviousPage: boolean | null;
        };
    } | null;
    readonly " $refType": "HomeContainer_quotes";
};
export type HomeContainer_quotes$data = HomeContainer_quotes;
export type HomeContainer_quotes$key = {
    readonly " $data"?: HomeContainer_quotes$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"HomeContainer_quotes">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "quotes"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": HomeContainerQuotesQuery
    }
  },
  "name": "HomeContainer_quotes",
  "selections": [
    {
      "alias": "quotes",
      "args": null,
      "concreteType": "QuoteConnection",
      "kind": "LinkedField",
      "name": "__QuotesList_quotes_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "QuoteEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Quote",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "QuotesList_quotes"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasPreviousPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '27cae3ca48a8efae7e72a578dca9d3aa';
export default node;
