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
  RandProps,
  /* Basics */
  SrProps,
  ConstProps,
  CounterProps,
  SelectProps,
  /* Delays */
  ZProps,
  TapOutProps,
  TapInProps,
  DelayProps,
  /* Filters */
  PoleProps,
  ZeroProps,
  DcBlockProps,
  Df11Props,
  SmoothProps,
  SmProps,
  BiquadProps,
  LowPassProps,
  HighPassProps,
  BandPassProps,
  AllPassProps,
  NotchProps,
  PeakProps,
  LowShelfProps,
  HighShelfProps,
  ConvolveProps,
  /* Math */
  SinProps,
  CosProps,
  TanProps,
  TanhProps,
  AsinhProps,
  LnProps,
  LogProps,
  Log2Props,
  CeilProps,
  FloorProps,
  SqrtProps,
  ExpProps,
  AbsProps,
  LeProps,
  LeqProps,
  GeProps,
  GeqProps,
  PowProps,
  ModProps,
  MinProps,
  MaxProps,
  AddProps,
  SubProps,
  MulProps,
  DivProps,
  /* Noise */
  NoiseProps,
  PinkNoiseProps,
  /* Oscillators */
  PhasorProps,
  TrainProps,
  CycleProps,
  SawProps,
  SquareProps,
  TriangleProps,
  BlepSawProps,
  BlepSquareProps,
  BlepTriangleProps,
  /* Samples */
  SampleProps,
  TableProps,
  /* Signals */
  EnvProps,
  AdsrProps,
  LatchProps,
  SeqProps,
  HannProps,
  /* In */
  InProps,
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
  /* Analysis */
  meter: MeterProps;
  /* Native */
  metro: MetroProps;
  rand: RandProps;
  /* Basics */
  sr: SrProps;
  const: ConstProps;
  counter: CounterProps;
  select: SelectProps;
  /* Delays */
  z: ZProps;
  tapOut: TapOutProps;
  tapIn: TapInProps;
  delay: DelayProps;
  /* Filters */
  pole: PoleProps;
  zero: ZeroProps;
  dcblock: DcBlockProps;
  df11: Df11Props;
  smooth: SmoothProps;
  sm: SmProps;
  biquad: BiquadProps;
  low: LowPassProps;
  high: HighPassProps;
  band: BandPassProps;
  all: AllPassProps;
  notch: NotchProps;
  peak: PeakProps;
  lowShelf: LowShelfProps;
  highShelf: HighShelfProps;
  convolve: ConvolveProps;
  /* Math */
  sin: SinProps;
  cos: CosProps;
  tan: TanProps;
  tanh: TanhProps;
  asinh: AsinhProps;
  ln: LnProps;
  log: LogProps;
  log2: Log2Props;
  ceil: CeilProps;
  floor: FloorProps;
  sqrt: SqrtProps;
  exp: ExpProps;
  abs: AbsProps;
  le: LeProps;
  leq: LeqProps;
  ge: GeProps;
  geq: GeqProps;
  pow: PowProps;
  mod: ModProps;
  min: MinProps;
  max: MaxProps;
  add: AddProps;
  sub: SubProps;
  mul: MulProps;
  div: DivProps;
  /* Noise */
  noise: NoiseProps;
  pinknoise: PinkNoiseProps;
  /* Oscillators */
  phasor: PhasorProps;
  train: TrainProps;
  cycle: CycleProps;
  saw: SawProps;
  square: SquareProps;
  triangle: TriangleProps;
  blepsaw: BlepSawProps;
  blepsquare: BlepSquareProps;
  bleptriangle: BlepTriangleProps;
  /* Samples */
  sample: SampleProps;
  table: TableProps;
  /* Signals */
  env: EnvProps;
  adsr: AdsrProps;
  latch: LatchProps;
  seq: SeqProps;
  hann: HannProps;
  /* In */
  in: InProps;
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
