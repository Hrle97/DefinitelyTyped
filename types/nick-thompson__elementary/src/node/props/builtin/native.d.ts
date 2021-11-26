import { KeyProps } from "../props";

/**
 * MetroNode props.
 */
export interface MetroProps extends KeyProps {
  /**
   * Name of the MetroNode.
   *
   * Default is ''.
   */
  name?: string;

  /**
   * Interval in which the 'metro' event will be fired.
   */
  interval?: number;
}

/**
 * RandNode props.
 */
export interface RandProps extends KeyProps {}
