import { Child } from "../children";
import { VariadicChildrenArray } from "../array";

/**
 * SinNode children.
 */
export type SinChildren = [
  /**
   * Signal to compute the sine of.
   */
  signal: Child
];

/**
 * CosNode children.
 */
export type CosChildren = [
  /**
   * Signal to compute the cosine of.
   */
  signal: Child
];

/**
 * TanNode children.
 */
export type TanChildren = [
  /**
   * Signal to compute the tangent of.
   */
  signal: Child
];

/**
 * TanhNode children.
 */
export type TanhChildren = [
  /**
   * Signal to compute the hyperbolic tangent of.
   */
  signal: Child
];

/**
 * AsinhNode children.
 */
export type AsinhChildren = [
  /**
   * Signal to compute the inverse hyperbolic sine of.
   */
  signal: Child
];

/**
 * LnNode children.
 */
export type LnChildren = [
  /**
   * Signal to compute the natural logarithm of.
   */
  signal: Child
];

/**
 * LogNode children.
 */
export type LogChildren = [
  /**
   * Signal to compute the base 10 logarithm of.
   */
  signal: Child
];

/**
 * Log2Node children.
 */
export type Log2Children = [
  /**
   * Signal to compute the base 2 logarithm of.
   */
  signal: Child
];

/**
 * CeilNode children.
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
 */
export type FloorChildren = [
  /**
   * Signal to compute the floor (rounding up to the nearest whole number) of.
   */
  signal: Child
];

/**
 * SqrtNode children.
 */
export type SqrtChildren = [
  /**
   * Signal to compute the square root of.
   */
  signal: Child
];

/**
 * ExpNode children.
 */
export type ExpChildren = [
  /**
   * Signal with which to exponantiate the Euler's number.
   */
  signal: Child
];

/**
 * AbsNode children.
 */
export type AbsChildren = [
  /**
   * Signal to compute absolute value of.
   */
  signal: Child
];

/**
 * LeNode children.
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
 */
export type AddChildren = VariadicChildrenArray;

/**
 * SubNode children.
 */
export type SubChildren = VariadicChildrenArray;

/**
 * MulNode children.
 */
export type MulChildren = VariadicChildrenArray;

/**
 * DivNode children.
 */
export type DivChildren = VariadicChildrenArray;
