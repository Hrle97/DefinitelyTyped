import * as node from '../node';

// ============================================================================
// Functions

// in is in in.d.ts because it collides with the in function from math

/**
 * Returns an array of el.in nodes, each one assigned to the corresponding
 * input from the system.
 * Useful for mapping input channels over an input effect.
 *
 * In the following example, if you open two input channels when running
 * Elementary:
 * @example
 *     el.inputs() === [el.in({channel: 0}), el.in({channel: 1})]
 *
 * @returns
 * an array of {@link node.InNode} that output the input signals of their
 * designated channels
 *
 * @see node.InNode
 */
export function inputs(): node.InNode[];

/**
 * Computes a real pole position giving exponential decay over t,
 * where t is the time to decay 60dB.
 * Computes lazily.
 *
 * @param child
 * {@link node.Node} to compute the real pole position of
 *
 * @returns
 * a {@link node.Node} that computes the real pole position of the child
 *
 * @see node.Node
 */
export function tau2pole(child: node.Node): node.Node;

/**
 * Computes a real pole position giving exponential decay over t,
 * where t is the time to decay 60dB.
 * Computes eagerly.
 *
 * @param time
 * time to compute the real pole position of
 *
 * @returns
 * real pole position of the time
 */
export function tau2pole(time: number): number;

/**
 * Equivalent to (time / 1000) * sampleRate,
 * where time is the input time in milliseconds.
 * Computes lazily.
 *
 * @param child
 * {@link node.Node} to compute the sample count of
 *
 * @returns
 * a {@link node.Node} computing the sample count the given child node
 *
 * @see node.Node
 */
export function ms2samps(child: node.Node): node.Node;

/**
 * Equivalent to (time / 1000) * sampleRate,
 * where time is the input time in milliseconds.
 * Computes eagerly.
 *
 * @param time
 * time to convert to sample count
 *
 * @returns
 * sample count of the time given
 */
export function ms2samps(time: number): number;

// ============================================================================
// Native

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
declare const _const: node.NativeNodeFactory<'const', node.ConstProps>;

// noinspection ReservedWordAsName
export { _const as const };

/**
 * A constant value node whose value is the current sample rate of the system.
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * a {@link node.SrNode} that returns the current sample rate
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.SrNode
 */
export const sr: node.NativeNodeFactory<'sr'>;

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
export const counter: node.NativeNodeFactory<
  'counter',
  node.KeyProps,
  [pulse: node.Child]
>;

// ============================================================================
// Composite

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
export const select: node.CompositeNodeFactory<
  node.KeyProps,
  [signal: node.Child, high: node.Child, low: node.Child]
>;
