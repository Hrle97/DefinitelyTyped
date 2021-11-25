import { Child } from "../children";

/**
 * Pole node children.
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
 * Zero node children.
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
 * DcBlock node children.
 */
export type DcBlockChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * Df11 node children.
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
 * Smooth node children.
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
 * Sm node children.
 */
export type SmChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];

/**
 * Biquad node children.
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
 * LowPass node children.
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
 * HighPass node children.
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
 * BandPass node children.
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
 * AllPass node children.
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
 * Notch node children.
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
 * Peak node children.
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
 * LowShelf node children.
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
 * HighShelf node children.
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
 * Convolve node children.
 */
export type ConvolveChildren = [
  /**
   * Signal to convolve.
   */
  signal: Child
];

/**
 * Pink node children.
 */
export type PinkChildren = [
  /**
   * Signal to filter.
   */
  signal: Child
];
