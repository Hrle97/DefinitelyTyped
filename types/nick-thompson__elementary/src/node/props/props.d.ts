import { node } from "@nick-thompson/elementary";

/**
 * {@link node.Node} props base.
 */
export interface Props {}

/**
 * {@link node.Node} key {@link node.Props}.
 *
 * Keys help Elementary keep track of which signals have changed and which
 * signals just had their properties changes.
 * Elementary will assume that a signal with the same key had its
 * {@link node.Props} or {@link node.Children} changed rather than interpreting
 * it as a new signal on subsequent renders reducing the amount of time that
 * Elementary takes to render the new audio graph.
 */
export interface KeyProps {
  /**
   * Key of the {@link node.Node} being created.
   *
   * Keys help Elementary keep track of which signals have changed and which
   * signals just had their properties changes.
   * Elementary will assume that a signal with the same key had its
   * {@link node.Props} or {@link node.Children} changed rather than
   * interpreting it as a new signal on subsequent renders reducing the amount
   * of time that Elementary takes to render the new audio graph.
   */
  key?: string;
}

/**
 * Default {@link node.Node} {@link node.Props}.
 *
 * @see node.Props
 * @see node.KeyProps
 */
export type DefaultProps = node.Props & node.KeyProps;

/**
 * {@link node.Props} for the provided {@link node.BuiltinNativeType}.
 *
 * @see node.BuiltinNativeType
 */
export type BuiltinNativeTypeProps<T extends node.BuiltinNativeType> =
  node.BuiltinNativeNamePropsMap[node.NativeTypeName<T>];

/**
 * {@link node.Props} for the provided {@link node.BuiltinCompositeType}.
 *
 * @see node.BuiltinCompositeType
 */
export type BuiltinCompositeTypeProps<T extends node.BuiltinCompositeType> =
  node.BuiltinCompositeNamePropsMap[node.CompositeTypeName<T>];

/**
 * {@link node.Props} for the provided {@link node.BuiltinType}.
 *
 * @see node.BuiltinType
 * @see node.BuiltinNativeType
 * @see node.BuiltinNativeTypeProps
 * @see node.BuiltinCompositeType
 * @see node.BuiltinCompositeTypeProps
 */
export type BuiltinTypeProps<T extends node.BuiltinType> =
  T extends node.BuiltinNativeType
    ? node.BuiltinNativeTypeProps<T>
    : T extends node.BuiltinCompositeType
    ? node.BuiltinCompositeTypeProps<T>
    : never;

/**
 * {@link node.Props} for the provided {@link node.NativeType}.
 *
 * @see node.NativeType
 * @see node.BuiltinNativeType
 * @see node.BuiltinNativeTypeProps
 * @see node.DefaultProps
 */
export type NativeTypeProps<T extends node.NativeType> =
  T extends node.BuiltinNativeType
    ? node.BuiltinNativeTypeProps<T>
    : DefaultProps;

/**
 * {@link node.Props} for the provided {@link node.CompositeType}.
 *
 * @see node.CompositeType
 * @see node.BuiltinCompositeType
 * @see node.BuiltinNativeTypeProps
 * @see node.KeyProps
 * @see node.DefaultProps
 */
export type CompositeTypeProps<T extends node.CompositeType> =
  T extends node.BuiltinCompositeType
    ? node.BuiltinCompositeTypeProps<T>
    : Parameters<T> extends []
    ? node.DefaultProps
    : Parameters<T> extends [infer IParams, ...any]
    ? IParams extends { props: infer IProps }
      ? IProps & KeyProps
      : node.DefaultProps
    : node.DefaultProps;

/**
 * {@link node.Props} for the provided {@link node.Type}.
 *
 * @see node.Type
 * @see node.NativeType
 * @see node.NativeTypeProps
 * @see node.CompositeType
 * @see node.CompositeTypeProps
 * @see node.DefaultProps
 */
export type TypeProps<T extends node.Type> = T extends node.NativeType
  ? node.NativeTypeProps<T>
  : T extends node.CompositeType
  ? node.CompositeTypeProps<T>
  : node.DefaultProps;
