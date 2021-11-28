import { node } from "@nick-thompson/elementary";

/**
 * {@link node.MeterNode} {@link node.Props}.
 */
export interface MeterProps extends node.KeyProps {
  /**
   * Name of the {@link node.MeterNode}.
   * Default is ''.
   */
  name?: string;
}
