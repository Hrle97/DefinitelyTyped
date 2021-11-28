import { node } from "@nick-thompson/elementary";

/**
 * {@link node.SrNode} {@link node.Props}.
 *
 * @see node.SrNode
 */
export interface SrProps extends node.KeyProps {}

/**
 * {@link node.ConstNode} {@link node.Props}.
 *
 * @see node.ConstNode
 */
export interface ConstProps extends node.KeyProps {
  /**
   * Value of the {@link node.ConstNode}.
   */
  value: number;
}

/**
 * {@link node.CounterNode} {@link node.Props}.
 *
 * @see node.CounterNode
 */
export interface CounterProps extends node.KeyProps {}

/**
 * {@link node.SelectNode} {@link node.Props}.
 *
 * @see node.SelectNode
 */
export interface SelectProps extends node.KeyProps {}
