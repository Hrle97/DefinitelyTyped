import {
  BuiltinNativeNodeType,
  NativeNodeType,
  CompositeNodeType,
  NodeType,
} from "../types";

import {
  /* Analysis */
  MeterProps,
  /* Native */
  MetroProps,
  /* Basics */
  InProps,
  ConstProps,
  /* Delays */
  DelayProps,
  TapOutProps,
  TapInProps,
  /* Filters */
  ConvolveProps,
  /* Math */
  /* Noise */
  /* Oscillators */
  /* Samples */
  SampleProps,
  TableProps,
  /* Signals */
  SeqProps,
} from "./builtin";

/**
 * Base props object for nodes.
 *
 * Unlike {@link KeyProps}, this type allows for any prop value with a
 * string key.
 * Useful in some situations.
 *
 * @see KeyProps
 */
export interface Props {
  [key: string]: any;
}

/**
 * Base props object for nodes.
 *
 * Key determines whether props changed or the whole node changed upon
 * re-render.
 *
 * @see Props
 */
export interface KeyProps {
  /**
   * Key of the node being created.
   */
  key?: string;
}

/**
 * Default props type
 *
 * @see KeyProps
 */
export type DefaultProps = KeyProps;

/**
 * Type of props of any given {@link BuiltinNativeNodeType}.
 *
 * @see NativeNodeType
 * @see InProps
 * @see ConstProps
 * @see DelayProps
 * @see ConvolveProps
 * @see SampleProps
 * @see TableProps
 * @see SeqProps
 * @see KeyProps
 */
export type BuiltinNativeNodeProps<T extends BuiltinNativeNodeType> = {
  // Analysis
  metro: MetroProps;
  // Native
  meter: MeterProps;
  // Baiscs
  in: InProps | KeyProps;
  const: ConstProps;
  // Delays
  tapOut: TapOutProps;
  tapIn: TapInProps;
  delay: DelayProps;
  // Filters
  convolve: ConvolveProps;
  // Samples
  sample: SampleProps;
  table: TableProps;
  // Signals
  seq: SeqProps;
  // Other
  [other: string]: KeyProps;
}[T];

/**
 * Type of props of any given {@link NativeNodeType}.
 *
 * @see NativeNodeType
 * @see BuiltinNativeNodeProps
 * @see KeyProps
 */
export type NativeNodeProps<T extends NativeNodeType> =
  T extends BuiltinNativeNodeType ? BuiltinNativeNodeProps<T> : KeyProps;

/**
 * Type of props of any given {@link CompositeNodeType}.
 *
 * @see Props
 */
export type CompositeNodeProps<T extends CompositeNodeType> =
  Parameters<T> extends []
    ? KeyProps
    : Parameters<T> extends [infer IArgs, ...any]
    ? IArgs extends { props: infer IProps }
      ? IProps & KeyProps
      : KeyProps
    : never;

/**
 * Type of props of any {@link NodeType}.
 *
 * @see NodeType
 * @see NativeNodeType
 * @see NativeNodeProps
 * @see CompositeNodeProps
 */
export type NodeProps<T extends NodeType> = NodeType extends T
  ? Props
  : T extends NativeNodeType
  ? NativeNodeProps<T>
  : T extends CompositeNodeType
  ? CompositeNodeProps<T>
  : never;
