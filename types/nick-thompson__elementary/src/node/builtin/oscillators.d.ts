import { node } from "@nick-thompson/elementary";

/**
 * Outputs a ramp from 0 to 1 at the given rate.
 *
 * @see node.TypeNode
 * @see node.PhasorType
 */
export type PhasorNode = node.TypeNode<node.PhasorType>;

/**
 * Outputs a pulse train alternating between 0 and 1 at the given rate.
 *
 * @see node.TypeNode
 * @see node.TrainType
 */
export type TrainNode = node.TypeNode<node.TrainType>;

/**
 * Outputs a periodic sine tone at the given frequency.
 *
 * @see node.TypeNode
 * @see node.CycleType
 */
export type CycleNode = node.TypeNode<node.CycleType>;

/**
 * Outputs a naive sawtooth oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive sawtooth at audio rates, this
 * oscillator is used for low frequencly modulation.
 *
 * @see node.TypeNode
 * @see node.SawType
 */
export type SawNode = node.TypeNode<node.SawType>;

/**
 * Outputs a naive square oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive square at audio rates, this
 * oscillator is used for low frequencly modulation.
 *
 * @see node.TypeNode
 * @see node.SquareType
 */
export type SquareNode = node.TypeNode<node.SquareType>;

/**
 * Outputs a naive triangle oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive triangle at audio rates, this
 * oscillator is used for low frequencly modulation.
 *
 * @see node.TypeNode
 * @see node.TriangleType
 */
export type TriangleNode = node.TypeNode<node.TriangleType>;

/**
 * Outputs a band-limited polyblep sawtooth waveform at the given frequency.
 *
 * @see node.TypeNode
 * @see node.BlepSawType
 */
export type BlepSawNode = node.TypeNode<node.BlepSawType>;

/**
 * Outputs a band-limited polyblep square waveform at the given frequency.
 *
 * @see node.TypeNode
 * @see node.BlepSquareType
 */
export type BlepSquareNode = node.TypeNode<node.BlepSquareType>;

/**
 * Outputs a band-limited polyblep triangle waveform at the given frequency.
 *
 * @see node.TypeNode
 * @see node.BlepTriangleType
 */
export type BlepTriangleNode = node.TypeNode<node.BlepTriangleType>;
