import {
  Type,
  BuiltinNativeType,
  BuiltinCompositeType,
  BuiltinType,
  NativeType,
  CompositeType,
  NativeTypeName,
  CompositeTypeName,
} from "./types";
import { Name, NativeName, CompositeName } from "./name";
import { Props } from "./props";
import { Children } from "./children";

import {
  /* Analysis */
  MeterNode,
  /* Native */
  MetroNode,
  RandNode,
  /* Basics */
  SrNode,
  ConstNode,
  CounterNode,
  SelectNode,
  /* Delays */
  ZNode,
  TapOutNode,
  TapInNode,
  DelayNode,
  /* Filters */
  PoleNode,
  ZeroNode,
  DcBlockNode,
  Df11Node,
  SmoothNode,
  SmNode,
  BiquadNode,
  LowPassNode,
  HighPassNode,
  BandPassNode,
  AllPassNode,
  NotchNode,
  PeakNode,
  LowShelfNode,
  HighShelfNode,
  ConvolveNode,
  PinkNode,
  /* Math */
  SinNode,
  CosNode,
  TanNode,
  TanhNode,
  AsinhNode,
  LnNode,
  LogNode,
  Log2Node,
  CeilNode,
  FloorNode,
  SqrtNode,
  ExpNode,
  AbsNode,
  LeNode,
  LeqNode,
  GeNode,
  GeqNode,
  PowNode,
  ModNode,
  MinNode,
  MaxNode,
  AddNode,
  SubNode,
  MulNode,
  DivNode,
  /* Noise */
  NoiseNode,
  PinkNoiseNode,
  /* Oscillators */
  PhasorNode,
  TrainNode,
  CycleNode,
  SawNode,
  SquareNode,
  TriangleNode,
  BlepSawNode,
  BlepSquareNode,
  BlepTriangleNode,
  /* Samples */
  SampleNode,
  TableNode,
  /* Signals */
  EnvNode,
  AdsrNode,
  LatchNode,
  SeqNode,
  HannNode,
  /* In */
  InNode,
} from "./builtin";

/**
 * The fundamental building block of the Elementary audio graph.
 */
export interface Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: symbol;
}

/**
 * Native node type.
 *
 * @see NativeName
 * @see Props
 * @see Children
 */
export interface NativeNode<
  N extends NativeName,
  P extends Props,
  C extends Children
> extends Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: (N | P | C | unknown) & symbol;
  // NOTE: $$typeof is symbol but N | P | C | unknown to suppress
  // NOTE: unused N, P, C warning
}

/**
 * Composite node type.
 *
 * @see CompositeName
 * @see Props
 * @see Children
 */
export interface CompositeNode<
  N extends CompositeName,
  P extends Props,
  C extends Children
> extends Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: (N | P | C | unknown) & symbol;
  // NOTE: $$typeof is symbol but N | P | C | unknown to suppress
  // NOTE: unused N, P, C warning
}

/**
 * Node for the provided builtin native node type.
 *
 * @see BuiltinNativeType
 */
export type BuiltinNativeTypeNode<T extends BuiltinNativeType> = {
  /* Analysis */
  meter: MeterNode;
  /* Native */
  metro: MetroNode;
  rand: RandNode;
  /* Basics */
  sr: SrNode;
  const: ConstNode;
  counter: CounterNode;
  /* Delays */
  z: ZNode;
  tapOut: TapOutNode;
  tapIn: TapInNode;
  delay: DelayNode;
  /* Filters */
  pole: PoleNode;
  biquad: BiquadNode;
  convolve: ConvolveNode;
  /* Math */
  sin: SinNode;
  cos: CosNode;
  tan: TanNode;
  tanh: TanhNode;
  asinh: AsinhNode;
  ln: LnNode;
  log: LogNode;
  log2: Log2Node;
  ceil: CeilNode;
  floor: FloorNode;
  sqrt: SqrtNode;
  exp: ExpNode;
  abs: AbsNode;
  le: LeNode;
  leq: LeqNode;
  ge: GeNode;
  geq: GeqNode;
  pow: PowNode;
  mod: ModNode;
  min: MinNode;
  max: MaxNode;
  add: AddNode;
  sub: SubNode;
  mul: MulNode;
  div: DivNode;
  /* Noise */
  /* Oscillators */
  phasor: PhasorNode;
  /* Samples */
  sample: SampleNode;
  table: TableNode;
  /* Signals */
  latch: LatchNode;
  seq: SeqNode;
  /* In */
  in: InNode;
}[NativeTypeName<T>];

/**
 * Node for the provided builtin composite node type.
 *
 * @see BuiltinCompositeType
 */
export type BuiltinCompositeTypeNode<T extends BuiltinCompositeType> = {
  /* Analysis */
  /* Native */
  /* Basics */
  select: SelectNode;
  /* Delays */
  /* Filters */
  zero: ZeroNode;
  dcblock: DcBlockNode;
  df11: Df11Node;
  smooth: SmoothNode;
  sm: SmNode;
  lowpass: LowPassNode;
  highpass: HighPassNode;
  bandpass: BandPassNode;
  allpass: AllPassNode;
  notch: NotchNode;
  peak: PeakNode;
  lowshelf: LowShelfNode;
  highshelf: HighShelfNode;
  pink: PinkNode;
  /* Math */
  /* Noise */
  noise: NoiseNode;
  pinknoise: PinkNoiseNode;
  /* Oscillators */
  train: TrainNode;
  cycle: CycleNode;
  saw: SawNode;
  square: SquareNode;
  triangle: TriangleNode;
  blepsaw: BlepSawNode;
  blepsquare: BlepSquareNode;
  bleptriangle: BlepTriangleNode;
  /* Samples */
  /* Signals */
  env: EnvNode;
  adsr: AdsrNode;
  hann: HannNode;
  /* In */
}[CompositeTypeName<T>];

/**
 * Node for the provided builtin node type.
 *
 * @see BuiltinType
 * @see BuiltinNativeType
 * @see BuiltinNativeTypeNode
 * @see BuiltinCompositeType
 * @see BuiltinCompositeTypeNode
 */
export type BuiltinTypeNode<T extends BuiltinType> = T extends BuiltinNativeType
  ? BuiltinNativeTypeNode<T>
  : T extends BuiltinCompositeType
  ? BuiltinCompositeTypeNode<T>
  : never;

/**
 * Node of provided native node type.
 *
 * @see NativeType
 * @see TypeName
 * @see NamedNativeNode
 */
export type NativeTypeNode<T extends NativeType> = T extends BuiltinNativeType
  ? BuiltinNativeTypeNode<T>
  : NamedNativeNode<NativeTypeName<T>>;

/**
 * Node of provided composite node type.
 *
 * @see CompositeType
 * @see TypeName
 * @see NamedCompositeNode
 */
export type CompositeTypeNode<T extends CompositeType> =
  T extends BuiltinCompositeType
    ? BuiltinCompositeTypeNode<T>
    : NamedCompositeNode<CompositeTypeName<T>>;

/**
 * Node of the provided node type.
 *
 * @see Type
 * @see NativeType
 * @see NativeTypeNode
 * @see CompositeType
 * @see CompositeTypeNode
 */
export type TypeNode<T extends Type> = T extends NativeType
  ? NativeTypeNode<T>
  : T extends CompositeType
  ? CompositeTypeNode<T>
  : never;

/**
 * Native node for prettier messages.
 *
 * @see Name
 * @see Node
 */
interface NamedNativeNode<N extends Name> extends Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: (N | unknown) & symbol;
  // NOTE: $$typeof is symbol but N | unknown to suppress unused N warning
}

/**
 * Composite node type for prettier messages.
 *
 * @see Name
 * @see Node
 */
interface NamedCompositeNode<N extends Name> extends Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: (N | unknown) & symbol;
  // NOTE: $$typeof is symbol but N | unknown to suppress unused N warning
}
