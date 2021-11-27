import { Node } from "../node";
import { Context } from "../context";
import { Props } from "../props";
import { Children } from "../children";
import {
  Name,
  BuiltinNativeName,
  BuiltinCompositeName,
  NativeName,
  CompositeName,
} from "../names";
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
> = ((args: { context: Context; props: P; children: C }) => Node) &
  Function & {
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
 * Defined this way because we want a union of functions and not a function
 * which takes a union of arguments which is essentially an overloaded
 * function.
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
 * Builtin node types.
 *
 * @see BuiltinNativetype
 * @see BuiltinCompositeName
 */
export type BuiltinType = BuiltinNativeType | BuiltinCompositeType;

/**
 * Native node types.
 *
 * @see BuiltinNativeType
 */
export type NativeType = NativeName;

/**
 * Composites node types.
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
    CompositeName,
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
 * Native node name of provided type.
 *
 * @see NativeType
 */
export type NativeTypeName<T extends NativeType> = T;

/**
 * Composite node name of provided type.
 *
 * @see CompositeType
 */
export type CompositeTypeName<T extends CompositeType> = T["name"];

/**
 * Node name from its type.
 *
 * @see NativeType
 * @see CompositeType
 */
export type TypeName<T extends Type> = T extends NativeType
  ? NativeTypeName<T>
  : T extends CompositeType
  ? CompositeTypeName<T>
  : never;
