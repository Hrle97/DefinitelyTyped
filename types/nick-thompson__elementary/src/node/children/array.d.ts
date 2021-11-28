import { node } from "@nick-thompson/elementary";

/**
 * {@link node.Node} {@link node.Child}ren array size range.
 * {@link node.Node}s can have eight {@link node.Child}ren at most.
 */
export type ChildrenArraySizeRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Variadic {@link node.Node} {@link node.Child}ren array size range.
 * Variadic {@link node.Node}s (ie. {@link node.AddNode} and
 * {@link node.DivNode}) can have eight {@link node.Child}ren at most and
 * at least one {@link node.Child}.
 */
export type VariadicChildrenArraySizeRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * {@link node.Child}ren array of length 0.
 *
 * @see node.Child
 */
export type EmptyChildrenArray = node.Child[] & { length: 0 };

/**
 * {@link node.Child}ren array of fixed size.
 *
 * @see node.ChildrenArraySizeRange
 * @see node.Child
 * @see node.EmptyChildrenArray
 */
export type SizedChildrenArray<size extends node.ChildrenArraySizeRange> =
  size extends 1
    ? [node.Child]
    : size extends 2
    ? [node.Child, node.Child]
    : size extends 3
    ? [node.Child, node.Child, node.Child]
    : size extends 4
    ? [node.Child, node.Child, node.Child, node.Child]
    : size extends 5
    ? [node.Child, node.Child, node.Child, node.Child, node.Child]
    : size extends 6
    ? [node.Child, node.Child, node.Child, node.Child, node.Child, node.Child]
    : size extends 7
    ? [
        node.Child,
        node.Child,
        node.Child,
        node.Child,
        node.Child,
        node.Child,
        node.Child
      ]
    : size extends 8
    ? [
        node.Child,
        node.Child,
        node.Child,
        node.Child,
        node.Child,
        node.Child,
        node.Child,
        node.Child
      ]
    : node.EmptyChildrenArray;

/**
 * Union of all possible {@link node.Child}ren arrays.
 *
 * @see node.SizedChildrenArray
 * @see node.ChildrenArraySizeRange
 */
export type ChildrenArray =
  node.SizedChildrenArray<node.ChildrenArraySizeRange>;

/**
 * Union of all possible variadic {@link node.Child}ren arrays.
 *
 * @see node.SizedChildrenArray
 * @see node.VariadicChildrenArraySizeRange
 */
export type VariadicChildrenArray =
  node.SizedChildrenArray<node.VariadicChildrenArraySizeRange>;

/**
 * Size of a {@link node.Child}ren array.
 *
 * @see node.ChildrenArray
 * @see node.ChildrenArraySizeRange
 */
export type ChildrenArraySize<A extends node.ChildrenArray> = A["length"] &
  node.ChildrenArraySizeRange;
