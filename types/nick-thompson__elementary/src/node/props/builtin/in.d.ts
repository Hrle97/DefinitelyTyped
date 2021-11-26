import { KeyProps } from "../props";

/**
 * InNode props.
 */
export type InProps = KeyProps &
  (
    | {
        /**
         * Input channel of the InNode.
         */
        channel?: number;
      }
    | {}
  );
