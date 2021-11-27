import {
  BuiltinNativeType,
  BuiltinCompositeType,
  BuiltinType,
  NativeType,
  CompositeType,
  Type,
  NativeTypeName,
  CompositeTypeName,
} from "../types";

import {
  EmptyChildrenArray,
  SizedChildrenArray,
  ChildrenArray,
  ChildrenArraySize,
} from "./array";

import {
  BuiltinNativeNameChildrenMap,
  BuiltinCompositeNameChildrenMap,
} from "./builtin";

/**
 * Node child type. Any number will be converted to a ConstNode internally.
 *
 * @see Node
 */
export type Child = Node | number;

/**
 * Base type for children.
 *
 * @see ChildrenArray
 */
export type Children = ChildrenArray;

/**
 * Empty children array.
 *
 * @see EmptyChildrenArray
 */
export type EmptyChildren = EmptyChildrenArray;

/**
 * Default type for children.
 *
 * @see EmptyChildrenArray
 */
export type DefaultChildren = EmptyChildrenArray;

/**
 * Children for the provided builtin native node type.
 *
 * @see BuiltinNativeType
 * @see BuiltinNativeNameChildrenMap
 */
export type BuiltinNativeTypeChildren<T extends BuiltinNativeType> =
  BuiltinNativeNameChildrenMap[NativeTypeName<T>];

/**
 * Children for the provided builtin composite node type.
 *
 * @see BuiltinCompositeType
 * @see BuiltinCompositeNameChildrenMap
 */
export type BuiltinCompositeTypeChildren<T extends BuiltinCompositeType> =
  BuiltinCompositeNameChildrenMap[CompositeTypeName<T>];

/**
 * Children for the provided builtin node type.
 *
 * @see BuiltinType
 * @see BuiltinNativeType
 * @see BuiltinNativeTypeChildren
 * @see BuiltinCompositeType
 * @see BuiltinCompositeTypeChildren
 */
export type BuiltinTypeChildren<T extends BuiltinType> =
  T extends BuiltinNativeType
    ? BuiltinNativeTypeChildren<T>
    : T extends BuiltinCompositeType
    ? BuiltinCompositeTypeChildren<T>
    : never;

/**
 * Children for the provided native node type.
 *
 * @see NativeType
 * @see BuiltinNativeType
 * @see BuiltinNativeTypeChildren
 * @see DefaultChildren
 */
export type NativeTypeChildren<T extends NativeType> =
  T extends BuiltinNativeType ? BuiltinNativeTypeChildren<T> : DefaultChildren;

/**
 * Children for the provided composite node type.
 *
 * @see CompositeType
 * @see BuiltinCompositeType
 * @see BuiltinCompositeTypeChildren
 * @see DefaultChildren
 * @see SizedChildrenArray
 * @see ChildrenArraySize
 */
export type CompositeTypeChildren<T extends CompositeType> =
  T extends BuiltinCompositeType
    ? BuiltinCompositeTypeChildren<T>
    : Parameters<T> extends []
    ? DefaultChildren
    : Parameters<T> extends [infer IArgs, ...any]
    ? IArgs extends { children: infer IChildren }
      ? /*
         * & ChildrenArray is a bit spooky, but TS throws errors if its not
         * there
         */
        SizedChildrenArray<ChildrenArraySize<IChildren & ChildrenArray>>
      : DefaultChildren
    : DefaultChildren;

/**
 * Children for the provided node type.
 *
 * @see Type
 * @see NativeType
 * @see NativeTypeChildren
 * @see CompositeType
 * @see CompositeTypeChildren
 */
export type TypeChildren<T extends Type> = T extends NativeType
  ? NativeTypeChildren<T>
  : T extends CompositeType
  ? CompositeTypeChildren<T>
  : never;
