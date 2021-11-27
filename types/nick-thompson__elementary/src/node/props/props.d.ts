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
  PinkProps,
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
export type BuiltinNativeTypeProps<T extends BuiltinNativeType> = {
  /* Analysis */
  meter: MeterProps;
  /* Native */
  metro: MetroProps;
  rand: RandProps;
  /* Basics */
  sr: SrProps;
  const: ConstProps;
  counter: CounterProps;
  /* Delays */
  z: ZProps;
  tapOut: TapOutProps;
  tapIn: TapInProps;
  delay: DelayProps;
  /* Filters */
  pole: PoleProps;
  biquad: BiquadProps;
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
  /* Oscillators */
  phasor: PhasorProps;
  /* Samples */
  sample: SampleProps;
  table: TableProps;
  /* Signals */
  latch: LatchProps;
  seq: SeqProps;
  /* In */
  in: InProps;
}[NativeTypeName<T>];

/**
 * Props for the provided builtin composite node type.
 *
 * @see BuiltinCompositeType
 */
export type BuiltinCompositeTypeProps<T extends BuiltinCompositeType> = {
  /* Analysis */
  /* Native */
  /* Basics */
  select: SelectProps;
  /* Delays */
  /* Filters */
  zero: ZeroProps;
  dcblock: DcBlockProps;
  df11: Df11Props;
  smooth: SmoothProps;
  sm: SmProps;
  lowpass: LowPassProps;
  highpass: HighPassProps;
  bandpass: BandPassProps;
  allpass: AllPassProps;
  notch: NotchProps;
  peak: PeakProps;
  lowshelf: LowShelfProps;
  highshelf: HighShelfProps;
  pink: PinkProps;
  /* Math */
  /* Noise */
  noise: NoiseProps;
  pinknoise: PinkNoiseProps;
  /* Oscillators */
  train: TrainProps;
  cycle: CycleProps;
  saw: SawProps;
  square: SquareProps;
  triangle: TriangleProps;
  blepsaw: BlepSawProps;
  blepsquare: BlepSquareProps;
  bleptriangle: BlepTriangleProps;
  /* Samples */
  /* Signals */
  env: EnvProps;
  adsr: AdsrProps;
  hann: HannProps;
  /* In */
}[CompositeTypeName<T>];

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
    : Parameters<T> extends [infer IArgs, ...any]
    ? IArgs extends { props: infer IProps }
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
