import { node } from "@nick-thompson/elementary";

/**
 * {@link node.Node} child type. Any number will be converted to a
 * {@link node.ConstNode} internally.
 *
 * @see node.Node
 */
export type Child = node.Node | number;

/**
 * Base type for {@link node.Child}ren.
 *
 * @see node.ChildrenArray
 */
export type Children = node.ChildrenArray;

/**
 * Empty {@link node.Child}ren array.
 *
 * @see node.EmptyChildrenArray
 */
export type EmptyChildren = node.EmptyChildrenArray;

/**
 * Default type for {@link node.Child}ren.
 *
 * @see node.EmptyChildrenArray
 */
export type DefaultChildren = node.EmptyChildrenArray;

/**
 * {@link node.Child}ren for the provided {@link node.BuiltinNativeType}.
 *
 * @see node.BuiltinNativeType
 * @see node.BuiltinNativeNameChildrenMap
 */
export type BuiltinNativeTypeChildren<T extends node.BuiltinNativeType> =
  node.BuiltinNativeNameChildrenMap[node.NativeTypeName<T>];

/**
 * {@link node.Child}ren for the provided {@link node.BuiltinCompositeType}.
 *
 * @see node.BuiltinCompositeType
 * @see node.BuiltinCompositeNameChildrenMap
 */
export type BuiltinCompositeTypeChildren<T extends node.BuiltinCompositeType> =
  node.BuiltinCompositeNameChildrenMap[node.CompositeTypeName<T>];

/**
 * {@link node.Child}ren for the provided {@link node.BuiltinType}.
 *
 * @see node.BuiltinType
 * @see node.BuiltinNativeType
 * @see node.BuiltinNativeTypeChildren
 * @see node.BuiltinCompositeType
 * @see node.BuiltinCompositeTypeChildren
 */
export type BuiltinTypeChildren<T extends node.BuiltinType> =
  T extends node.BuiltinNativeType
    ? node.BuiltinNativeTypeChildren<T>
    : T extends node.BuiltinCompositeType
    ? node.BuiltinCompositeTypeChildren<T>
    : never;

/**
 * {@link node.Child}ren for the provided {@link node.NativeType}.
 *
 * @see node.NativeType
 * @see node.BuiltinNativeType
 * @see node.BuiltinNativeTypeChildren
 * @see node.DefaultChildren
 */
export type NativeTypeChildren<T extends node.NativeType> =
  T extends node.BuiltinNativeType
    ? node.BuiltinNativeTypeChildren<T>
    : node.DefaultChildren;

/**
 * {@link node.Child}ren for the provided {@link node.CompositeType}.
 *
 * @see node.CompositeType
 * @see node.BuiltinCompositeType
 * @see node.BuiltinCompositeTypeChildren
 * @see node.DefaultChildren
 * @see node.SizedChildrenArray
 * @see node.ChildrenArraySize
 */
export type CompositeTypeChildren<T extends node.CompositeType> =
  T extends node.BuiltinCompositeType
    ? node.BuiltinCompositeTypeChildren<T>
    : Parameters<T> extends []
    ? node.DefaultChildren
    : Parameters<T> extends [infer IArgs, ...any]
    ? IArgs extends { children: infer IChildren }
      ? /*
         * NOTE: `& node.ChildrenArray` is a bit spooky, but
         * NOTE: TS throws errors if its not there
         */
        node.SizedChildrenArray<
          node.ChildrenArraySize<IChildren & node.ChildrenArray>
        >
      : node.DefaultChildren
    : node.DefaultChildren;

/**
 * {@link node.Child}ren for the provided {@link node.Type}.
 *
 * @see node.Type
 * @see node.NativeType
 * @see node.NativeTypeChildren
 * @see node.CompositeType
 * @see node.CompositeTypeChildren
 */
export type TypeChildren<T extends node.Type> = T extends node.NativeType
  ? node.NativeTypeChildren<T>
  : T extends node.CompositeType
  ? node.CompositeTypeChildren<T>
  : never;
