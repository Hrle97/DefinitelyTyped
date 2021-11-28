import { node } from "@nick-thompson/elementary";

/**
 * {@link node.PoleNode} {@link node.Props}.
 *
 * @see node.PoleNode
 */
export interface PoleProps extends node.KeyProps {}

/**
 * {@link node.ZeroNode} {@link node.Props}.
 *
 * @see node.ZeroNode
 */
export interface ZeroProps extends node.KeyProps {}

/**
 * {@link node.DcBlockNode} {@link node.Props}.
 *
 * @see node.DcBlockNode
 */
export interface DcBlockProps extends node.KeyProps {}

/**
 * {@link node.Df11Node} {@link node.Props}.
 *
 * @see node.Df11Node
 */
export interface Df11Props extends node.KeyProps {}

/**
 * {@link node.SmoothNode} {@link node.Props}.
 *
 * @see node.SmoothNode
 */
export interface SmoothProps extends node.KeyProps {}

/**
 * {@link node.SmNode} {@link node.Props}.
 *
 * @see node.SmNode
 */
export interface SmProps extends node.KeyProps {}

/**
 * {@link node.BiquadNode} {@link node.Props}.
 *
 * @see node.BiquadNode
 */
export interface BiquadProps extends node.KeyProps {}

/**
 * {@link node.LowPassNode} {@link node.Props}.
 *
 * @see node.LowPassNode
 */
export interface LowPassProps extends node.KeyProps {}

/**
 * {@link node.HighPassNode} {@link node.Props}.
 *
 * @see node.HighPassNode
 */
export interface HighPassProps extends node.KeyProps {}

/**
 * {@link node.BandPassNode} {@link node.Props}.
 *
 * @see node.BandPassNode
 */
export interface BandPassProps extends node.KeyProps {}

/**
 * {@link node.AllPassNode} {@link node.Props}.
 *
 * @see node.AllPassNode
 */
export interface AllPassProps extends node.KeyProps {}

/**
 * {@link node.NotchNode} {@link node.Props}.
 *
 * @see node.NotchNode
 */
export interface NotchProps extends node.KeyProps {}

/**
 * {@link node.PeakNode} {@link node.Props}.
 *
 * @see node.PeakNode
 */
export interface PeakProps extends node.KeyProps {}

/**
 * {@link node.LowShelfNode} {@link node.Props}.
 *
 * @see node.LowShelfNode
 */
export interface LowShelfProps extends node.KeyProps {}

/**
 * {@link node.HighShelfNode} {@link node.Props}.
 *
 * @see node.HighShelfNode
 */
export interface HighShelfProps extends node.KeyProps {}

/**
 * {@link node.ConvolveNode} {@link node.Props}.
 *
 * @see node.ConvolveNode
 */
export interface ConvolveProps extends node.KeyProps {}

/**
 * {@link node.PinkNode} {@link node.Props}.
 *
 * @see node.PinkNode
 */
export interface PinkProps extends node.KeyProps {}

/**
 * {@link node.ConvolveNode} {@link node.Props}.
 *
 * @see node.ConvolveNode
 */
export interface ConvolveProps extends node.KeyProps {
  /**
   * Path to the file of the impulse response on disk.
   */
  path?: string;
}
