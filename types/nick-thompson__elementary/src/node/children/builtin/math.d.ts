import { node } from "@nick-thompson/elementary";

/**
 * {@link node.SinNode} {@link node.Child}ren.
 *
 * @see node.SinNode
 * @see node.Child
 */
export type SinChildren = [
  /**
   * Signal to compute the sine of.
   */
  signal: node.Child
];

/**
 * {@link node.CosNode} {@link node.Child}ren.
 *
 * @see node.CosNode
 * @see node.Child
 */
export type CosChildren = [
  /**
   * Signal to compute the cosine of.
   */
  signal: node.Child
];

/**
 * {@link node.TanNode} {@link node.Child}ren.
 *
 * @see node.TanNode
 * @see node.Child
 */
export type TanChildren = [
  /**
   * Signal to compute the tangent of.
   */
  signal: node.Child
];

/**
 * {@link node.TanhNode} {@link node.Child}ren.
 *
 * @see node.TanhNode
 * @see node.Child
 */
export type TanhChildren = [
  /**
   * Signal to compute the hyperbolic tangent of.
   */
  signal: node.Child
];

/**
 * {@link node.AsinhNode} {@link node.Child}ren.
 *
 * @see node.AsinhNode
 * @see node.Child
 */
export type AsinhChildren = [
  /**
   * Signal to compute the inverse hyperbolic sine of.
   */
  signal: node.Child
];

/**
 * {@link node.LnNode} {@link node.Child}ren.
 *
 * @see node.LnNode
 * @see node.Child
 */
export type LnChildren = [
  /**
   * Signal to compute the natural logarithm of.
   */
  signal: node.Child
];

/**
 * {@link node.LogNode} {@link node.Child}ren.
 *
 * @see node.LogNode
 * @see node.Child
 */
export type LogChildren = [
  /**
   * Signal to compute the base 10 logarithm of.
   */
  signal: node.Child
];

/**
 * {@link node.Log2Node} {@link node.Child}ren.
 *
 * @see node.Log2Node
 * @see node.Child
 */
export type Log2Children = [
  /**
   * Signal to compute the base 2 logarithm of.
   */
  signal: node.Child
];

/**
 * {@link node.CeilNode} {@link node.Child}ren.
 *
 * @see node.CeilNode
 * @see node.Child
 */
export type CeilChildren = [
  /**
   * Signal to compute the ceiling (rounding up to the nearest whole number)
   * of.
   */
  signal: node.Child
];

/**
 * {@link node.FloorNode} {@link node.Child}ren.
 *
 * @see node.FloorNode
 * @see node.Child
 */
export type FloorChildren = [
  /**
   * Signal to compute the floor (rounding up to the nearest whole number) of.
   */
  signal: node.Child
];

/**
 * {@link node.SqrtNode} {@link node.Child}ren.
 *
 * @see node.SqrtNode
 * @see node.Child
 */
export type SqrtChildren = [
  /**
   * Signal to compute the square root of.
   */
  signal: node.Child
];

/**
 * {@link node.ExpNode} {@link node.Child}ren.
 *
 * @see node.ExpNode
 * @see node.Child
 */
export type ExpChildren = [
  /**
   * Signal with which to exponantiate the Euler's number.
   */
  signal: node.Child
];

/**
 * {@link node.AbsNode} {@link node.Child}ren.
 *
 * @see node.AbsNode
 * @see node.Child
 */
export type AbsChildren = [
  /**
   * Signal to compute absolute value of.
   */
  signal: node.Child
];

/**
 * {@link node.LeNode} {@link node.Child}ren.
 *
 * @see node.LeNode
 * @see node.Child
 */
export type LeChildren = [
  /**
   * Left hand side of the "lesser than" operator.
   */
  lhs: node.Child,

  /**
   * Right hand side of the "lesser than" operator.
   */
  rhs: node.Child
];

/**
 * {@link node.LeqNode} {@link node.Child}ren.
 *
 * @see node.LeqNode
 * @see node.Child
 */
export type LeqChildren = [
  /**
   * Left hand side of the "lesser than or equal to" operator.
   */
  lhs: node.Child,

  /**
   * Right hand side of the "lesser than or equal to" operator.
   */
  rhs: node.Child
];

/**
 * {@link node.GeNode} {@link node.Child}ren.
 *
 * @see node.GeNode
 * @see node.Child
 */
export type GeChildren = [
  /**
   * Left hand side of the "greater than" operator.
   */
  lhs: node.Child,

  /**
   * Right hand side of the "greater than" operator.
   */
  rhs: node.Child
];

/**
 * {@link node.GeqNode} {@link node.Child}ren.
 *
 * @see node.GeqNode
 * @see node.Child
 */
export type GeqChildren = [
  /**
   * Left hand side of the "greater than or equal to" operator.
   */
  lhs: node.Child,

  /**
   * Right hand side of the "greater than or equal to" operator.
   */
  rhs: node.Child
];

/**
 * {@link node.PowNode} {@link node.Child}ren.
 *
 * @see node.PowNode
 * @see node.Child
 */
export type PowChildren = [
  /**
   * Operand to compute the power of.
   */
  op: node.Child,

  /**
   * Exponent whith which to exponantiate the oparand.
   */
  exp: node.Child
];

/**
 * {@link node.ModNode} {@link node.Child}ren.
 *
 * @see node.ModNode
 * @see node.Child
 */
export type ModChildren = [
  /**
   * Left hand side of the modulo operator.
   */
  lhs: node.Child,

  /**
   * Right hand side of the modulo operator.
   */
  rhs: node.Child
];

/**
 * {@link node.MinNode} {@link node.Child}ren.
 *
 * @see node.MinNode
 * @see node.Child
 */
export type MinChildren = [
  /**
   * First input signal.
   */
  a: node.Child,

  /**
   * Second input signal.
   */
  b: node.Child
];

/**
 * {@link node.MaxNode} {@link node.Child}ren.
 *
 * @see node.MaxNode
 * @see node.Child
 */
export type MaxChildren = [
  /**
   * First input signal.
   */
  a: node.Child,

  /**
   * Second input signal.
   */
  b: node.Child
];

/**
 * {@link node.AddNode} {@link node.Child}ren.
 *
 * @see node.AddNode
 * @see node.VariadicChildrenArray
 */
export type AddChildren = node.VariadicChildrenArray;

/**
 * {@link node.SubNode} {@link node.Child}ren.
 *
 * @see node.SubNode
 * @see node.VariadicChildrenArray
 */
export type SubChildren = node.VariadicChildrenArray;

/**
 * {@link node.MulNode} {@link node.Child}ren.
 *
 * @see node.MulNode
 * @see node.VariadicChildrenArray
 */
export type MulChildren = node.VariadicChildrenArray;

/**
 * {@link node.DivNode} {@link node.Child}ren.
 *
 * @see node.DivNode
 * @see node.VariadicChildrenArray
 */
export type DivChildren = node.VariadicChildrenArray;
