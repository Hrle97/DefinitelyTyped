import { Child } from "../children";

/**
 * ZNode children.
 */
export type ZChildren = [];

/**
 * TapOutNode children.
 */
export type TapOutChildren = [
  /**
   * Signal to use in a TapInNode.
   */
  signal: Child
];

/**
 * TapInNode children.
 */
export type TapInChildren = [];

/**
 * DelayNode children.
 */
export type DelayChildren = [
  /**
   * Signal to delay.
   */
  signal: Child
];
