import { node } from "@nick-thompson/elementary";

/**
 * A one-pole envelope follower node with different attack and release times.
 * This is quite similar to el.pole(p, el.abs(x)) in implementation.
 * For example:
 * @example
 *   el.env(el.tau2pole(0.01), el.tau2pole(0.1), x)
 *
 * @see node.EnvType
 */
export declare const env: node.EnvType;

/**
 * A sample and hold node.
 * Samples a new value from the input on a rising edge of the control signal,
 * then holds and emits that value until the next rising edge of
 * the control signal.
 *
 * @see node.LatchType
 */
export declare const latch: node.LatchType;

/**
 * A simple signal sequencer. Receives a sequence of values from the seq
 * property and steps through them on each rising edge of an incoming
 * pulse train.
 *
 * @see node.SeqType
 */
export declare const seq: node.SeqType;

/**
 * An exponential ADSR envelope generator, triggered by the gate signal g.
 * When the gate is high (1), this generates the ADS phase. When the gate
 * is low, the R phase.
 *
 * @see node.AdsrType
 */
export declare const adsr: node.AdsrType;

/**
 * A simple Hann window generator. The window is generated according to an
 * incoming phasor signal, where a phase value of 0 corresponds to the
 * left hand side of the window, and a phase value of 1 corresponds to
 * the right hand side of the window.
 *
 * @see node.HannType
 */
export declare const hann: node.HannType;
