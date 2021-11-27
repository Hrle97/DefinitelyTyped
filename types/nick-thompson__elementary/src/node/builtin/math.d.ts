import { TypeNode } from "../node";

import { SinType } from "../types";
/**
 * Computes the sine of the input signal.
 *
 * @see TypeNode
 * @see SinType
 */
export type SinNode = TypeNode<SinType>;

import { CosType } from "../types";
/**
 * Computes the cosine of the input signal.
 *
 * @see TypeNode
 * @see CosType
 */
export type CosNode = TypeNode<CosType>;

import { TanType } from "../types";
/**
 * Computes the tangent of the input signal.
 *
 * @see TypeNode
 * @see TanType
 */
export type TanNode = TypeNode<TanType>;

import { TanhType } from "../types";
/**
 * Computes the hyperbolic tangent of the input signal.
 *
 * @see TypeNode
 * @see TanhType
 */
export type TanhNode = TypeNode<TanhType>;

import { AsinhType } from "../types";
/**
 * Computes the inverse hyperbolic sine of the input signal.
 *
 * @see TypeNode
 * @see AsinhType
 */
export type AsinhNode = TypeNode<AsinhType>;

import { LnType } from "../types";
/**
 * Computes the natural logarithm (where the base is Euler's number) of
 * the input signal.
 *
 * @see TypeNode
 * @see LnType
 */
export type LnNode = TypeNode<LnType>;

import { LogType } from "../types";
/**
 * Computes the log (where the base is 10) of the input signal.
 *
 * @see TypeNode
 * @see LogType
 */
export type LogNode = TypeNode<LogType>;

import { Log2Type } from "../types";
/**
 * Computes the log (where the base is 2) of the input signal.
 *
 * @see TypeNode
 * @see Log2Type
 */
export type Log2Node = TypeNode<Log2Type>;

import { CeilType } from "../types";
/**
 * Computes the ceiling (rounding up to the nearest whole number) of the input
 * signal.
 *
 * @see TypeNode
 * @see CeilType
 */
export type CeilNode = TypeNode<CeilType>;

import { FloorType } from "../types";
/**
 * Computes the floor (rounding down to the nearest whole number) of the input
 * signal.
 *
 * @see TypeNode
 * @see FloorType
 */
export type FloorNode = TypeNode<FloorType>;

import { SqrtType } from "../types";
/**
 * Computes the square root of the input signal.
 *
 * @see TypeNode
 * @see SqrtType
 */
export type SqrtNode = TypeNode<SqrtType>;

import { ExpType } from "../types";
/**
 * Exponentiates Euler's number with the input signal.
 *
 * @see TypeNode
 * @see ExpType
 */
export type ExpNode = TypeNode<ExpType>;

import { AbsType } from "../types";
/**
 * Computes the absolute value of the input signal.
 *
 * @see TypeNode
 * @see AbsType
 */
export type AbsNode = TypeNode<AbsType>;

import { LeType } from "../types";
/**
 * Compares the first input to the second input, returning 1 when the first is
 * less than the second, and 0 otherwise.
 *
 * @see TypeNode
 * @see LeType
 */
export type LeNode = TypeNode<LeType>;

import { LeqType } from "../types";
/**
 * Compares the first input to the second input, returning 1 when the first is
 * less than or equal to the second, and 0 otherwise.
 *
 * @see TypeNode
 * @see LeqType
 */
export type LeqNode = TypeNode<LeqType>;

import { GeType } from "../types";
/**
 * Compares the first input to the second input, returning 1 when the first is
 * greater than the second, and 0 otherwise.
 *
 * @see TypeNode
 * @see GeType
 */
export type GeNode = TypeNode<GeType>;

import { GeqType } from "../types";
/**
 * Compares the first input to the second input, returning 1 when the first is
 * greater than or equal to the second, and 0 otherwise.
 *
 * @see TypeNode
 * @see GeqType
 */
export type GeqNode = TypeNode<GeqType>;

import { PowType } from "../types";
/**
 * Exponentiates the first input signal with the second.
 *
 * @see TypeNode
 * @see PowType
 */
export type PowNode = TypeNode<PowType>;

import { ModType } from "../types";
/**
 * Modulo operator.
 *
 * Outputs the remainder of division of the first input signal with the
 * second.
 *
 * @see TypeNode
 * @see ModType
 */
export type ModNode = TypeNode<ModType>;

import { MinType } from "../types";
/**
 * Outputs the minimal result of the two incoming signals.
 *
 * @see TypeNode
 * @see MinType
 */
export type MinNode = TypeNode<MinType>;

import { MaxType } from "../types";
/**
 * Outputs the maximal result of the two incoming signals.
 *
 * @see TypeNode
 * @see MaxType
 */
export type MaxNode = TypeNode<MaxType>;

import { AddType } from "../types";
/**
 * Adds up the incoming signals (left fold with the addition operator).
 *
 * @see TypeNode
 * @see AddType
 */
export type AddNode = TypeNode<AddType>;

import { SubType } from "../types";
/**
 * Subtracts the incoming signals (left fold with the subtraction operator).
 *
 * @see TypeNode
 * @see SubType
 */
export type SubNode = TypeNode<SubType>;

import { MulType } from "../types";
/**
 * Multiplies the incoming signals (left fold with the multiplication
 * operator).
 *
 * @see TypeNode
 * @see MulType
 */
export type MulNode = TypeNode<MulType>;

import { DivType } from "../types";
/**
 * Divides the incoming signals (left fold with the division operator).
 *
 * @see TypeNode
 * @see DivType
 */
export type DivNode = TypeNode<DivType>;
