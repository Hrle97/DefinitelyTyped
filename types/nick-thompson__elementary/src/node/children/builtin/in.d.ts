import { Child } from "../children";

/**
 * In node children.
 */
export type InNodeChildren =
  | []
  | [
      /*
       * Signal to pass through.
       */
      signal: Child
    ];
