import { Child } from "../children";

/**
 * Sr node children.
 */
export type SrChildren = [];

/**
 * Const node children.
 */
export type ConstChildren = [];

/**
 * Counter node children.
 */
export type CounterChildren = [
  /**
   * Impulse train that controls when the counter node is counting samples.
   */
  train: Child
];

/**
 * Select node children.
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
