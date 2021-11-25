import * as node from '../node';

// ============================================================================
// Native

/**
 * Implements a simple one-pole filter,
 * also sometimes called a leaky integrator.
 * Expects two children, the first is the pole position,
 * the second is the signal to filter.
 *
 * @param [props]
 * props object with optional key
 *
 * @param polePosition
 * the pole position
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.PoleNode} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.PoleNode
 */
export const pole: node.NativeNodeFactory<
  'pole',
  node.KeyProps,
  [polePosition: node.Child, signal: node.Child]
>;

/**
 * A second order transposed direct-form II filter implementation.
 * Expects six children, the first five of which are the raw filter
 * coefficients (b0, b1, b2, a1, a2). The final input is the signal to filter.
 *
 * @param [props]
 * props object with optional key
 *
 * @param b0
 * the first coefficient
 *
 * @param b1
 * the second coefficient
 *
 * @param b2
 * the third coefficient
 *
 * @param a1
 * the fourth coefficient
 *
 * @param a2
 * the fifth coefficient
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.BiquadNode} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.BiquadNode
 */
export const biquad: node.NativeNodeFactory<
  'biquad',
  node.KeyProps,
  [
    b0: node.Child,
    b1: node.Child,
    b2: node.Child,
    a1: node.Child,
    a2: node.Child,
    signal: node.Child,
  ]
>;

/**
 * A convolution node which reads an impulse response from disk and
 * convolves it with the input signal.
 *
 * @param [props]
 * {@link node.ConvolveProps} object
 *
 * @param signal
 * signal to convolve
 *
 * @returns
 * a {@link node.ConvolveNode} that convolves the signal
 *
 * @see node.ConvolveProps
 * @see node.Child
 * @see node.Node
 */
export const convolve: node.NativeNodeFactory<
  'convolve',
  node.ConvolveProps,
  [signal: node.Child]
>;

// ============================================================================
// Functions

/**
 * Implements a simple one-zero filter.
 * Expects the b0 coefficient as the first argument,
 * the zero position b1 as the second argument,
 * and the input to the filter as the third.
 *
 * @param [props]
 * props object with optional key
 *
 * @param b0
 * the first coefficient
 *
 * @param b1
 * the second coefficient
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const zero: node.CompositeNodeFactory<
  node.KeyProps,
  [b0: node.Child, b1: node.Child, signal: node.Child]
>;

/**
 * Implements a default DC blocking filter with a pole at 0.995 and a zero at 1.
 * This filter has a -3dB point near 35Hz at 44.1kHz.
 *
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const dcblock: node.CompositeNodeFactory<
  node.KeyProps,
  [signal: node.Child]
>;

/**
 * A simple first order pole-zero filter, Direct Form 1.
 *
 * @param [props]
 * props object with optional key
 *
 * @param b0
 * the first coefficient
 *
 * @param b1
 * the second coefficient
 *
 * @param a1
 * the third coefficient
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const df11: node.CompositeNodeFactory<
  node.KeyProps,
  [b0: node.Child, b1: node.Child, a1: node.Child, signal: node.Child]
>;

/**
 * Unity gain one-pole smoothing. Commonly used for addressing
 * discontinuities in control signals.
 * Expects two children, the first is the pole position,
 * the second is the signal to filter.
 *
 * @param [props]
 * props object with optional key
 *
 * @param polePosition
 * the pole position
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const smooth: node.CompositeNodeFactory<
  node.KeyProps,
  [polePosition: node.Child, signal: node.Child]
>;

/**
 * A pre-defined smoothing export function with a 20ms decay time equivalent to
 * @example
 *     el.smooth(el.tau2pole(0.02), signal)
 *
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const sm: node.CompositeNodeFactory<node.KeyProps, [signal: node.Child]>;

/**
 * A simple lowpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const lowpass: node.CompositeNodeFactory<
  node.KeyProps,
  [cutoff: node.Child, Q: node.Child, signal: node.Child]
>;

/**
 * A simple highpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const highpass: node.CompositeNodeFactory<
  node.KeyProps,
  [cutoff: node.Child, Q: node.Child, signal: node.Child]
>;

/**
 * A simple bandpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const bandpass: node.CompositeNodeFactory<
  node.KeyProps,
  [cutoff: node.Child, Q: node.Child, signal: node.Child]
>;

/**
 * An allpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const allpass: node.CompositeNodeFactory<
  node.KeyProps,
  [cutoff: node.Child, Q: node.Child, signal: node.Child]
>;

/**
 * A notch biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const notch: node.CompositeNodeFactory<
  node.KeyProps,
  [cutoff: node.Child, Q: node.Child, signal: node.Child]
>;

/**
 * A peaking (bell) biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param gain
 * the filter gain in decibels
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const peak: node.CompositeNodeFactory<
  node.KeyProps,
  [cutoff: node.Child, Q: node.Child, gain: node.Child, signal: node.Child]
>;

/**
 * A lowshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param gain
 * the filter gain in decibels
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const lowshelf: node.CompositeNodeFactory<
  node.KeyProps,
  [cutoff: node.Child, Q: node.Child, gain: node.Child, signal: node.Child]
>;

/**
 * A highshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param gain
 * the filter gain in decibels
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const highshelf: node.CompositeNodeFactory<
  node.KeyProps,
  [cutoff: node.Child, Q: node.Child, gain: node.Child, signal: node.Child]
>;

/**
 * A pink noise filter designed to apply a -3dB/octave lowpass to the
 * incoming signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link node.Node} that filters the signal
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const pink: node.CompositeNodeFactory<
  node.KeyProps,
  [signal: node.Child]
>;
