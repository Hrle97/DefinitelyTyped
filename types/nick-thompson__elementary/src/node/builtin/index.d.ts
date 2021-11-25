import { NativeNode } from "../node";

// Analysis

export type MeterNode = NativeNode<"meter">;

// Native

export type RandNode = NativeNode<"rand">;
export type MetroNode = NativeNode<"metro">;

// Basics

export type InNode = NativeNode<"in">;
export type SrNode = NativeNode<"sr">;
export type ConstNode = NativeNode<"const">;
export type CounterNode = NativeNode<"counter">;

// Delays

export type ZNode = NativeNode<"z">;
export type TapOutNode = NativeNode<"tapOut">;
export type TapInNode = NativeNode<"tapIn">;
export type DelayNode = NativeNode<"delay">;

// Filters

export type PoleNode = NativeNode<"pole">;
export type BiquadNode = NativeNode<"biquad">;
export type ConvolveNode = NativeNode<"convolve">;

// Math

export type SinNode = NativeNode<"sin">;
export type CosNode = NativeNode<"cos">;
export type TanNode = NativeNode<"tan">;
export type TanhNode = NativeNode<"tanh">;
export type AsinhNode = NativeNode<"asinh">;
export type LnNode = NativeNode<"ln">;
export type LogNode = NativeNode<"log">;
export type Log2Node = NativeNode<"log2">;
export type CeilNode = NativeNode<"ceil">;
export type FloorNode = NativeNode<"floor">;
export type SqrtNode = NativeNode<"sqrt">;
export type ExpNode = NativeNode<"exp">;

export type AbsNode = NativeNode<"abs">;
export type LeNode = NativeNode<"le">;
export type LeqNode = NativeNode<"leq">;
export type GeNode = NativeNode<"ge">;
export type GeqNode = NativeNode<"geq">;
export type PowNode = NativeNode<"pow">;
export type ModNode = NativeNode<"mod">;
export type MinNode = NativeNode<"min">;
export type MaxNode = NativeNode<"max">;

export type AddNode = NativeNode<"add">;
export type SubNode = NativeNode<"sub">;
export type MulNode = NativeNode<"mul">;
export type DivNode = NativeNode<"div">;

// Oscillators

export type PhasorNode = NativeNode<"phasor">;

// Samples

export type SampleNode = NativeNode<"sample">;
export type TableNode = NativeNode<"table">;

// Signals

export type LatchNode = NativeNode<"latch">;
export type SeqNode = NativeNode<"seq">;
