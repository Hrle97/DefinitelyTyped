import { node } from "@nick-thompson/elementary";

/**
 * Builtin native {@link node.Node} types.
 *
 * @see node.BuiltinNativeName
 */
export type BuiltinNativeType = node.BuiltinNativeName;

/**
 * Builtin composite {@link node.Node} types.
 *
 * Defined this way because we want a union of functions and not a function
 * which takes a union of arguments which is essentially an overloaded
 * function.
 *
 * @see node.CompositeFunction
 * @see node.BuiltinCompositeName
 * @see node.Props
 * @see node.SizedChildrenArray
 * @see node.ChildrenArraySizeRange
 */
export type BuiltinCompositeType = {
  [childrenArraySize in node.ChildrenArraySizeRange]: node.CompositeFunction<
    node.BuiltinCompositeName,
    node.Props,
    node.SizedChildrenArray<childrenArraySize>
  >;
}[node.ChildrenArraySizeRange];

/**
 * Builtin {@link node.Node} types.
 *
 * @see node.BuiltinNativetype
 * @see node.BuiltinCompositeName
 */
export type BuiltinType = node.BuiltinNativeType | node.BuiltinCompositeType;

/**
 * Native {@link node.Node} types.
 *
 * @see node.NativeName
 */
export type NativeType = node.NativeName;

/**
 * Composite {@link node.Node} types.
 *
 * Defined this way because we want a union of functions and not a function
 * which takes a union of arguments which is essentially an overloaded
 * function.
 *
 * @see node.CompositeFunction
 * @see node.CompositeName
 * @see node.Props
 * @see node.SizedChildrenArray
 * @see node.ChildrenArraySizeRange
 */
export type CompositeType = {
  [childrenArraySize in node.ChildrenArraySizeRange]: node.CompositeFunction<
    node.CompositeName,
    node.Props,
    node.SizedChildrenArray<childrenArraySize>
  >;
}[node.ChildrenArraySizeRange];

/**
 * Types of {@link node.Node}s.
 *
 * @see node.NativeType
 * @see node.CompositeType
 */
export type Type = node.NativeType | node.CompositeType;

/**
 * {@link node.Name} for the provided {@link node.NativeType}.
 *
 * @see node.NativeType
 */
export type NativeTypeName<T extends node.NativeType> = T;

/**
 * {@link node.Name} for the provided {@link node.CompositeType}.
 *
 * @see node.CompositeType
 */
export type CompositeTypeName<T extends node.CompositeType> = T["name"];

/**
 * {@link node.Name} for the provided {@link node.Type}.
 *
 * @see node.NativeType
 * @see node.NativeTypeName
 * @see node.CompositeType
 * @see node.CompositeTypeName
 */
export type TypeName<T extends node.Type> = T extends node.NativeType
  ? node.NativeTypeName<T>
  : T extends node.CompositeType
  ? node.CompositeTypeName<T>
  : never;
