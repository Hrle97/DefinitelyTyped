import { Child } from "../children";

/**
 * PoleNode children.
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
 */
export type DcBlockChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * Df11Node children.
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
 */
export type SmChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * BiquadNode children.
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
 */
export type ConvolveChildren = [
  /**
   * Signal to convolve.
   */
  signal: Child
];

/**
 * PinkNode children.
 */
export type PinkChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];
