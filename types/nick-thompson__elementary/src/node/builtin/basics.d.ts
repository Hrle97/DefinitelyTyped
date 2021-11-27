import { TypeNode } from "../node";

import { SrType } from "../types";
/**
 * A constant value node whose value is the current sample rate of the system.
 */
export type SrNode = TypeNode<SrType>;

import { ConstType } from "../types";
/**
 * A constant value node whose value is set by the value prop. Commonly,
 * you'll see the const node expressed as a numeric literal.
 */
export type ConstNode = TypeNode<ConstType>;

import { CounterType } from "../types";
/**
 * Outputs a continuous count of elapsed samples.
 */
export type CounterNode = TypeNode<CounterType>;

import { SelectType } from "../types";
/**
 * A simple conditional operator.
 */
export type SelectNode = TypeNode<SelectType>;
