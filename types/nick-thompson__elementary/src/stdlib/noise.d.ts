import { node } from "@nick-thompson/elementary";

/**
 * A simple white noise generator.
 * Generates values uniformly distributed on the range [-1, 1].
 *
 * @see node.NoiseType
 */
export declare const noise: node.NoiseType;

/**
 * A simple pink noise generator.
 * Generates noise with a -3dB/octave rolloff in the frequency response.
 *
 * @see node.PinkNoiseType
 */
export declare const pinknoise: node.PinkNoiseType;
