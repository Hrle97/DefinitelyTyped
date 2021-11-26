import { KeyProps } from "../props";

/**
 * SrNode props.
 */
export interface SrProps extends KeyProps {}

/**
 * ConstNode props.
 */
export interface ConstProps extends KeyProps {
  /**
   * Value of the ConstNode.
   */
  value: number;
}

/**
 * CounterNode props.
 */
export interface CounterProps extends KeyProps {}

/**
 * SelectNode props.
 */
export interface SelectProps extends KeyProps {}
