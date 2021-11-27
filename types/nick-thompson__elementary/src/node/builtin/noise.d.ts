import { TypeNode } from "../node";

import { NoiseType } from "../types";
/**
 * Generates a stream of random numbers uniformly distributed on the range
 * [-1, 1]. This is generally referred to as "white" noise.
 *
 * @see TypeNode
 * @see NoiseType
 */
export type NoiseNode = TypeNode<NoiseType>;

import { PinkNoiseType } from "../types";
/**
 * This generates a noise signal with a -3dB/octave frequency response,
 * approximating "pink" noise.
 *
 * @see TypeNode
 * @see PinkNoiseType
 */
export type PinkNoiseNode = TypeNode<PinkNoiseType>;
