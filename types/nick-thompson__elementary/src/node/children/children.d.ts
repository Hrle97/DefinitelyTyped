import { Node } from "../node";

import {
  BuiltinNativeNodeType,
  NativeNodeType,
  CompositeNodeType,
  NodeType,
} from "../types";

import {
  ChildrenArraySizeRange,
  VariadicChildrenArraySizeRange,
  EmptyChildrenArray,
  SizedChildrenArray,
  ChildrenArray,
  ChildrenArraySize,
} from "./array";

// Child

/**
 * {@link Node} child type. Any number will be converted to an el.const node
 * internally.
 *
 * @see Node
 */
export type Child = Node | number;

/**
 * Base type for children.
 *
 * @see Child
 * @see ChildrenArray
 */
export type Children = ChildrenArray;

/**
 * Default type for children.
 *
 * @see Child
 * @see EmptyChildrenArray
 */
export type DefaultChildren = EmptyChildrenArray;

/**
 * Type of children of any given {@link BuiltinNativeNodeType}.
 *
 * @see Child
 * @see Children
 */
export type BuiltinNativeNodeChildren<T extends NativeNodeType> =
  SizedChildrenArray<
    {
      /* Analysis */
      meter: 0;
      /* Native */
      metro: 0;
      rand: 0;
      /* Basics */
      in: 0 | 1;
      sr: 0;
      counter: 1;
      /* Delays */
      z: 0;
      tapIn: 0;
      tapOut: 1;
      delay: 3;
      /* Math */
      sin: 1;
      cos: 1;
      tan: 1;
      tanh: 1;
      asinh: 1;
      ln: 1;
      log: 1;
      log2: 1;
      ceil: 1;
      floor: 1;
      sqrt: 1;
      exp: 1;
      abs: 1;
      le: 2;
      leq: 2;
      ge: 2;
      geq: 2;
      pow: 2;
      add: VariadicChildrenArraySizeRange;
      sub: VariadicChildrenArraySizeRange;
      mul: VariadicChildrenArraySizeRange;
      div: VariadicChildrenArraySizeRange;
      mod: 2;
      min: 2;
      max: 2;
      /* Filters */
      pole: 2;
      biquad: 6;
      convolve: 1;
      /* Oscillators */
      phasor: 1;
      /* Samples */
      sample: 1;
      table: 1;
      /* Signals */
      latch: 2;
      seq: 1 | 2;
      [other: string]: ChildrenArraySizeRange;
    }[T]
  >;

/**
 * Type of children of any given {@link NativeNodeType}.
 *
 * @see Child
 * @see Children
 */
export type NativeNodeChildren<T extends NativeNodeType> =
  T extends BuiltinNativeNodeType ? BuiltinNativeNodeChildren<T> : Children;

/**
 * Type of children of any given {@link CompositeNodeType}.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export type CompositeNodeChildren<T extends CompositeNodeType> =
  Parameters<T> extends []
    ? EmptyChildrenArray
    : Parameters<T> extends [infer IArgs, ...any]
    ? IArgs extends { children?: infer IChildren }
      ? /*
         * & any[] is a bit spooky, but TS throws errors
         * if its not there
         */
        SizedChildrenArray<ChildrenArraySize<IChildren & any[]>>
      : EmptyChildrenArray
    : EmptyChildrenArray;

/**
 * Type of children of any given {@link NodeType}.
 *
 * @see NodeType
 * @see NativeNodeType
 * @see CompositeNodeType
 * @see NativeNodeChildren
 * @see CompositeNodeChildren
 */
export type NodeChildren<T extends NodeType> = NodeType extends T
  ? Children
  : T extends NativeNodeType
  ? NativeNodeChildren<T>
  : T extends CompositeNodeType
  ? CompositeNodeChildren<T>
  : never;
