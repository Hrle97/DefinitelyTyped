import { node } from "@nick-thompson/elementary";

/**
 * A constant value {@link node.Node} whose value is the current sample rate
 * of the system.
 *
 * @see node.node.TypeNode
 * @see node.SrType
 */
export type SrNode = node.TypeNode<node.SrType>;

/**
 * A constant value {@link node.Node} whose value is set by the value prop.
 * Commonly, you'll see the const {@link node.Node} expressed as a numeric
 * literal.
 *
 * @see node.TypeNode
 * @see node.ConstType
 */
export type ConstNode = node.TypeNode<node.ConstType>;

/**
 * Outputs a continuous count of elapsed samples.
 *
 * @see node.TypeNode
 * @see node.CounterType
 */
export type CounterNode = node.TypeNode<node.CounterType>;

/**
 * A simple conditional operator {@link node.Node}.
 *
 * @see node.TypeNode
 * @see node.SelectType
 */
export type SelectNode = node.TypeNode<node.SelectType>;
