import { node, event } from "@nick-thompson/elementary";

/**
 * {@link node.MetroNode} {@link node.Props}.
 *
 * @see node.MetroNode
 */
export interface MetroProps extends node.KeyProps {
  /**
   * Name of the {@link node.MetroNode}.
   * Default is ''.
   */
  name?: string;

  /**
   * Interval in which the {@link event.MetroEvent} will be fired.
   */
  interval?: number;
}

/**
 * {@link node.RandNode} {@link node.Props}.
 *
 * @see node.RandNode
 */
export interface RandProps extends node.KeyProps {}
