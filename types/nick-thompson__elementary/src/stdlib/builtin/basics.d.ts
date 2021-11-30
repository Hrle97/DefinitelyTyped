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
 * @see node.ConstType
 */
declare const _const: node.ConstType;
export { _const as const };

/**
 * A constant value node whose value is the current sample rate of the system.
 *
 * @see node.SrType
 */
export declare const sr: node.SrType;

/**
 * Outputs a continuous count of elapsed samples.
 * Expects a pulse train alternating between 0 and 1.
 * When the pulse is high, the counter will run.
 * When the pulse is low, the counter will reset and output 0 until the
 * pulse is high again.
 *
 * @see node.CounterType
 */
export const counter: node.CounterType;

/**
 * A simple conditional operator. Given a gate signal, on the range [0, 1],
 * returns high when the gate is high, and low when the gate is low.
 * For values of the signal between (0, 1), performs a linear interpolation
 * between high and low.
 *
 * @see node.SelectType
 */
export declare const select: node.SelectType;
