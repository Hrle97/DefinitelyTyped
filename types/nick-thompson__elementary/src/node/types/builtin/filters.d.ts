import { node } from "@nick-thompson/elementary";

/**
 * {@link node.PoleNode} {@link node.Type}.
 *
 * @see node.PoleNode
 * @see node.PoleName
 */
export type PoleType = node.PoleName;

/**
 * {@link node.ZeroNode} {@link node.Type}.
 *
 * @see node.ZeroNode
 * @see node.CompositeFunction
 * @see node.ZeroName
 * @see node.ZeroProps
 * @see node.ZeroChildren
 */
export type ZeroType = node.CompositeFunction<
  node.ZeroName,
  node.ZeroProps,
  node.ZeroChildren
>;

/**
 * {@link node.DcBlockNode} {@link node.Type}.
 *
 * @see node.DcBlockNode
 * @see node.CompositeFunction
 * @see node.DcBlockName
 * @see node.DcBlockProps
 * @see node.DcBlockChildren
 */
export type DcBlockType = node.CompositeFunction<
  "dcblock",
  node.DcBlockProps,
  node.DcBlockChildren
>;

/**
 * {@link node.Df11Node} {@link node.Type}.
 *
 * @see node.Df11Node
 * @see node.CompositeFunction
 * @see node.Df11Name
 * @see node.Df11Props
 * @see node.Df11Children
 */
export type Df11Type = node.CompositeFunction<
  node.Df11Name,
  node.Df11Props,
  node.Df11Children
>;

/**
 * {@link node.SmoothNode} {@link node.Type}.
 *
 * @see node.SmoothNode
 * @see node.CompositeFunction
 * @see node.SmoothName
 * @see node.SmoothProps
 * @see node.SmoothChildren
 */
export type SmoothType = node.CompositeFunction<
  "smooth",
  node.SmoothProps,
  node.SmoothChildren
>;

/**
 * {@link node.SmNode} {@link node.Type}.
 *
 * @see node.SmNode
 * @see node.CompositeFunction
 * @see node.SmName
 * @see node.SmProps
 * @see node.SmChildren
 */
export type SmType = node.CompositeFunction<
  node.SmName,
  node.SmProps,
  node.SmChildren
>;

/**
 * {@link node.BiquadNode} {@link node.Type}.
 *
 * @see node.BiquadNode
 * @see node.BiquadName
 */
export type BiquadType = node.BiquadName;

/**
 * {@link node.LowPassNode} {@link node.Type}.
 *
 * @see node.LowPassNode
 * @see node.CompositeFunction
 * @see node.LowPassName
 * @see node.LowPassProps
 * @see node.LowPassChildren
 */
export type LowPassType = node.CompositeFunction<
  node.LowPassName,
  node.LowPassProps,
  node.LowPassChildren
>;

/**
 * {@link node.HighPassNode} {@link node.Type}.
 *
 * @see node.HighPassNode
 * @see node.CompositeFunction
 * @see node.HighPassName
 * @see node.HighPassProps
 * @see node.HighPassChildren
 */
export type HighPassType = node.CompositeFunction<
  node.HighPassName,
  node.HighPassProps,
  node.HighPassChildren
>;

/**
 * {@link node.BandPassNode} {@link node.Type}.
 *
 * @see node.BandPassNode
 * @see node.CompositeFunction
 * @see node.BandPassName
 * @see node.BandPassProps
 * @see node.BandPassChildren
 */
export type BandPassType = node.CompositeFunction<
  node.BandPassName,
  node.BandPassProps,
  node.BandPassChildren
>;

/**
 * {@link node.AllPassNode} {@link node.Type}.
 *
 * @see node.AllPassNode
 * @see node.CompositeFunction
 * @see node.AllPassName
 * @see node.AllPassProps
 * @see node.AllPassChildren
 */
export type AllPassType = node.CompositeFunction<
  node.AllPassName,
  node.AllPassProps,
  node.AllPassChildren
>;

/**
 * {@link node.NotchNode} {@link node.Type}.
 *
 * @see node.NotchNode
 * @see node.CompositeFunction
 * @see node.NotchName
 * @see node.NotchProps
 * @see node.NotchChildren
 */
export type NotchType = node.CompositeFunction<
  node.NotchName,
  node.NotchProps,
  node.NotchChildren
>;

/**
 * {@link node.PeakNode} {@link node.Type}.
 *
 * @see node.PeakNode
 * @see node.CompositeFunction
 * @see node.PeakName
 * @see node.PeakProps
 * @see node.PeakChildren
 */
export type PeakType = node.CompositeFunction<
  node.PeakName,
  node.PeakProps,
  node.PeakChildren
>;

/**
 * {@link node.LowShelfNode} {@link node.Type}.
 *
 * @see node.LowShelfNode
 * @see node.CompositeFunction
 * @see node.LowShelfName
 * @see node.LowShelfProps
 * @see node.LowShelfChildren
 */
export type LowShelfType = node.CompositeFunction<
  node.LowShelfName,
  node.LowShelfProps,
  node.LowShelfChildren
>;

/**
 * {@link node.HighShelfNode} {@link node.Type}.
 *
 * @see node.HighShelfNode
 * @see node.CompositeFunction
 * @see node.HighShelfName
 * @see node.HighShelfProps
 * @see node.HighShelfChildren
 */
export type HighShelfType = node.CompositeFunction<
  node.HighShelfName,
  node.HighShelfProps,
  node.HighShelfChildren
>;

/**
 * {@link node.ConvolveNode} {@link node.Type}.
 *
 * @see node.ConvolveNode
 * @see node.ConvolveName
 */
export type ConvolveType = node.ConvolveName;

/**
 * {@link node.PinkNode} {@link node.Type}.
 *
 * @see node.PinkNode
 * @see node.CompositeFunction
 * @see node.PinkName
 * @see node.PinkProps
 * @see node.PinkChildren
 */
export type PinkType = node.CompositeFunction<
  node.PinkName,
  node.PinkProps,
  node.PinkChildren
>;
