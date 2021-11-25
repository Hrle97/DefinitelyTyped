import { KeyProps } from "../props";

/**
 * Props for el.convolve.
 *
 * @see KeyProps
 */
export interface ConvolveProps extends KeyProps {
  /**
   * Path to the file of the impulse response on disk.
   *
   * @see ConvolveProps
   */
  path?: string;
}
