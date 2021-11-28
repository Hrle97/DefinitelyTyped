import { node } from "@nick-thompson/elementary";

/**
 * Computes the sine of the input signal.
 *
 * @see node.TypeNode
 * @see node.SinType
 */
export type SinNode = node.TypeNode<node.SinType>;

/**
 * Computes the cosine of the input signal.
 *
 * @see node.TypeNode
 * @see node.CosType
 */
export type CosNode = node.TypeNode<node.CosType>;

/**
 * Computes the tangent of the input signal.
 *
 * @see node.TypeNode
 * @see node.TanType
 */
export type TanNode = node.TypeNode<node.TanType>;

/**
 * Computes the hyperbolic tangent of the input signal.
 *
 * @see node.TypeNode
 * @see node.TanhType
 */
export type TanhNode = node.TypeNode<node.TanhType>;

/**
 * Computes the inverse hyperbolic sine of the input signal.
 *
 * @see node.TypeNode
 * @see node.AsinhType
 */
export type AsinhNode = node.TypeNode<node.AsinhType>;

/**
 * Computes the natural logarithm (where the base is Euler's number) of
 * the input signal.
 *
 * @see node.TypeNode
 * @see node.LnType
 */
export type LnNode = node.TypeNode<node.LnType>;

/**
 * Computes the log (where the base is 10) of the input signal.
 *
 * @see node.TypeNode
 * @see node.LogType
 */
export type LogNode = node.TypeNode<node.LogType>;

/**
 * Computes the log (where the base is 2) of the input signal.
 *
 * @see node.TypeNode
 * @see node.Log2Type
 */
export type Log2Node = node.TypeNode<node.Log2Type>;

/**
 * Computes the ceiling (rounding up to the nearest whole number) of the input
 * signal.
 *
 * @see node.TypeNode
 * @see node.CeilType
 */
export type CeilNode = node.TypeNode<node.CeilType>;

/**
 * Computes the floor (rounding down to the nearest whole number) of the input
 * signal.
 *
 * @see node.TypeNode
 * @see node.FloorType
 */
export type FloorNode = node.TypeNode<node.FloorType>;

/**
 * Computes the square root of the input signal.
 *
 * @see node.TypeNode
 * @see node.SqrtType
 */
export type SqrtNode = node.TypeNode<node.SqrtType>;

/**
 * Exponentiates Euler's number with the input signal.
 *
 * @see node.TypeNode
 * @see node.ExpType
 */
export type ExpNode = node.TypeNode<node.ExpType>;

/**
 * Computes the absolute value of the input signal.
 *
 * @see node.TypeNode
 * @see node.AbsType
 */
export type AbsNode = node.TypeNode<node.AbsType>;

/**
 * Compares the first input to the second input, returning 1 when the first is
 * less than the second, and 0 otherwise.
 *
 * @see node.TypeNode
 * @see node.LeType
 */
export type LeNode = node.TypeNode<node.LeType>;

/**
 * Compares the first input to the second input, returning 1 when the first is
 * less than or equal to the second, and 0 otherwise.
 *
 * @see node.TypeNode
 * @see node.LeqType
 */
export type LeqNode = node.TypeNode<node.LeqType>;

/**
 * Compares the first input to the second input, returning 1 when the first is
 * greater than the second, and 0 otherwise.
 *
 * @see node.TypeNode
 * @see node.GeType
 */
export type GeNode = node.TypeNode<node.GeType>;

/**
 * Compares the first input to the second input, returning 1 when the first is
 * greater than or equal to the second, and 0 otherwise.
 *
 * @see node.TypeNode
 * @see node.GeqType
 */
export type GeqNode = node.TypeNode<node.GeqType>;

/**
 * Exponentiates the first input signal with the second.
 *
 * @see node.TypeNode
 * @see node.PowType
 */
export type PowNode = node.TypeNode<node.PowType>;

/**
 * Modulo operator.
 *
 * Outputs the remainder of division of the first input signal with the
 * second.
 *
 * @see node.TypeNode
 * @see node.ModType
 */
export type ModNode = node.TypeNode<node.ModType>;

/**
 * Outputs the minimal result of the two incoming signals.
 *
 * @see node.TypeNode
 * @see node.MinType
 */
export type MinNode = node.TypeNode<node.MinType>;

/**
 * Outputs the maximal result of the two incoming signals.
 *
 * @see node.TypeNode
 * @see node.MaxType
 */
export type MaxNode = node.TypeNode<node.MaxType>;

/**
 * Adds up the incoming signals (left fold with the addition operator).
 *
 * @see node.TypeNode
 * @see node.AddType
 */
export type AddNode = node.TypeNode<node.AddType>;

/**
 * Subtracts the incoming signals (left fold with the subtraction operator).
 *
 * @see node.TypeNode
 * @see node.SubType
 */
export type SubNode = node.TypeNode<node.SubType>;

/**
 * Multiplies the incoming signals (left fold with the multiplication
 * operator).
 *
 * @see node.TypeNode
 * @see node.MulType
 */
export type MulNode = node.TypeNode<node.MulType>;

/**
 * Divides the incoming signals (left fold with the division operator).
 *
 * @see node.TypeNode
 * @see node.DivType
 */
export type DivNode = node.TypeNode<node.DivType>;
