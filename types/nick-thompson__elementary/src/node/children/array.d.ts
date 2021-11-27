import { Child } from "./children";

/**
 * Node children array size range. Nodes can have eight children at most.
 */
export type ChildrenArraySizeRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Variadic node children array size range.
 * Variadic nodess (ie. AddNode and DivNode) can have eight children at
 * most and at least one child.
 */
export type VariadicChildrenArraySizeRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Children array of length 0.
 *
 * @see Child
 */
export type EmptyChildrenArray = Child[] & { length: 0 };

/**
 * Children array of fixed size.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 */
export type SizedChildrenArray<size extends ChildrenArraySizeRange> =
  size extends 1
    ? [Child]
    : size extends 2
    ? [Child, Child]
    : size extends 3
    ? [Child, Child, Child]
    : size extends 4
    ? [Child, Child, Child, Child]
    : size extends 5
    ? [Child, Child, Child, Child, Child]
    : size extends 6
    ? [Child, Child, Child, Child, Child, Child]
    : size extends 7
    ? [Child, Child, Child, Child, Child, Child, Child]
    : size extends 8
    ? [Child, Child, Child, Child, Child, Child, Child, Child]
    : EmptyChildrenArray;

/**
 * Union of all possible children arrays.
 *
 * @see SizedChildrenArray
 * @see ChildrenArraySizeRange
 */
export type ChildrenArray = SizedChildrenArray<ChildrenArraySizeRange>;

/**
 * Union of all possible variadic children arrays.
 *
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 */
export type VariadicChildrenArray =
  SizedChildrenArray<VariadicChildrenArraySizeRange>;

/**
 * Size of a children array.
 *
 * @see ChildrenArray
 * @see ChildrenArraySizeRange
 */
export type ChildrenArraySize<A extends ChildrenArray> = A["length"] &
  ChildrenArraySizeRange;
