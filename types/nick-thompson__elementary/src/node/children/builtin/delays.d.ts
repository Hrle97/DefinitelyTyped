import { node } from "@nick-thompson/elementary";

/**
 * {@link node.ZNode} {@link node.Child}ren.
 *
 * @see node.ZNode
 * @see node.EmptyChildren
 */
export type ZChildren = node.EmptyChildren;

/**
 * {@link node.TapOutNode} {@link node.Child}ren.
 *
 * @see node.TapOutNode
 * @see node.Child
 */
export type TapOutChildren = [
  /**
   * Signal to use in a {@link node.TapInNode}.
   */
  signal: node.Child
];

/**
 * {@link node.TapInNode} {@link node.Child}ren.
 *
 * @see node.TapInNode
 * @see node.EmptyChildren
 */
export type TapInChildren = node.EmptyChildren;

/**
 * {@link node.DelayNode} {@link node.Child}ren.
 *
 * @see node.DelayNode
 * @see node.Child
 */
export type DelayChildren = [
  /**
   * Signal to delay.
   */
  signal: node.Child
];
