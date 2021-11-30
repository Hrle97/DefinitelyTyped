import { node } from "@nick-thompson/elementary";

/**
 * Outputs a ramp from 0 to 1 at the given rate.
 *
 * @see node.PhasorType
 */
export declare const phasor: node.PhasorType;

/**
 * Outputs a pulse train alternating between 0 and 1 at the given rate.
 *
 * @see node.TrainType
 */
export declare const train: node.TrainType;

/**
 * Outputs a periodic sine tone at the given frequency.
 *
 * @see node.CycleType
 */
export declare const cycle: node.CycleType;

/**
 * Outputs a naive sawtooth oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive sawtooth at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @see node.SawType
 */
export declare const saw: node.SawType;

/**
 * Outputs a naive square oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @see node.SquareType
 */
export declare const square: node.SquareType;

/**
 * Outputs a naive triangle oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @see node.TriangleType
 */
export declare const triangle: node.TriangleType;

/**
 * Outputs a band-limited polyblep sawtooth waveform at the given frequency.
 *
 * @see node.BlepSawType
 */
export declare const blepsaw: node.BlepSawType;

/**
 * Outputs a band-limited polyblep square waveform at the given frequency.
 *
 * @see node.BlepSquareType
 */
export declare const blepsquare: node.BlepSquareType;

/**
 * Outputs a band-limited polyblep triangle waveform at the given frequency.
 *
 * @see node.BlepTriangleType
 */
export declare const bleptriangle: node.BlepTriangleType;
