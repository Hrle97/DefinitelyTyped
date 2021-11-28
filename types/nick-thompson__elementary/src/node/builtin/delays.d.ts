import { node } from "@nick-thompson/elementary";

/**
 * A very simple single-sample delay {@link node.Node} (z^-1).
 *
 * @see node.TypeNode
 * @see node.ZType
 */
export type ZNode = node.TypeNode<node.ZType>;

/**
 * The {@link node.TapOutNode} pairs with the {@link node.TapInNode} to
 * provide special case behavior for implementing feedback around arbitrary
 * parts of your signal graph.
 * A {@link node.TapOytNode} is identified by name, and its signal can be fed
 * back into any part of your signal graph using a TapInNode by the same name.
 *
 * @see node.TypeNode
 * @see node.TapOutType
 * @see node.TapInNode
 */
export type TapOutNode = node.TypeNode<node.TapOutType>;

/**
 * Given a {@link node.TapOytNode} with a known name in a signal graph, we can
 * use {@link node.TapInNode} to wire the signal into any other region of our
 * graph, allowing feedback around arbitrary subgraphs.
 *
 * @see node.TypeNode
 * @see node.TapInType
 * @see node.TapOutNode
 */
export type TapInNode = node.TypeNode<node.TapInType>;

/**
 * A variable-length delay line with a feedback component.
 *
 * @see node.TypeNode
 * @see node.DelayType
 */
export type DelayNode = node.TypeNode<node.DelayType>;
