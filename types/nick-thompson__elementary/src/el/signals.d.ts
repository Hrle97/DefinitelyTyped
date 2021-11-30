import { node } from "@nick-thompson/elementary";

/**
 * A sample and hold node.
 * Samples a new value from the input on a rising edge of the control signal,
 * then holds and emits that value until the next rising edge of
 * the control signal.
 *
 * Expected children:
 * 1. The control signal
 * 2. The input signal to sample.
 *
 * @see node.EnvType
 */
export declare const env: node.TypeFactory<node.EnvType>;

/**
 * A sample and hold node.
 * Samples a new value from the input on a rising edge of the control signal,
 * then holds and emits that value until the next rising edge of
 * the control signal.
 *
 * Expected children:
 * 1. The control signal
 * 2. The input signal to sample.
 *
 * @see node.LatchType
 */
export declare const latch: node.TypeFactory<node.LatchType>;

/**
 * A simple signal sequencer. Receives a sequence of values from the seq
 * property and steps through them on each rising edge of an incoming
 * pulse train.
 *
 * Expects at least one child,
 * the pulse train to trigger the next step of the sequence.
 * An optional second child may be provided:
 * another control signal (pulse train) whose rising edge will
 * reset the sequence position back to the beginning.
 *
 * @see node.SeqType
 */
export declare const seq: node.TypeFactory<node.SeqType>;

/**
 * An exponential ADSR envelope generator, triggered by the gate signal g.
 * When the gate is high (1), this generates the ADS phase. When the gate
 * is low, the R phase.
 *
 * Expected children: 1. Attack time in seconds (number or signal) 2. Decay
 * time in seconds (number or signal) 3. Sustain amplitude between 0 and
 * 1 (number or signal) 4. Release time in seconds (number or signal) 5.
 * Gate signal; a pulse train alternating between 0 and 1.
 *
 * @see node.AdsrType
 */
export declare const adsr: node.TypeFactory<node.AdsrType>;

/**
 * A simple Hann window generator. The window is generated according to an
 * incoming phasor signal, where a phase value of 0 corresponds to the
 * left hand side of the window, and a phase value of 1 corresponds to
 * the right hand side of the window.
 *
 * Expects exactly one child, the incoming phase.
 *
 * @see node.HannType
 */
export declare const hann: node.TypeFactory<node.HannType>;
