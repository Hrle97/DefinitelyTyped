import { Child } from "../children";

/**
 * SrNode children.
 */
export type SrChildren = [];

/**
 * ConstNode children.
 */
export type ConstChildren = [];

/**
 * CounterNode children.
 */
export type CounterChildren = [
  /**
   * Impulse train that controls when the counterNode is counting samples.
   */
  train: Child
];

/**
 * SelectNode children.
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
