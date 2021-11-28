import { node } from "@nick-thompson/elementary";

/**
 * {@link node.SrNode} {@link node.Child}ren.
 *
 * @see node.SrNode
 * @see node.EmptyChildren
 */
export type SrChildren = node.EmptyChildren;

/**
 * {@link node.ConstNode} {@link node.Child}ren.
 *
 * @see node.ConstNode
 * @see node.EmptyChildren
 */
export type ConstChildren = node.EmptyChildren;

/**
 * {@link node.CounterNode} {@link node.Child}ren.
 *
 * @see node.CounterNode
 * @see node.Child
 */
export type CounterChildren = [
  /**
   * Impulse train that controls when samples are being counted.
   * samples.
   */
  train: node.Child
];

/**
 * {@link node.SelectNode} {@link node.Child}ren.
 *
 * @see node.SelectNode
 * @see node.Child
 */
export type SelectChildren = [
  /**
   * Signal that controls whether to return the on or off signal.
   */
  gate: node.Child,

  /**
   * Signal to return when the gate is high.
   */
  on: node.Child,

  /**
   * Signal to return when the gate is low.
   */
  off: node.Child
];
