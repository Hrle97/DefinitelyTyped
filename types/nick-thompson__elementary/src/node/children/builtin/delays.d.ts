import { Child } from "../children";

/**
 * Z node children.
 */
export type ZChildren = [];

/**
 * TapOut node children.
 */
export type TapOutChildren = [
  /**
   * Signal to use in a TapIn node.
   */
  signal: Child
];

/**
 * TapIn node children.
 */
export type TapInChildren = [];

/**
 * Delay node children.
 */
export type DelayChildren = [
  /**
   * Signal to delay.
   */
  signal: Child
];
