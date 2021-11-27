import { Child } from "../children";

/**
 * PoleNode children.
 *
 * @see Child
 */
export type PoleChildren = [
  /**
   * Pole position.
   */
  position: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * ZeroNode children.
 *
 * @see Child
 */
export type ZeroChildren = [
  /**
   * b0 coefficient.
   */
  b0: Child,

  /**
   * b1 coefficient.
   */
  b1: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * DcBlockNode children.
 *
 * @see Child
 */
export type DcBlockChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * Df11Node children.
 *
 * @see Child
 */
export type Df11Children = [
  /**
   * b0 coefficient.
   */
  b0: Child,

  /**
   * b1 coefficient.
   */
  b1: Child,

  /**
   * a1 coefficient.
   */
  a1: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * SmoothNode children.
 *
 * @see Child
 */
export type SmoothChildren = [
  /**
   * Pole position.
   */
  position: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * SmNode children.
 *
 * @see Child
 */
export type SmChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * BiquadNode children.
 *
 * @see Child
 */
export type BiquadChildren = [
  /**
   * b0 coefficient.
   */
  b0: Child,

  /**
   * b1 coefficient.
   */
  b1: Child,

  /**
   * b2 coefficient.
   */
  b2: Child,

  /**
   * a1 coefficient.
   */
  a1: Child,

  /**
   * a2 coefficient.
   */
  a2: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * LowPassNode children.
 *
 * @see Child
 */
export type LowPassChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: Child,

  /**
   * Q of the filter.
   */
  q: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * HighPassNode children.
 *
 * @see Child
 */
export type HighPassChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: Child,

  /**
   * Q of the filter.
   */
  q: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * BandPassNode children.
 *
 * @see Child
 */
export type BandPassChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: Child,

  /**
   * Q of the filter.
   */
  q: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * AllPassNode children.
 *
 * @see Child
 */
export type AllPassChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: Child,

  /**
   * Q of the filter.
   */
  q: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * NotchNode children.
 *
 * @see Child
 */
export type NotchChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: Child,

  /**
   * Q of the filter.
   */
  q: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * PeakNode children.
 *
 * @see Child
 */
export type PeakChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: Child,

  /**
   * Q of the filter.
   */
  q: Child,

  /**
   * Gain of the filter in decibels.
   */
  gain: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * LowShelfNode children.
 *
 * @see Child
 */
export type LowShelfChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: Child,

  /**
   * Q of the filter.
   */
  q: Child,

  /**
   * Gain of the filter in decibels.
   */
  gain: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * HighShelfNode children.
 *
 * @see Child
 */
export type HighShelfChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: Child,

  /**
   * Q of the filter.
   */
  q: Child,

  /**
   * Gain of the filter in decibels.
   */
  gain: Child,

  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * ConvolveNode children.
 *
 * @see Child
 */
export type ConvolveChildren = [
  /**
   * Signal to convolve.
   */
  signal: Child
];

/**
 * PinkNode children.
 *
 * @see Child
 */
export type PinkChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];
