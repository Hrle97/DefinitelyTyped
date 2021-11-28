import { node } from "@nick-thompson/elementary";

// ============================================================================
// Composite

/**
 * A simple white noise generator.
 * Generates values uniformly distributed on the range [-1, 1].
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * a {@link node.Node} that generates white noise
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const noise: node.CompositeNodeFactory;

/**
 * A simple pink noise generator.
 * Generates noise with a -3dB/octave rolloff in the frequency response.
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * a {@link node.Node} that generates pink noise
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const pinknoise: node.CompositeNodeFactory;
