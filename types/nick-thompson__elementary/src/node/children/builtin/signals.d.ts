import { Child } from "../children";

/**
 * EnvNode children.
 *
 * @see Child
 */
export type EnvChildren = [
  /**
   * Pole position for the attack phase.
   */
  attack: Child,

  /**
   * Pole position for the release phase.
   */
  release: Child,

  /**
   * Signal to monitor.
   */
  signal: Child
];

/**
 * AdsrNode children.
 *
 * @see Child
 */
export type AdsrChildren = [
  /**
   * Attack time in seconds.
   */
  attack: Child,

  /**
   * Decay time in seconds.
   */
  decay: Child,

  /**
   * Sustain amplitude.
   */
  sustain: Child,

  /**
   * Release time in seconds.
   */
  release: Child,

  /**
   * Gate that triggers the ADSR envelope.
   */
  gate: Child
];

/**
 * LatchNode children.
 *
 * @see Child
 */
export type LatchChildren = [
  /**
   * Pulse train that determines when to move on to the next sample.
   */
  control: Child,

  /**
   * Signal to sample.
   */
  signal: Child
];

/**
 * SeqNode children.
 *
 * @see Child
 */
export type SeqChildren = [
  /**
   * Pulse train that determines when to move on to the next step.
   */
  control: Child,

  /**
   * Pulse train that determines when to reset the sequence.
   */
  reset?: Child
];

/**
 * HannNode children.
 *
 * @see Child
 */
export type HannChildren = [
  /**
   * Incoming phase of the Hann window.
   */
  phase: Child
];
