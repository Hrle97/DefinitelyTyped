import { KeyProps } from "../props";

/**
 * Props for el.metro.
 *
 * @see KeyProps
 */
export interface MetroProps extends KeyProps {
  /**
   * Name of the el.metro node. Default is ''.
   *
   * @see MetroProps
   */
  name?: string;

  /**
   * Interval in which the 'metro' event will be fired.
   *
   * @see MetroProps
   */
  interval?: number;
}
