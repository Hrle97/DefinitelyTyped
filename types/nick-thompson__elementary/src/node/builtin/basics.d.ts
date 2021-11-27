import { TypeNode } from "../node";

import { SrType } from "../types";
/**
 * A constant value node whose value is the current sample rate of the system.
 *
 * @see TypeNode
 * @see SrType
 */
export type SrNode = TypeNode<SrType>;

import { ConstType } from "../types";
/**
 * A constant value node whose value is set by the value prop. Commonly,
 * you'll see the const node expressed as a numeric literal.
 *
 * @see TypeNode
 * @see ConstType
 */
export type ConstNode = TypeNode<ConstType>;

import { CounterType } from "../types";
/**
 * Outputs a continuous count of elapsed samples.
 *
 * @see TypeNode
 * @see CounterType
 */
export type CounterNode = TypeNode<CounterType>;

import { SelectType } from "../types";
/**
 * A simple conditional operator.
 *
 * @see TypeNode
 * @see SelectType
 */
export type SelectNode = TypeNode<SelectType>;
