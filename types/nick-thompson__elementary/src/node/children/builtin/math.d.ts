import { Child } from "../children";
import { VariadicChildrenArray } from "../array";

/**
 * Sin node children.
 */
export type SinChildren = [
  /**
   * Signal to compute the sine of.
   */
  signal: Child
];

/**
 * Cos node children.
 */
export type CosChildren = [
  /**
   * Signal to compute the cosine of.
   */
  signal: Child
];

/**
 * Tan node children.
 */
export type TanChildren = [
  /**
   * Signal to compute the tangent of.
   */
  signal: Child
];

/**
 * Tanh node children.
 */
export type TanhChildren = [
  /**
   * Signal to compute the hyperbolic tangent of.
   */
  signal: Child
];

/**
 * Asinh node children.
 */
export type AsinhChildren = [
  /**
   * Signal to compute the inverse hyperbolic sine of.
   */
  signal: Child
];

/**
 * Ln node children.
 */
export type LnChildren = [
  /**
   * Signal to compute the natural logarithm of.
   */
  signal: Child
];

/**
 * Log node children.
 */
export type LogChildren = [
  /**
   * Signal to compute the base 10 logarithm of.
   */
  signal: Child
];

/**
 * Log2 node children.
 */
export type Log2Children = [
  /**
   * Signal to compute the base 2 logarithm of.
   */
  signal: Child
];

/**
 * Ceil node children.
 */
export type CeilChildren = [
  /**
   * Signal to compute the ceiling (rounding up to the nearest whole number)
   * of.
   */
  signal: Child
];

/**
 * Floor node children.
 */
export type FloorChildren = [
  /**
   * Signal to compute the floor (rounding up to the nearest whole number) of.
   */
  signal: Child
];

/**
 * Sqrt node children.
 */
export type SqrtChildren = [
  /**
   * Signal to compute the square root of.
   */
  signal: Child
];

/**
 * Exp node children.
 */
export type ExpChildren = [
  /**
   * Signal with which to exponantiate the Euler's number.
   */
  signal: Child
];

/**
 * Abs node children.
 */
export type AbsChildren = [
  /**
   * Signal to compute absolute value of.
   */
  signal: Child
];

/**
 * Le node children.
 */
export type LeChildren = [
  /**
   * Left hand side of the "lesser than" operator.
   */
  lhs: Child,

  /**
   * Right hand side of the "lesser than" operator.
   */
  rhs: Child
];

/**
 * Leq node children.
 */
export type LeqChildren = [
  /**
   * Left hand side of the "lesser than or equal to" operator.
   */
  lhs: Child,

  /**
   * Right hand side of the "lesser than or equal to" operator.
   */
  rhs: Child
];

/**
 * Ge node children.
 */
export type GeChildren = [
  /**
   * Left hand side of the "greater than" operator.
   */
  lhs: Child,

  /**
   * Right hand side of the "greater than" operator.
   */
  rhs: Child
];

/**
 * Geq node children.
 */
export type GeqChildren = [
  /**
   * Left hand side of the "greater than or equal to" operator.
   */
  lhs: Child,

  /**
   * Right hand side of the "greater than or equal to" operator.
   */
  rhs: Child
];

/**
 * Pow node children.
 */
export type PowChildren = [
  /**
   * Operand to compute the power of.
   */
  op: Child,

  /**
   * Exponent whith which to exponantiate the oparand.
   */
  exp: Child
];

/**
 * Mod node children.
 */
export type ModChildren = [
  /**
   * Left hand side of the modulo operator.
   */
  lhs: Child,

  /**
   * Right hand side of the modulo operator.
   */
  rhs: Child
];

/**
 * Min node children.
 */
export type MinChildren = [
  /**
   * First input signal.
   */
  a: Child,

  /**
   * Second input signal.
   */
  b: Child
];

/**
 * Max node children.
 */
export type MaxChildren = [
  /**
   * First input signal.
   */
  a: Child,

  /**
   * Second input signal.
   */
  b: Child
];

/**
 * Add node children.
 */
export type AddChildren = VariadicChildrenArray;

/**
 * Sub node children.
 */
export type SubChildren = VariadicChildrenArray;

/**
 * Mul node children.
 */
export type MulChildren = VariadicChildrenArray;

/**
 * Div node children.
 */
export type DivChildren = VariadicChildrenArray;
