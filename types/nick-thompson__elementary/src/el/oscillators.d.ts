import { node } from "@nick-thompson/elementary";

/**
 * Outputs a ramp from 0 to 1 at the given rate.
 *
 * Expects exactly one argument, providing the rate in Hz.
 *
 * @see node.PhasorType
 */
export declare const phasor: node.TypeFactory<node.PhasorType>;

/**
 * Outputs a pulse train alternating between 0 and 1 at the given rate.
 *
 * Expects exactly one argument, providing the rate in Hz.
 *
 * @see node.TrainType
 */
export declare const train: node.TypeFactory<node.TrainType>;

/**
 * Outputs a periodic sine tone at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @see node.CycleType
 */
export declare const cycle: node.TypeFactory<node.CycleType>;

/**
 * Outputs a naive sawtooth oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive sawtooth at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @see node.SawType
 */
export declare const saw: node.TypeFactory<node.SawType>;

/**
 * Outputs a naive square oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @see node.SquareType
 */
export declare const square: node.TypeFactory<node.SquareType>;

/**
 * Outputs a naive triangle oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @see node.TriangleType
 */
export declare const triangle: node.TypeFactory<node.TriangleType>;

/**
 * Outputs a band-limited polyblep sawtooth waveform at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @see node.BlepSawType
 */
export declare const blepsaw: node.TypeFactory<node.BlepSawType>;

/**
 * Outputs a band-limited polyblep square waveform at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @see node.BlepSquareType
 */
export declare const blepsquare: node.TypeFactory<node.BlepSquareType>;

/**
 * Outputs a band-limited polyblep triangle waveform at the given frequency.
 *
 * Due to the integrator in the signal path, the polyblep triangle oscillator
 * may perform poorly (in terms of anti-aliasing) when the oscillator frequency
 * changes over time.
 *
 * Further, integrating a square waveform as we do here will produce a
 * triangle waveform with a DC offset. Therefore we use a
 * leaky integrator (coefficient at 0.999) which filters out the DC component
 * over time. Note that before the DC component is filtered out,
 * the triangle waveform may exceed +/- 1.0,
 * so take appropriate care to apply gains where necessary.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @see node.BlepTriangleType
 */
export declare const bleptriangle: node.TypeFactory<node.BlepTriangleType>;
