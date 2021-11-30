import { node } from "@nick-thompson/elementary";

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
 * an array of {@link node.InNode}s that output the input signals of their
 * designated channels
 *
 * @see node.InNode
 */
export function inputs(): node.InNode[];

/**
 * Computes a real pole position giving exponential decay over t, where t is
 * the time to decay 60dB.
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
 * Computes a real pole position giving exponential decay over t, where t is
 * the time to decay 60dB.
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
 * Equivalent to (time / 1000) * sampleRate, where time is the input time in
 * milliseconds.
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
 * Equivalent to (time / 1000) * sampleRate, where time is the input time in
 * milliseconds.
 * Computes eagerly.
 *
 * @param time
 * time to convert to sample count
 *
 * @returns
 * sample count of the time given
 */
export function ms2samps(time: number): number;
