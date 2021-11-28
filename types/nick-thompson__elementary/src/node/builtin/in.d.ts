import { node } from "@nick-thompson/elementary";

/**
 * Identity {@link node.Node} that just passes through the incoming signal or
 * an input {@link node.Node} which outputs an input channel.
 *
 * @see node.TypeNode
 * @see node.InType
 */
export type InNode = node.TypeNode<node.InType>;
