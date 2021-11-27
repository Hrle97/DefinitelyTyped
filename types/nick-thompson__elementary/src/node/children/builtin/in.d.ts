import { Child } from "../children";

/**
 * InNode children.
 */
export type InChildren =
  | []
  | [
      /*
       * Signal to pass through.
       */
      signal: Child
    ];
