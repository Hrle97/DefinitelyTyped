export * from "./builtin";
export * from "./types";

import { Node } from "../node";
import { Context } from "../context";
import { Props } from "../props";
import { ChildrenArraySizeRange, SizedChildrenArray } from "../children";

/**
 * Builtin native types of {@link Node}s.
 *
 * @see Node
 */
export type BuiltinNativeNodeType =
  /* Analysis */
  | "meter"
  /* Native */
  | "metro"
  | "rand"
  /* Basics */
  | "in"
  | "sr"
  | "const"
  | "counter"
  /* Delays */
  | "z"
  | "tapIn"
  | "tapOut"
  | "delay"
  /* Filters */
  | "pole"
  | "biquad"
  | "convolve"
  /* Math */
  | "sin"
  | "cos"
  | "tan"
  | "tanh"
  | "asinh"
  | "ln"
  | "log"
  | "log2"
  | "ceil"
  | "floor"
  | "sqrt"
  | "exp"
  | "abs"
  | "le"
  | "leq"
  | "ge"
  | "geq"
  | "pow"
  | "add"
  | "sub"
  | "mul"
  | "div"
  | "mod"
  | "min"
  | "max"
  /* Noise */
  /* Oscillators */
  | "phasor"
  /* Samples */
  | "sample"
  | "table"
  /* Signals */
  | "latch"
  | "seq";

/**
 * Native types of {@link Node}s.
 *
 * @see Node
 */
export type NativeNodeType = BuiltinNativeNodeType | string;

/**
 * Composites types of {@link Node}s.
 *
 * Defined this way because we want a union of functions and not a function
 * which takes a union of arguments which is essentially an overloaded
 * function.
 *
 * @see Node
 * @see Context
 * @see Props
 * @see Children
 */
export type CompositeNodeType = {
  [childrenArraySize in ChildrenArraySizeRange]: (args: {
    context: Context;
    props: Props;
    children: SizedChildrenArray<childrenArraySize>;
  }) => Node;
}[ChildrenArraySizeRange];

/**
 * Types of {@link Node}s.
 *
 * @see Node
 * @see NativeNodeType
 * @see CompositeNodeType
 */
export type NodeType = NativeNodeType | CompositeNodeType;
