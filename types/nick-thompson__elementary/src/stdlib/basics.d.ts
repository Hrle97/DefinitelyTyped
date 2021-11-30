import { node } from "@nick-thompson/elementary";

/**
 * A constant value node whose value is set by the value prop.
 * Commonly, you'll see the const node expressed as a numeric literal.
 *
 * In the following example, the two expressions are equivalent.
 * @example
 *     el.cycle(440)
 *     el.cycle(el.const({value: 440}))
 *
 * @param [props]
 * {@link node.ConstProps} object
 *
 * @returns
 * a {@link node.ConstNode} that returns the given value
 *
 * @see node.KeyProps
 * @see node.ConstProps
 * @see node.Child
 * @see node.ConstNode
 */
declare const _const: node.ConstType;
export { _const as const };

/**
 * A constant value node whose value is the current sample rate of the system.
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.SrNode
 */
export declare const sr: node.SrNode;

/**
 * Outputs a continuous count of elapsed samples.
 * Expects a pulse train alternating between 0 and 1.
 * When the pulse is high, the counter will run.
 * When the pulse is low, the counter will reset and output 0 until the
 * pulse is high again.
 *
 * @param [props]
 * props object with optional key
 *
 * @param pulse
 * pulse to count
 *
 * @returns
 * a {@link node.CounterNode} that computes the count of the counter
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.CounterNode
 */
export const counter: node.CounterType;

/**
 * A simple conditional operator. Given a gate signal, on the range [0, 1],
 * returns high when the gate is high, and low when the gate is low.
 * For values of the signal between (0, 1), performs a linear interpolation
 * between high and low.
 *
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * the signal to test
 *
 * @param high
 * result when signal is high
 *
 * @param low
 * result when signal is low
 *
 * @returns
 * a {@link node.Node} that results in high or low or their interpolation
 * depending on the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export declare const select: node.SelectType;
