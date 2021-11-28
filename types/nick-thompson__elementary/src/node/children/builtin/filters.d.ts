import { node } from "@nick-thompson/elementary";

/**
 * {@link node.PoleNode} {@link node.Child}ren.
 *
 * @see node.PoleNode
 * @see node.Child
 */
export type PoleChildren = [
  /**
   * Pole position.
   */
  position: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.ZeroNode} {@link node.Child}ren.
 *
 * @see node.ZeroNode
 * @see node.Child
 */
export type ZeroChildren = [
  /**
   * b0 coefficient.
   */
  b0: node.Child,

  /**
   * b1 coefficient.
   */
  b1: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.DcBlockNode} {@link node.Child}ren.
 *
 * @see node.DcBlockNode
 * @see node.Child
 */
export type DcBlockChildren = [
  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.Df11Node} {@link node.Child}ren.
 *
 * @see node.Df11Node
 * @see node.Child
 */
export type Df11Children = [
  /**
   * b0 coefficient.
   */
  b0: node.Child,

  /**
   * b1 coefficient.
   */
  b1: node.Child,

  /**
   * a1 coefficient.
   */
  a1: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.SmoothNode} {@link node.Child}ren.
 *
 * @see node.SmoothNode
 * @see node.Child
 */
export type SmoothChildren = [
  /**
   * Pole position.
   */
  position: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.SmNode} {@link node.Child}ren.
 *
 * @see node.SmNode
 * @see node.Child
 */
export type SmChildren = [
  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.BiquadNode} {@link node.Child}ren.
 *
 * @see node.BiquadNode
 * @see node.Child
 */
export type BiquadChildren = [
  /**
   * b0 coefficient.
   */
  b0: node.Child,

  /**
   * b1 coefficient.
   */
  b1: node.Child,

  /**
   * b2 coefficient.
   */
  b2: node.Child,

  /**
   * a1 coefficient.
   */
  a1: node.Child,

  /**
   * a2 coefficient.
   */
  a2: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.LowPassNode} {@link node.Child}ren.
 *
 * @see node.LowPassNode
 * @see node.Child
 */
export type LowPassChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: node.Child,

  /**
   * Q of the filter.
   */
  q: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.HighPassNode} {@link node.Child}ren.
 *
 * @see node.HighPassNode
 * @see node.Child
 */
export type HighPassChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: node.Child,

  /**
   * Q of the filter.
   */
  q: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.BandPassNode} {@link node.Child}ren.
 *
 * @see node.BandPassNode
 * @see node.Child
 */
export type BandPassChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: node.Child,

  /**
   * Q of the filter.
   */
  q: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.AllPassNode} {@link node.Child}ren.
 *
 * @see node.AllPassNode
 * @see node.Child
 */
export type AllPassChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: node.Child,

  /**
   * Q of the filter.
   */
  q: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.NotchNode} {@link node.Child}ren.
 *
 * @see node.NotchNode
 * @see node.Child
 */
export type NotchChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: node.Child,

  /**
   * Q of the filter.
   */
  q: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.PeakNode} {@link node.Child}ren.
 *
 * @see node.PeakNode
 * @see node.Child
 */
export type PeakChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: node.Child,

  /**
   * Q of the filter.
   */
  q: node.Child,

  /**
   * Gain of the filter in decibels.
   */
  gain: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.LowShelfNode} {@link node.Child}ren.
 *
 * @see node.LowShelfNode
 * @see node.Child
 */
export type LowShelfChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: node.Child,

  /**
   * Q of the filter.
   */
  q: node.Child,

  /**
   * Gain of the filter in decibels.
   */
  gain: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.HighShelfNode} {@link node.Child}ren.
 *
 * @see node.HighShelfNode
 * @see node.Child
 */
export type HighShelfChildren = [
  /**
   * Cutoff frequency of the filter.
   */
  cutoff: node.Child,

  /**
   * Q of the filter.
   */
  q: node.Child,

  /**
   * Gain of the filter in decibels.
   */
  gain: node.Child,

  /**
   * Signal to filter.
   */
  signal: node.Child
];

/**
 * {@link node.ConvolveNode} {@link node.Child}ren.
 *
 * @see node.ConvolveNode
 * @see node.Child
 */
export type ConvolveChildren = [
  /**
   * Signal to convolve.
   */
  signal: node.Child
];

/**
 * {@link node.PinkNode} {@link node.Child}ren.
 *
 * @see node.PinkNode
 * @see node.Child
 */
export type PinkChildren = [
  /**
   * Signal to filter.
   */
  signal: node.Child
];
