import { Child, EmptyChildren } from "../children";

/**
 * SrNode children.
 *
 * @see EmptyChildren
 */
export type SrChildren = EmptyChildren;

/**
 * ConstNode children.
 *
 * @see EmptyChildren
 */
export type ConstChildren = EmptyChildren;

/**
 * CounterNode children.
 *
 * @see Child
 */
export type CounterChildren = [
  /**
   * Impulse train that controls when the counterNode is counting samples.
   */
  train: Child
];

/**
 * SelectNode children.
 *
 * @see Child
 */
export type SelectChildren = [
  /**
   * Signal that controls whether to return the on or off signal.
   */
  gate: Child,

  /**
   * Signal to return when the gate is high.
   */
  on: Child,

  /**
   * Signal to return when the gate is low.
   */
  off: Child
];
