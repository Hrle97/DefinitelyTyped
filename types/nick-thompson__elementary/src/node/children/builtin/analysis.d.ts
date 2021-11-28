import { node } from "@nick-thompson/elementary";

/**
 * {@link node.MeterNode} {@link node.Child}ren.
 *
 * @see node.MeterNode
 * @see node.Child
 */
export type MeterChildren = [
  /**
   * Signal to measure the minimum and maximum peaks of.
   */
  signal: node.Child
];
