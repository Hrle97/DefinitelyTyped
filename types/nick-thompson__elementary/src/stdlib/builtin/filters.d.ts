import { node } from "@nick-thompson/elementary";

/**
 * Implements a simple one-pole filter,
 * also sometimes called a leaky integrator.
 *
 * @see node.PoleType
 */
export declare const pole: node.PoleType;

/**
 * A second order transposed direct-form II filter implementation.
 *
 * @see node.BiquadType
 */
export declare const biquad: node.BiquadType;

/**
 * A convolution node which reads an impulse response from disk and
 * convolves it with the input signal.
 *
 * @see node.ConvolveType
 */
export declare const convolve: node.ConvolveType;

/**
 * Implements a simple one-zero filter.
 *
 * @see node.ZeroType
 */
export declare const zero: node.ZeroType;

/**
 * Implements a default DC blocking filter with a pole at 0.995 and a zero
 * at 1.
 * This filter has a -3dB point near 35Hz at 44.1kHz.
 *
 * @see node.DcBlockType
 */
export declare const dcblock: node.DcBlockType;

/**
 * A simple first order pole-zero filter, Direct Form 1.
 *
 * @see node.Df11Type
 */
export declare const df11: node.Df11Type;

/**
 * Unity gain one-pole smoothing. Commonly used for addressing
 * discontinuities in control signals.
 *
 * @see node.SmoothType
 */
export declare const smooth: node.SmoothType;

/**
 * A pre-defined smoothing export declare function with a 20ms decay time
 * equivalent to:
 * @example
 *     el.smooth(el.tau2pole(0.02), signal)
 *
 * @see node.SmType
 */
export declare const sm: node.SmType;

/**
 * A simple lowpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @see node.LowPassType
 */
export declare const lowpass: node.LowPassType;

/**
 * A simple highpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @see node.HighPassType
 */
export declare const highpass: node.HighPassType;

/**
 * A simple bandpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @see node.BandPassType
 */
export declare const bandpass: node.BandPassType;

/**
 * An allpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @see node.AllPassType
 */
export declare const allpass: node.AllPassType;

/**
 * A notch biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @see node.NotchType
 */
export declare const notch: node.NotchType;

/**
 * A peaking (bell) biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @see node.PeakType
 */
export declare const peak: node.PeakType;

/**
 * A lowshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @see node.LowShelfType
 */
export declare const lowshelf: node.LowShelfType;

/**
 * A highshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @see node.HighShelfType
 */
export declare const highshelf: node.HighShelfType;

/**
 * A pink noise filter designed to apply a -3dB/octave lowpass to the
 * incoming signal.
 *
 * @see node.PinkType
 */
export declare const pink: node.PinkType;
