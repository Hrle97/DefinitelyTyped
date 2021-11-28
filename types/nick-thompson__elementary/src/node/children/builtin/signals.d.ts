import { node } from "@nick-thompson/elementary";

/**
 * {@link node.EnvNode} {@link node.Child}ren.
 *
 * @see node.EnvNode
 * @see node.Child
 */
export type EnvChildren = [
  /**
   * Pole position for the attack phase.
   */
  attack: node.Child,

  /**
   * Pole position for the release phase.
   */
  release: node.Child,

  /**
   * Signal to monitor.
   */
  signal: node.Child
];

/**
 * {@link node.AdsrNode} {@link node.Child}ren.
 *
 * @see node.AdsrNode
 * @see node.Child
 */
export type AdsrChildren = [
  /**
   * Attack time in seconds.
   */
  attack: node.Child,

  /**
   * Decay time in seconds.
   */
  decay: node.Child,

  /**
   * Sustain amplitude.
   */
  sustain: node.Child,

  /**
   * Release time in seconds.
   */
  release: node.Child,

  /**
   * Gate that triggers the ADSR envelope.
   */
  gate: node.Child
];

/**
 * {@link node.LatchNode} {@link node.Child}ren.
 *
 * @see node.LatchNode
 * @see node.Child
 */
export type LatchChildren = [
  /**
   * Pulse train that determines when to move on to the next sample.
   */
  control: node.Child,

  /**
   * Signal to sample.
   */
  signal: node.Child
];

/**
 * {@link node.SeqNode} {@link node.Child}ren.
 *
 * @see node.SeqNode
 * @see node.Child
 */
export type SeqChildren = [
  /**
   * Pulse train that determines when to move on to the next step.
   */
  control: node.Child,

  /**
   * Pulse train that determines when to reset the sequence.
   */
  reset?: node.Child
];

/**
 * {@link node.HannNode} {@link node.Child}ren.
 *
 * @see node.HannNode
 * @see node.Child
 */
export type HannChildren = [
  /**
   * Incoming phase of the Hann window.
   */
  phase: node.Child
];
