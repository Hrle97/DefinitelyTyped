import { TypeNode } from "../node";

import { EnvType } from "../types";
/**
 * A one-pole envelope follower node with different attack and release times.
 *
 * @see TypeNode
 * @see EnvType
 */
export type EnvNode = TypeNode<EnvType>;

import { AdsrType } from "../types";
/**
 * An exponential ADSR envelope generator, triggered by a gate signal.
 * When the gate is high (1), this generates the ADS phase. When the gate is
 * low, the R phase.
 *
 * @see TypeNode
 * @see AdsrType
 */
export type AdsrNode = TypeNode<AdsrType>;

import { LatchType } from "../types";
/**
 * A sample and hold node. Samples a new value from the incoming signal on a
 * rising edge of a pulse train, then holds and emits that value until the
 * next rising edge of the pulse train.
 *
 * @see TypeNode
 * @see LatchType
 */
export type LatchNode = TypeNode<LatchType>;

import { SeqType } from "../types";
/**
 * A simple signal sequencer. Receives a sequence of values and steps through
 * them on each rising edge of an incoming pulse train.
 *
 * @see TypeNode
 * @see SeqType
 */
export type SeqNode = TypeNode<SeqType>;

import { HannType } from "../types";
/**
 * A simple Hann window generator. The window is generated according to an
 * incoming phasor signal, where a phase value of 0 corresponds to the left
 * hand side of the window, and a phase value of 1 corresponds to the right
 * hand side of the window.
 *
 * @see TypeNode
 * @see HannType
 */
export type HannNode = TypeNode<HannType>;
