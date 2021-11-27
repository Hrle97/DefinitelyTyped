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
  MeterChildren,
  /* Native */
  MetroChildren,
  RandChildren,
  /* Basics */
  SrChildren,
  ConstChildren,
  CounterChildren,
  SelectChildren,
  /* Delays */
  ZChildren,
  TapOutChildren,
  TapInChildren,
  DelayChildren,
  /* Filters */
  PoleChildren,
  ZeroChildren,
  DcBlockChildren,
  Df11Children,
  SmoothChildren,
  SmChildren,
  BiquadChildren,
  LowPassChildren,
  HighPassChildren,
  BandPassChildren,
  AllPassChildren,
  NotchChildren,
  PeakChildren,
  LowShelfChildren,
  HighShelfChildren,
  ConvolveChildren,
  PinkChildren,
  /* Math */
  SinChildren,
  CosChildren,
  TanChildren,
  TanhChildren,
  AsinhChildren,
  LnChildren,
  LogChildren,
  Log2Children,
  CeilChildren,
  FloorChildren,
  SqrtChildren,
  ExpChildren,
  AbsChildren,
  LeChildren,
  LeqChildren,
  GeChildren,
  GeqChildren,
  PowChildren,
  ModChildren,
  MinChildren,
  MaxChildren,
  AddChildren,
  SubChildren,
  MulChildren,
  DivChildren,
  /* Noise */
  NoiseChildren,
  PinkNoiseChildren,
  /* Oscillators */
  PhasorChildren,
  TrainChildren,
  CycleChildren,
  SawChildren,
  SquareChildren,
  TriangleChildren,
  BlepSawChildren,
  BlepSquareChildren,
  BlepTriangleChildren,
  /* Samples */
  SampleChildren,
  TableChildren,
  /* Signals */
  EnvChildren,
  AdsrChildren,
  LatchChildren,
  SeqChildren,
  HannChildren,
  /* In */
  InChildren,
} from "./builtin";

import {
  EmptyChildrenArray,
  SizedChildrenArray,
  ChildrenArray,
  ChildrenArraySize,
} from "./array";

/**
 * Node child type. Any number will be converted to a ConstNode internally.
 *
 * @see Node
 */
export type Child = Node | number;

/**
 * Base type for children.
 *
 * @see Child
 * @see ChildrenArray
 */
export type Children = ChildrenArray;

/**
 * Default type for children.
 *
 * @see Child
 * @see EmptyChildrenArray
 */
export type DefaultChildren = EmptyChildrenArray;

/**
 * Children for the provided builtin native node type.
 *
 * @see BuiltinNativeType
 */
export type BuiltinNativeTypeChildren<T extends BuiltinNativeType> = {
  /* Analysis */
  meter: MeterChildren;
  /* Native */
  metro: MetroChildren;
  rand: RandChildren;
  /* Basics */
  sr: SrChildren;
  const: ConstChildren;
  counter: CounterChildren;
  /* Delays */
  z: ZChildren;
  tapOut: TapOutChildren;
  tapIn: TapInChildren;
  delay: DelayChildren;
  /* Filters */
  pole: PoleChildren;
  biquad: BiquadChildren;
  convolve: ConvolveChildren;
  /* Math */
  sin: SinChildren;
  cos: CosChildren;
  tan: TanChildren;
  tanh: TanhChildren;
  asinh: AsinhChildren;
  ln: LnChildren;
  log: LogChildren;
  log2: Log2Children;
  ceil: CeilChildren;
  floor: FloorChildren;
  sqrt: SqrtChildren;
  exp: ExpChildren;
  abs: AbsChildren;
  le: LeChildren;
  leq: LeqChildren;
  ge: GeChildren;
  geq: GeqChildren;
  pow: PowChildren;
  mod: ModChildren;
  min: MinChildren;
  max: MaxChildren;
  add: AddChildren;
  sub: SubChildren;
  mul: MulChildren;
  div: DivChildren;
  /* Noise */
  /* Oscillators */
  phasor: PhasorChildren;
  /* Samples */
  sample: SampleChildren;
  table: TableChildren;
  /* Signals */
  latch: LatchChildren;
  seq: SeqChildren;
  /* In */
  in: InChildren;
}[NativeTypeName<T>];

/**
 * Children for the provided builtin composite node type.
 *
 * @see BuiltinCompositeType
 */
export type BuiltinCompositeTypeChildren<T extends BuiltinCompositeType> = {
  /* Analysis */
  /* Native */
  /* Basics */
  select: SelectChildren;
  /* Delays */
  /* Filters */
  zero: ZeroChildren;
  dcblock: DcBlockChildren;
  df11: Df11Children;
  smooth: SmoothChildren;
  sm: SmChildren;
  lowpass: LowPassChildren;
  highpass: HighPassChildren;
  bandpass: BandPassChildren;
  allpass: AllPassChildren;
  notch: NotchChildren;
  peak: PeakChildren;
  lowshelf: LowShelfChildren;
  highshelf: HighShelfChildren;
  pink: PinkChildren;
  /* Math */
  /* Noise */
  noise: NoiseChildren;
  pinknoise: PinkNoiseChildren;
  /* Oscillators */
  train: TrainChildren;
  cycle: CycleChildren;
  saw: SawChildren;
  square: SquareChildren;
  triangle: TriangleChildren;
  blepsaw: BlepSawChildren;
  blepsquare: BlepSquareChildren;
  bleptriangle: BlepTriangleChildren;
  /* Samples */
  /* Signals */
  env: EnvChildren;
  adsr: AdsrChildren;
  hann: HannChildren;
  /* In */
}[CompositeTypeName<T>];

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
    ? IArgs extends { children?: infer IChildren }
      ? /*
         * & any[] is a bit spooky, but TS throws errors
         * if its not there
         */
        SizedChildrenArray<ChildrenArraySize<IChildren & any[]>>
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
