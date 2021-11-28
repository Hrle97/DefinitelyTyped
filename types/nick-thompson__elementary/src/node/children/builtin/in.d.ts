import { node } from "@nick-thompson/elementary";

/**
 * {@link node.InNode} {@link node.Child}ren.
 *
 * @see node.InNode
 * @see node.Child
 * @see node.EmptyChildren
 */
export type InChildren =
  | node.EmptyChildren
  | [
      /*
       * Signal to pass through.
       */
      signal: node.Child
    ];
