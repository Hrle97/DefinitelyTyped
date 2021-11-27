import { Child, EmptyChildren } from "../children";

/**
 * ZNode children.
 *
 * @see EmptyChildren
 */
export type ZChildren = EmptyChildren;

/**
 * TapOutNode children.
 *
 * @see Child
 */
export type TapOutChildren = [
  /**
   * Signal to use in a TapInNode.
   */
  signal: Child
];

/**
 * TapInNode children.
 *
 * @see EmptyChildren
 */
export type TapInChildren = EmptyChildren;

/**
 * DelayNode children.
 *
 * @see Child
 */
export type DelayChildren = [
  /**
   * Signal to delay.
   */
  signal: Child
];
