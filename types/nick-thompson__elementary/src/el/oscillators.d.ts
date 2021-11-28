import { node } from "@nick-thompson/elementary";

// ============================================================================
// Native

/**
 * Outputs a ramp from 0 to 1 at the given rate.
 *
 * Expects exactly one argument, providing the rate in Hz.
 *
 * @param [props]
 * props object with optional key
 *
 * @param rate
 * the rate in Hz
 *
 * @returns
 * a {@link node.PhasorNode} the output of the phasor
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.PhasorNode
 */
export const phasor: node.NativeNodeFactory<
  "phasor",
  node.KeyProps,
  [rate: node.Child]
>;

// ============================================================================
// Composite

/**
 * Outputs a pulse train alternating between 0 and 1 at the given rate.
 *
 * Expects exactly one argument, providing the rate in Hz.
 *
 * @param [props]
 * props object with optional key
 *
 * @param rate
 * the rate in Hz
 *
 * @returns
 * a {@link node.Node} that computes the output of the pulse train
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const train: node.CompositeNodeFactory<
  node.KeyProps,
  [rate: node.Child]
>;

/**
 * Outputs a periodic sine tone at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @param [props]
 * props object with optional key
 *
 * @param frequency
 * the frequency in Hz
 *
 * @returns
 * a {@link node.Node} that computes the output of the sine wave
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const cycle: node.CompositeNodeFactory<
  node.KeyProps,
  [frequency: node.Child]
>;

/**
 * Outputs a naive sawtooth oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive sawtooth at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @param [props]
 * props object with optional key
 *
 * @param frequency
 * the frequency in Hz
 *
 * @returns
 * a {@link node.Node} that computes the output of the saw wave
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const saw: node.CompositeNodeFactory<
  node.KeyProps,
  [frequency: node.Child]
>;

/**
 * Outputs a naive square oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @param [props]
 * props object with optional key
 *
 * @param frequency
 * the frequency in Hz
 *
 * @returns
 * a {@link node.Node} that computes the output of the square wave
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const square: node.CompositeNodeFactory<
  node.KeyProps,
  [frequency: node.Child]
>;

/**
 * Outputs a naive triangle oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @param [props]
 * props object with optional key
 *
 * @param frequency
 * the frequency in Hz
 *
 * @returns
 * a {@link node.Node} that computes the output of the triangle wave
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const triangle: node.CompositeNodeFactory<
  node.KeyProps,
  [frequency: node.Child]
>;

/**
 * Outputs a band-limited polyblep sawtooth waveform at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @param [props]
 * props object with optional key
 *
 * @param frequency
 * the frequency in Hz
 *
 * @returns
 * a {@link node.Node} that computes the output of the blepsaw
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const blepsaw: node.CompositeNodeFactory<
  node.KeyProps,
  [frequency: node.Child]
>;

/**
 * Outputs a band-limited polyblep square waveform at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @param [props]
 * props object with optional key
 *
 * @param frequency
 * the frequency in Hz
 * @returns
 * a {@link node.Node} that computes the output of the blepsquare
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const blepsquare: node.CompositeNodeFactory<
  node.KeyProps,
  [frequency: node.Child]
>;

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
 * @param [props]
 * props object with optional key
 *
 * @param frequency
 * the frequency in Hz
 *
 * @returns
 * a {@link node.Node} that computes the output of the bleptriangle
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const bleptriangle: node.CompositeNodeFactory<
  node.KeyProps,
  [frequency: node.Child]
>;
