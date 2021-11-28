import { node } from "@nick-thompson/elementary";

/**
 * {@link node.InNode} {@link node.Props}.
 *
 * @see node.InNode
 */
export type InProps = node.KeyProps &
  (
    | {
        /**
         * Input channel of the {@link node.InNode}.
         */
        channel?: number;
      }
    | {}
  );
