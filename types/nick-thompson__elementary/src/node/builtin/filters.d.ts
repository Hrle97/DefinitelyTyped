import { node } from "@nick-thompson/elementary";

/**
 * Implements a simple one-pole filter, also sometimes called a leaky
 * integrator.
 *
 * @see node.TypeNode
 * @see node.PoleType
 */
export type PoleNode = node.TypeNode<node.PoleType>;

/**
 * Implements a simple one-zero filter.
 *
 * @see node.TypeNode
 * @see node.ZeroType
 */
export type ZeroNode = node.TypeNode<node.ZeroType>;

/**
 * Implements a default DC blocking filter with a pole at 0.995 and a zero at
 * 1. This filter has a -3dB point near 35Hz at 44.1kHz.
 *
 * @see node.TypeNode
 * @see node.DcBlockType
 */
export type DcBlockNode = node.TypeNode<node.DcBlockType>;

/**
 * A simple first order pole-zero filter, Direct Form 1.
 *
 * @see node.TypeNode
 * @see node.Df11Type
 */
export type Df11Node = node.TypeNode<node.Df11Type>;

/**
 * Unity gain one-pole smoothing. Commonly used for addressing discontinuities
 * in control signals.
 *
 * @see node.TypeNode
 * @see node.SmoothType
 */
export type SmoothNode = node.TypeNode<node.SmoothType>;

/**
 * A pre-defined smoothing function with a 20ms decay time.
 *
 * @see node.TypeNode
 * @see node.SmType
 */
export type SmNode = node.TypeNode<node.SmType>;

/**
 * A second order transposed direct-form II filter implementation.
 *
 * @see node.TypeNode
 * @see node.BiquadType
 */
export type BiquadNode = node.TypeNode<node.BiquadType>;

/**
 * A simple lowpass biquad filter.
 *
 * @see node.TypeNode
 * @see node.LowPassType
 */
export type LowPassNode = node.TypeNode<node.LowPassType>;

/**
 * A simple highpass biquad filter.
 *
 * @see node.TypeNode
 * @see node.HighPassType
 */
export type HighPassNode = node.TypeNode<node.HighPassType>;

/**
 * A simple bandpass biquad filter.
 *
 * @see node.TypeNode
 * @see node.BandPassType
 */
export type BandPassNode = node.TypeNode<node.BandPassType>;

/**
 * An allpass biquad filter.
 *
 * @see node.TypeNode
 * @see node.AllPassType
 */
export type AllPassNode = node.TypeNode<node.AllPassType>;

/**
 * A notch biquad filter.
 *
 * @see node.TypeNode
 * @see node.NotchType
 */
export type NotchNode = node.TypeNode<node.NotchType>;

/**
 * A peaking (bell) biquad filter.
 *
 * @see node.TypeNode
 * @see node.PeakType
 */
export type PeakNode = node.TypeNode<node.PeakType>;

/**
 * A lowshelf biquad filter.
 *
 * @see node.TypeNode
 * @see node.LowShelfType
 */
export type LowShelfNode = node.TypeNode<node.LowShelfType>;

/**
 * A highshelf biquad filter.
 *
 * @see node.TypeNode
 * @see node.HighShelfType
 */
export type HighShelfNode = node.TypeNode<node.HighShelfType>;

/**
 * A convolution {@link node.Node} which reads an impulse response and
 * convolves it with the input signal.
 *
 * @see node.TypeNode
 * @see node.ConvolveType
 */
export type ConvolveNode = node.TypeNode<node.ConvolveType>;

/**
 * A pink noise filter designed to apply a -3dB/octave lowpass to the incoming
 * signal.
 *
 * @see node.TypeNode
 * @see node.PinkType
 */
export type PinkNode = node.TypeNode<node.PinkType>;
