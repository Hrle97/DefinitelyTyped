import { TypeNode } from "../node";

import { PoleType } from "../types";
/**
 * A very simple single-sample delay node (z^-1).
 *
 * @see TypeNode
 * @see PoleType
 */
export type PoleNode = TypeNode<PoleType>;

import { ZeroType } from "../types";
/**
 * Implements a simple one-zero filter.
 *
 * @see TypeNode
 * @see ZeroType
 */
export type ZeroNode = TypeNode<ZeroType>;

import { DcBlockType } from "../types";
/**
 * Implements a default DC blocking filter with a pole at 0.995 and a zero at
 * 1. This filter has a -3dB point near 35Hz at 44.1kHz.
 *
 * @see TypeNode
 * @see DcBlockType
 */
export type DcBlockNode = TypeNode<DcBlockType>;

import { Df11Type } from "../types";
/**
 * A simple first order pole-zero filter, Direct Form 1.
 *
 * @see TypeNode
 * @see Df11Type
 */
export type Df11Node = TypeNode<Df11Type>;

import { SmoothType } from "../types";
/**
 * Unity gain one-pole smoothing. Commonly used for addressing discontinuities
 * in control signals.
 *
 * @see TypeNode
 * @see SmoothType
 */
export type SmoothNode = TypeNode<SmoothType>;

import { SmType } from "../types";
/**
 * A pre-defined smoothing function with a 20ms decay time.
 *
 * @see TypeNode
 * @see SmType
 */
export type SmNode = TypeNode<SmType>;

import { BiquadType } from "../types";
/**
 * A second order transposed direct-form II filter implementation.
 *
 * @see TypeNode
 * @see BiquadType
 */
export type BiquadNode = TypeNode<BiquadType>;

import { LowPassType } from "../types";
/**
 * A simple lowpass biquad filter.
 *
 * @see TypeNode
 * @see LowPassType
 */
export type LowPassNode = TypeNode<LowPassType>;

import { HighPassType } from "../types";
/**
 * A simple highpass biquad filter.
 *
 * @see TypeNode
 * @see HighPassType
 */
export type HighPassNode = TypeNode<HighPassType>;

import { BandPassType } from "../types";
/**
 * A simple bandpass biquad filter.
 *
 * @see TypeNode
 * @see BandPassType
 */
export type BandPassNode = TypeNode<BandPassType>;

import { AllPassType } from "../types";
/**
 * An allpass biquad filter.
 *
 * @see TypeNode
 * @see AllPassType
 */
export type AllPassNode = TypeNode<AllPassType>;

import { NotchType } from "../types";
/**
 * A notch biquad filter.
 *
 * @see TypeNode
 * @see NotchType
 */
export type NotchNode = TypeNode<NotchType>;

import { PeakType } from "../types";
/**
 * A peaking (bell) biquad filter.
 *
 * @see TypeNode
 * @see PeakType
 */
export type PeakNode = TypeNode<PeakType>;

import { LowShelfType } from "../types";
/**
 * A lowshelf biquad filter.
 *
 * @see TypeNode
 * @see LowShelfType
 */
export type LowShelfNode = TypeNode<LowShelfType>;

import { HighShelfType } from "../types";
/**
 * A highshelf biquad filter.
 *
 * @see TypeNode
 * @see HighShelfType
 */
export type HighShelfNode = TypeNode<HighShelfType>;

import { ConvolveType } from "../types";
/**
 * A convolution node which reads an impulse response and convolves it with
 * the input signal.
 *
 * @see TypeNode
 * @see ConvolveType
 */
export type ConvolveNode = TypeNode<ConvolveType>;

import { PinkType } from "../types";
/**
 * A pink noise filter designed to apply a -3dB/octave lowpass to the incoming
 * signal.
 *
 * @see TypeNode
 * @see PinkType
 */
export type PinkNode = TypeNode<PinkType>;
