import { node } from "@nick-thompson/elementary";

/**
 * Identity function, f(x) = x.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to return the result of
 *
 * @returns
 * a {@link node.InNode} that returns the result of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
declare const _in: node.TypeFactory<node.InType>;

export { _in as in };
