import { Child } from "./children";

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
 * A helper empty children array type.
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
 * Helper type to describe that some {@link Node}s have a children array witha
 * a size in the range [1, 8].
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
export type ChildrenArraySize<A extends any[]> = A["length"] &
  ChildrenArraySizeRange;
