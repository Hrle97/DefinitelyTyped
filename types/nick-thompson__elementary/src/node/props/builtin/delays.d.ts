import { node } from "@nick-thompson/elementary";

/**
 * {@link node.ZNode} {@link node.Props}.
 *
 * @see node.ZNode
 */
export interface ZProps extends node.KeyProps {}

/**
 * {@link node.TapOutNode} {@link node.Props}.
 *
 * @see node.TapOutNode
 */
export interface TapOutProps extends node.KeyProps {
  /**
   * Name of the {@link node.TapOutNode}.
   */
  name: string;

  /**
   * Delay of the {@link node.TapOutNode}. Default is 512.
   *
   * The delay will be clamped up to the block size for performance reasons,
   * but this could change in a future release.
   */
  size?: string;
}

/**
 * {@link node.TapInNode} {@link node.Props}.
 *
 * @see node.TapInNode
 */
export interface TapInProps extends node.KeyProps {
  /**
   * Name of the {@link node.TapOutNode} that this should take the signal
   * from.
   */
  name: string;
}

/**
 * {@link node.DelayNode} {@link node.Props}.
 *
 * @see node.DelayNode
 */
export interface DelayProps extends node.KeyProps {
  /**
   * Maximum delay line in samples.
   */
  size?: number;
}
