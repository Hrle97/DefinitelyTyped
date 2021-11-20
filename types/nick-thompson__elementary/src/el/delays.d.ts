import * as node from '../node';

// ============================================================================
// Native

/**
 * A very simple single-sample delay {@link node.Node} (z^-1).
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * the signal {@link node.ZNode} to delay
 *
 * @see node.KeyProps
 * @see node.ZNode
 */
export const z: node.NativeNodeFactory<'z'>;

/**
 * A variable-length delay line with a feedback component.
 *
 * When feedback is zero, this gives a simple signal delay.
 *
 * At small delay times, and with various feedback and feedforward components,
 * this gives various comb filters.
 *
 * At larger delay times with a positive feedback
 * this gives a simple feedback delay/echo.
 *
 * In the following example, a feedforward component where feedforward is equal
 * to the negative feedback gives an allpass filter:
 * @example
 *     el.add(
 *      el.mul(feedforward, signal),
 *      el.delay(
 *       {size: 44100}, // usually one second
 *       el.ms2samps(length),
 *       feedback,
 *       signal));
 *
 * @param [props]
 * {@link node.DelayProps} object
 *
 * @param length
 * delay time in samples
 *
 * @param feedback
 * feedback in the range of [-1, 1]
 *
 * @param signal
 * the signal to delay
 *
 * @returns
 * a {@link node.DelayNode} that computes the output of the delay
 *
 * @see node.DelayProps
 * @see node.Child
 * @see node.DelayNode
 */
export const delay: node.NativeNodeFactory<
  'delay',
  node.DelayProps,
  [length: node.Child, feedback: node.Child, signal: node.Child]
>;
