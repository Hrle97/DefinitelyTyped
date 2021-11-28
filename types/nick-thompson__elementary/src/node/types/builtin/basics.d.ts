import { node } from "@nick-thompson/elementary";

/**
 * {@link node.SrNode} {@link node.Type}.
 *
 * @see node.SrNode
 * @see node.SrName
 */
export type SrType = node.SrName;

/**
 * {@link node.ConstNode} {@link node.Type}.
 *
 * @see node.ConstNode
 * @see node.ConstName
 */
export type ConstType = node.ConstName;

/**
 * {@link node.CounterNode} {@link node.Type}.
 *
 * @see node.CounterNode
 * @see node.CounterName
 */
export type CounterType = node.CounterName;

/**
 * {@link node.SelectNode} {@link node.Type}.
 *
 * @see node.SelectNode
 * @see node.CompositeFunction
 * @see node.SelectName
 * @see node.SelectProps
 * @see node.SelectChildren
 */
export type SelectType = node.CompositeFunction<
  node.SelectName,
  node.SelectProps,
  node.SelectChildren
>;
