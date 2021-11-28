import { node } from "@nick-thompson/elementary";

/**
 * Generates a stream of random numbers uniformly distributed on the range
 * [-1, 1]. This is generally referred to as "white" noise.
 *
 * @see node.TypeNode
 * @see node.NoiseType
 */
export type NoiseNode = node.TypeNode<node.NoiseType>;

/**
 * This generates a noise signal with a -3dB/octave frequency response,
 * approximating "pink" noise.
 *
 * @see node.TypeNode
 * @see node.PinkNoiseType
 */
export type PinkNoiseNode = node.TypeNode<node.PinkNoiseType>;
