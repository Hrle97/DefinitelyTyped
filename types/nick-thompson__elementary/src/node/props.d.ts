import { NativeNodeType, CompositeNodeType, NodeType } from "./types";

// ***************************************************************************
// Base

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

// ***************************************************************************
// Props

// Analysis

/**
 * Props for el.meter.
 *
 * @see KeyProps
 */
export interface MeterProps extends KeyProps {
  /**
   * Name of the el.meter node. Default is ''.
   *
   * @see MeterProps
   */
  name?: string;
}

// Native

/**
 * Props for el.metro.
 *
 * @see KeyProps
 */
export interface MetroProps extends KeyProps {
  /**
   * Name of the el.metro node. Default is ''.
   *
   * @see MetroProps
   */
  name?: string;

  /**
   * Interval in which the 'metro' event will be fired.
   *
   * @see MetroProps
   */
  interval?: number;
}

// Basics

/**
 * Props for el.in.
 *
 * @see KeyProps
 */
export interface InProps extends KeyProps {
  /**
   * Input channel of the el.in node.
   *
   * @see InProps
   */
  channel?: number;
}

/**
 * Props for el.const.
 *
 * @see KeyProps
 */
export interface ConstProps extends KeyProps {
  /**
   * Value of the el.const node.
   *
   * @see ConstProps
   */
  value: number;
}

// Delays

/**
 * Props for el.tapOut.
 *
 * @see KeyProps
 */
export interface TapOutProps extends KeyProps {
  /**
   * Name of the el.tapOut node.
   *
   * @see TapOutProps
   */
  name: string;

  /**
   * Delay of the el.tapOut node. Default is 512.
   *
   * The delay will be clamped up to the block size for performance reasons,
   * but this could change in a future release.
   *
   * @see TapOutProps
   */
  size?: string;
}

/**
 * Props for el.tapIn.
 *
 * @see KeyProps
 */
export interface TapInProps extends KeyProps {
  /**
   * Name of the el.tapOut node that this should take the signal from.
   *
   * @see TapOutProps
   */
  name: string;
}

/**
 * Props for el.delay.
 *
 * @see KeyProps
 */
export interface DelayProps extends KeyProps {
  /**
   * Maximum delay line in samples.
   *
   * @see DelayProps
   */
  size?: number;
}

// Filters

/**
 * Props for el.convolve.
 *
 * @see KeyProps
 */
export interface ConvolveProps extends KeyProps {
  /**
   * Path to the file of the impulse response on disk.
   *
   * @see ConvolveProps
   */
  path?: string;
}

// Samples

/**
 * Props for el.sample.
 *
 * @see KeyProps
 */
export interface SampleProps extends KeyProps {
  /**
   * Path to the file of the sample.
   *
   * @see SampleProps
   */
  path?: string;

  /**
   * Nodes can output only one channel so you have to select the channel
   * to read from the sample.
   *
   * @see SampleProps
   */
  channel?: number;

  /**
   * - trigger: plays the sample once fully on a rising edge of the pulse
   *   train
   * - gate: resumes playing the sample on a rising edge and pauses on a
   *   falling edge of the pulse train until the end of the sample
   * - loop: same as gate but it doesn't stop at the end of the sample,
   *   instead it continues playing it back from the start in a loop
   *
   * @see SampleProps
   */
  mode?: "trigger" | "gate" | "loop";

  /**
   * Offset in samples from the start of the sample where playback starts.
   *
   * @see SampleProps
   */
  startOffset?: number;

  /**
   * Offset in samples from the end of the sample where playback ends.
   *
   * @see SampleProps
   */
  stopOffset?: number;
}

/**
 * Props for el.table.
 * Properties 'path' and 'data' are mutually exclusive.
 *
 * @see KeyProps
 */
export type TableProps = KeyProps &
  (
    | {
        path?: string;
        data?: never;
      }
    | {
        path?: never;
        data?: Float32Array;
      }
  ) & {
    channel?: number;
  };

// Signals

/**
 * Props for el.seq
 *
 * @see KeyProps
 */
export interface SeqProps extends KeyProps {
  /**
   * Sequence of values to generate.
   *
   * @see SeqProps
   */
  seq?: number[];

  /**
   * When true, continues to output the sequence value until the next trigger.
   *
   * @see SeqProps
   */
  hold?: boolean;

  /**
   * When true, sequence repeats, looping from start to end, indefinitely.
   *
   * @see SeqProps
   */
  loop?: boolean;
}

// ***************************************************************************
// Generic

/**
 * Type of props of any given {@link NodeType}.
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
export type NativeNodeProps<T extends NativeNodeType> = {
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
  [other: string]: KeyProps;
}[T];

/**
 * Type of props of any given {@link CompositeNodeType}.
 *
 * @see Props
 */
export type CompositeNodeProps<T extends CompositeNodeType> =
  Parameters<T> extends []
    ? KeyProps
    : Parameters<T> extends [infer IArgs, ...any]
    ? IArgs extends { props?: infer IProps }
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
