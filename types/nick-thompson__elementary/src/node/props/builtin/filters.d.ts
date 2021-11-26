import { KeyProps } from "../props";

/**
 * PoleNode props.
 */
export interface PoleProps extends KeyProps {}

/**
 * ZeroNode props.
 */
export interface ZeroProps extends KeyProps {}

/**
 * DcBlockNode props.
 */
export interface DcBlockProps extends KeyProps {}

/**
 * Df11Node props.
 */
export interface Df11Props extends KeyProps {}

/**
 * SmoothNode props.
 */
export interface SmoothProps extends KeyProps {}

/**
 * SmNode props.
 */
export interface SmProps extends KeyProps {}

/**
 * BiquadNode props.
 */
export interface BiquadProps extends KeyProps {}

/**
 * LowPassNode props.
 */
export interface LowPassProps extends KeyProps {}

/**
 * HighPassNode props.
 */
export interface HighPassProps extends KeyProps {}

/**
 * BandPassNode props.
 */
export interface BandPassProps extends KeyProps {}

/**
 * AllPassNode props.
 */
export interface AllPassProps extends KeyProps {}

/**
 * NotchNode props.
 */
export interface NotchProps extends KeyProps {}

/**
 * PeakNode props.
 */
export interface PeakProps extends KeyProps {}

/**
 * LowShelfNode props.
 */
export interface LowShelfProps extends KeyProps {}

/**
 * HighShelfNode props.
 */
export interface HighShelfProps extends KeyProps {}

/**
 * ConvolveNode props.
 */
export interface ConvolveProps extends KeyProps {}

/**
 * PinkNode props.
 */
export interface PinkProps extends KeyProps {}

/**
 * ConvolveNode props.
 */
export interface ConvolveProps extends KeyProps {
  /**
   * Path to the file of the impulse response on disk.
   */
  path?: string;
}
