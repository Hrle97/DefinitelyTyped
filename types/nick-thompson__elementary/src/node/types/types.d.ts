import { Node } from "../node";
import { Context } from "../context";
import { Props } from "../props";
import { Children } from "../children";
import { Name, BuiltinNativeName, BuiltinCompositeName } from "../names";
import { ChildrenArraySizeRange, SizedChildrenArray } from "../children";

/**
 * Composite node function for the provided name, props, and children.
 *
 * @see Name
 * @see Context
 * @see Props
 * @see Children
 * @see Node
 */
export type CompositeFunction<
  N extends Name,
  P extends Props,
  C extends Children
> = ((args: { context: Context; props: P; children: C }) => Node) & {
  name: N;
};

/**
 * Builtin native node types.
 *
 * @see BuiltinNativeName
 */
export type BuiltinNativeType = BuiltinNativeName;

/**
 * Builtin composite node types.
 *
 * @see BuiltinNativeName
 */
export type BuiltinCompositeType = {
  [childrenArraySize in ChildrenArraySizeRange]: CompositeFunction<
    BuiltinCompositeName,
    Props,
    SizedChildrenArray<childrenArraySize>
  >;
}[ChildrenArraySizeRange];

/**
 * Native types of nodes.
 *
 * @see BuiltinNativeType
 */
export type NativeType = BuiltinNativeType | string;

/**
 * Composites types of nodes.
 *
 * Defined this way because we want a union of functions and not a function
 * which takes a union of arguments which is essentially an overloaded
 * function.
 *
 * @see Context
 * @see Props
 * @see SizedChildrenArray
 * @see ChildrenArraySizeRange
 * @see Node
 */
export type CompositeType = {
  [childrenArraySize in ChildrenArraySizeRange]: CompositeFunction<
    Name,
    Props,
    SizedChildrenArray<childrenArraySize>
  >;
}[ChildrenArraySizeRange];

/**
 * Types of nodes.
 *
 * @see NativeType
 * @see CompositeType
 */
export type Type = NativeType | CompositeType;

/**
 * Node name from its type.
 *
 * @see NativeType
 * @see CompositeType
 */
export type TypeName<T extends Type> = T extends NativeType
  ? T
  : T extends CompositeType
  ? T["name"]
  : never;
