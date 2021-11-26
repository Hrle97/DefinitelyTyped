import { KeyProps } from "../props";

/**
 * ZNode props.
 */
export interface ZProps extends KeyProps {}

/**
 * TapOutNode props.
 */
export interface TapOutProps extends KeyProps {
  /**
   * Name of the TapOutNode.
   */
  name: string;

  /**
   * Delay of the TapOutNode. Default is 512.
   *
   * The delay will be clamped up to the block size for performance reasons,
   * but this could change in a future release.
   */
  size?: string;
}

/**
 * TapInNode props.
 */
export interface TapInProps extends KeyProps {
  /**
   * Name of the TapOutNode that this should take the signal from.
   */
  name: string;
}

/**
 * DelayNode props.
 */
export interface DelayProps extends KeyProps {
  /**
   * Maximum delay line in samples.
   */
  size?: number;
}
