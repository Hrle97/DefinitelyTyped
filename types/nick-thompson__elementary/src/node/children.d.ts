import { NativeNodeType, CompositeNodeType, NodeType } from './types';
import { Node } from './node';

// Child

/**
 * {@link Node} child type. Any number will be converted to an el.const node
 * internally.
 *
 * @see Node
 */
export type Child = Node | number;

// Arrays

/**
 * {@link Node} children array size range. {@link Node}s can have eight
 * children at most.
 */
export type ChildrenArraySizeRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Variadic {@link Node} children array size range.
 * Variadic {@link Node}s (ie. "add" and "div") can have eight children at
 * most and at least one child.
 */
export type VariadicChildrenArraySizeRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * A helper empty children array.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 */
export type EmptyChildrenArray = Child[] & { length: 0 };

/**
 * A helper children array of fixed size in the range of [0, 8].
 *
 * @see Child
 * @see ChildrenArraySizeRange
 */
export type SizedChildrenArray<Size extends ChildrenArraySizeRange> =
  Size extends 1
    ? [Child]
    : Size extends 2
    ? [Child, Child]
    : Size extends 3
    ? [Child, Child, Child]
    : Size extends 4
    ? [Child, Child, Child, Child]
    : Size extends 5
    ? [Child, Child, Child, Child, Child]
    : Size extends 6
    ? [Child, Child, Child, Child, Child, Child]
    : Size extends 7
    ? [Child, Child, Child, Child, Child, Child, Child]
    : Size extends 8
    ? [Child, Child, Child, Child, Child, Child, Child, Child]
    : EmptyChildrenArray;

/**
 * Helper type to describe that some {@link Node}s can have a maximum of eight
 * children.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 */
export type ChildrenArray = SizedChildrenArray<ChildrenArraySizeRange>;

/**
 * Helper type to describe that some {@link Node}s can have a maximum of eight
 * children and a minimum of one child.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 */
export type VariadicChildrenArray =
  SizedChildrenArray<VariadicChildrenArraySizeRange>;

/**
 * Helper type to get the children array size of {@link Node}s.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export type ChildrenArraySize<A extends any[]> = A['length'] &
  ChildrenArraySizeRange;

// Generic

/**
 * Base type for children.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export type Children = ChildrenArray;

/**
 * Default type for children.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 * @see EmptyChildrenArray
 */
export type DefaultChildren = EmptyChildrenArray;

/**
 * Type of children of any given {@link NativeNodeType}.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export type NativeNodeChildren<T extends NativeNodeType> = SizedChildrenArray<
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
      ? /* this & any[] is a bit spooky, but TS throws errors if its not there */
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
