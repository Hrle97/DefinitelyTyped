import { KeyProps } from "../props";

/**
 * Props for el.tapOut.
 *
 * @see KeyProps
 */
export interface TapOutProps extends KeyProps {
  /**
   * Name of the el.tapOut node.
   *
   * @see TapOutProps
   */
  name: string;

  /**
   * Delay of the el.tapOut node. Default is 512.
   *
   * The delay will be clamped up to the block size for performance reasons,
   * but this could change in a future release.
   *
   * @see TapOutProps
   */
  size?: string;
}

/**
 * Props for el.tapIn.
 *
 * @see KeyProps
 */
export interface TapInProps extends KeyProps {
  /**
   * Name of the el.tapOut node that this should take the signal from.
   *
   * @see TapOutProps
   */
  name: string;
}

/**
 * Props for el.delay.
 *
 * @see KeyProps
 */
export interface DelayProps extends KeyProps {
  /**
   * Maximum delay line in samples.
   *
   * @see DelayProps
   */
  size?: number;
}
