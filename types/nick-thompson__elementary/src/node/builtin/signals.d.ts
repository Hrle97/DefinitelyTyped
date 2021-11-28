import { node } from "@nick-thompson/elementary";

/**
 * A one-pole envelope follower {@link node.Node} with different attack and
 * release times.
 *
 * @see node.TypeNode
 * @see node.EnvType
 */
export type EnvNode = node.TypeNode<node.EnvType>;

/**
 * An exponential ADSR envelope generator, triggered by a gate signal.
 * When the gate is high (1), this generates the ADS phase. When the gate is
 * low, the R phase.
 *
 * @see node.TypeNode
 * @see node.AdsrType
 */
export type AdsrNode = node.TypeNode<node.AdsrType>;

/**
 * A sample and hold {@link node.Node}. Samples a new value from the incoming
 * signal on a rising edge of a pulse train, then holds and emits that value
 * until the next rising edge of the pulse train.
 *
 * @see node.TypeNode
 * @see node.LatchType
 */
export type LatchNode = node.TypeNode<node.LatchType>;

/**
 * A simple signal sequencer. Receives a sequence of values and steps through
 * them on each rising edge of an incoming pulse train.
 *
 * @see node.TypeNode
 * @see node.SeqType
 */
export type SeqNode = node.TypeNode<node.SeqType>;

/**
 * A simple Hann window generator. The window is generated according to an
 * incoming phasor signal, where a phase value of 0 corresponds to the left
 * hand side of the window, and a phase value of 1 corresponds to the right
 * hand side of the window.
 *
 * @see node.TypeNode
 * @see node.HannType
 */
export type HannNode = node.TypeNode<node.HannType>;
