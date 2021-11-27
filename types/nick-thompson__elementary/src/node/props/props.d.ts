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
  BuiltinNativeNamePropsMap,
  BuiltinCompositeNamePropsMap,
} from "./builtin";

/**
 * Base node props.
 *
 * @see KeyProps
 */
export interface Props {
  [key: string]: any;
}

/**
 * Node key props.
 *
 * Key determines whether props changed or the whole node changed upon
 * re-render.
 */
export interface KeyProps {
  /**
   * Key of the node being created.
   */
  key?: string;
}

/**
 * Default node props type.
 *
 * @see Props
 * @see KeyProps
 */
export type DefaultProps = Props & KeyProps;

/**
 * Props for the provided builtin native node type.
 *
 * @see BuiltinNativeType
 */
export type BuiltinNativeTypeProps<T extends BuiltinNativeType> =
  BuiltinNativeNamePropsMap[NativeTypeName<T>];

/**
 * Props for the provided builtin composite node type.
 *
 * @see BuiltinCompositeType
 */
export type BuiltinCompositeTypeProps<T extends BuiltinCompositeType> =
  BuiltinCompositeNamePropsMap[CompositeTypeName<T>];

/**
 * Props for the provided builtin node type.
 *
 * @see BuiltinType
 * @see BuiltinNativeType
 * @see BuiltinNativeTypeProps
 * @see BuiltinCompositeType
 * @see BuiltinCompositeTypeProps
 */
export type BuiltinTypeProps<T extends BuiltinType> =
  T extends BuiltinNativeType
    ? BuiltinNativeTypeProps<T>
    : T extends BuiltinCompositeType
    ? BuiltinCompositeTypeProps<T>
    : never;

/**
 * Props for provided native node type.
 *
 * @see NativeType
 * @see BuiltinNativeType
 * @see BuiltinNativeTypeProps
 * @see DefaultProps
 */
export type NativeTypeProps<T extends NativeType> = T extends BuiltinNativeType
  ? BuiltinNativeTypeProps<T>
  : DefaultProps;

/**
 * Props for provided composite node type.
 *
 * @see CompositeType
 * @see BuiltinCompositeType
 * @see BuiltinNativeTypeProps
 * @see KeyProps
 * @see DefaultProps
 */
export type CompositeTypeProps<T extends CompositeType> =
  T extends BuiltinCompositeType
    ? BuiltinCompositeTypeProps<T>
    : Parameters<T> extends []
    ? DefaultProps
    : Parameters<T> extends [infer IParams, ...any]
    ? IParams extends { props: infer IProps }
      ? IProps & KeyProps
      : DefaultProps
    : DefaultProps;

/**
 * Props for provided node type.
 *
 * @see Type
 * @see NativeType
 * @see NativeTypeProps
 * @see CompositeType
 * @see CompositeTypeProps
 * @see DefaultProps
 */
export type TypeProps<T extends Type> = T extends NativeType
  ? NativeTypeProps<T>
  : T extends CompositeType
  ? CompositeTypeProps<T>
  : DefaultProps;
