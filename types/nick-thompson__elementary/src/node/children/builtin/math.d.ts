import { Child } from "../children";
import { VariadicChildrenArray } from "../array";

/**
 * SinNode children.
 *
 * @see Child
 */
export type SinChildren = [
  /**
   * Signal to compute the sine of.
   */
  signal: Child
];

/**
 * CosNode children.
 *
 * @see Child
 */
export type CosChildren = [
  /**
   * Signal to compute the cosine of.
   */
  signal: Child
];

/**
 * TanNode children.
 *
 * @see Child
 */
export type TanChildren = [
  /**
   * Signal to compute the tangent of.
   */
  signal: Child
];

/**
 * TanhNode children.
 *
 * @see Child
 */
export type TanhChildren = [
  /**
   * Signal to compute the hyperbolic tangent of.
   */
  signal: Child
];

/**
 * AsinhNode children.
 *
 * @see Child
 */
export type AsinhChildren = [
  /**
   * Signal to compute the inverse hyperbolic sine of.
   */
  signal: Child
];

/**
 * LnNode children.
 *
 * @see Child
 */
export type LnChildren = [
  /**
   * Signal to compute the natural logarithm of.
   */
  signal: Child
];

/**
 * LogNode children.
 *
 * @see Child
 */
export type LogChildren = [
  /**
   * Signal to compute the base 10 logarithm of.
   */
  signal: Child
];

/**
 * Log2Node children.
 *
 * @see Child
 */
export type Log2Children = [
  /**
   * Signal to compute the base 2 logarithm of.
   */
  signal: Child
];

/**
 * CeilNode children.
 *
 * @see Child
 */
export type CeilChildren = [
  /**
   * Signal to compute the ceiling (rounding up to the nearest whole number)
   * of.
   */
  signal: Child
];

/**
 * FloorNode children.
 *
 * @see Child
 */
export type FloorChildren = [
  /**
   * Signal to compute the floor (rounding up to the nearest whole number) of.
   */
  signal: Child
];

/**
 * SqrtNode children.
 *
 * @see Child
 */
export type SqrtChildren = [
  /**
   * Signal to compute the square root of.
   */
  signal: Child
];

/**
 * ExpNode children.
 *
 * @see Child
 */
export type ExpChildren = [
  /**
   * Signal with which to exponantiate the Euler's number.
   */
  signal: Child
];

/**
 * AbsNode children.
 *
 * @see Child
 */
export type AbsChildren = [
  /**
   * Signal to compute absolute value of.
   */
  signal: Child
];

/**
 * LeNode children.
 *
 * @see Child
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
 * LeqNode children.
 *
 * @see Child
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
 * GeNode children.
 *
 * @see Child
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
 * GeqNode children.
 *
 * @see Child
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
 * PowNode children.
 *
 * @see Child
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
 * ModNode children.
 *
 * @see Child
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
 * MinNode children.
 *
 * @see Child
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
 * MaxNode children.
 *
 * @see Child
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
 * AddNode children.
 *
 * @see VariadicChildrenArray
 */
export type AddChildren = VariadicChildrenArray;

/**
 * SubNode children.
 *
 * @see VariadicChildrenArray
 */
export type SubChildren = VariadicChildrenArray;

/**
 * MulNode children.
 *
 * @see VariadicChildrenArray
 */
export type MulChildren = VariadicChildrenArray;

/**
 * DivNode children.
 *
 * @see VariadicChildrenArray
 */
export type DivChildren = VariadicChildrenArray;
