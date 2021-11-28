import { node } from "@nick-thompson/elementary";

// ============================================================================
// Native

// placed in here because the two functions from basics and math would collide

// noinspection JSUnusedLocalSymbols
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
declare const identity: node.NativeNodeFactory<
  "in",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Used for accepting an input signal from the audio driver,
 * whereupon the channel prop will be used to decide which
 * incoming signal channel will be passed forward.
 *
 * @param [props]
 * {@link node.InProps} object
 *
 * @returns
 * a {@link node.InNode} that returns a stream of the input
 *
 * @see node.InProps
 * @see node.Child
 * @see node.Node
 */
declare const input: node.NativeNodeFactory<"in", node.InProps>;

/**
 * Either the identity or the input function.
 *
 * @param [props]
 * props object optional key or {@link node.InProps}
 *
 * @param [operand]
 * if using in as the identity function the child of which the result will
 * be returned
 *
 * @returns
 * a {@link node.InNode} that returns the result of the operand or the
 * stream of the input
 *
 * @see identity
 * @see input
 * @see node.InProps
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
declare const _in: typeof identity & typeof input;

// noinspection ReservedWordAsName
export { _in as in };
