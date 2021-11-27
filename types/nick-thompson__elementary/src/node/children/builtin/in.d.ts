import { Child, EmptyChildren } from "../children";

/**
 * InNode children.
 *
 * @see Child
 * @see EmptyChildren
 */
export type InChildren =
  | EmptyChildren
  | [
      /*
       * Signal to pass through.
       */
      signal: Child
    ];
