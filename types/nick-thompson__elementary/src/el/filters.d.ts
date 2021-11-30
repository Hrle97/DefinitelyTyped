import { node } from "@nick-thompson/elementary";

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
export declare const pole: node.TypeFactory<node.PoleType>;

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
export declare const biquad: node.TypeFactory<node.BiquadType>;

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
export declare const convolve: node.TypeFactory<node.ConvolveType>;

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
export declare const zero: node.TypeFactory<node.ZeroType>;

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
export declare const dcblock: node.TypeFactory<node.DcBlockType>;

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
export declare const df11: node.TypeFactory<node.Df11Type>;

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
export declare const smooth: node.TypeFactory<node.SmoothType>;

/**
 * A pre-defined smoothing export declare function with a 20ms decay time equivalent to
 * @example
 *     el.TypeFactory(el.tau2pole(0.02), signal)
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
export declare const sm: node.TypeFactory<node.SmType>;

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
export declare const lowpass: node.TypeFactory<node.LowPassType>;

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
export declare const highpass: node.TypeFactory<node.HighPassType>;

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
export declare const bandpass: node.TypeFactory<node.BandPassType>;

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
export declare const allpass: node.TypeFactory<node.AllPassType>;

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
export declare const notch: node.TypeFactory<node.NotchType>;

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
export declare const peak: node.TypeFactory<node.PeakType>;

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
export declare const lowshelf: node.TypeFactory<node.LowShelfType>;

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
export declare const highshelf: node.TypeFactory<node.HighShelfType>;

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
export declare const pink: node.TypeFactory<node.PinkType>;
