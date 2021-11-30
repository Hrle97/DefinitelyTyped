import { node } from "@nick-thompson/elementary";

/**
 * Identity function, `f(x) = x`, or, if a `channel` prop is provided, input
 * channel `channel`, or, if any children are provided with the `channel`
 * prop, the result of the child at the position `channel` will be returned.
 *
 * @see node.InType
 */
declare const _in: node.TypeFactory<node.InType>;
export { _in as in };
