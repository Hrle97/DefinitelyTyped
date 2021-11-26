/**
 * Names of builtin native nodes.
 */
export type BuiltinNativeName =
  /* Analysis */
  | "meter"
  /* Native */
  | "metro"
  | "rand"
  /* Basics */
  | "in"
  | "sr"
  | "const"
  | "counter"
  /* Delays */
  | "z"
  | "tapIn"
  | "tapOut"
  | "delay"
  /* Filters */
  | "pole"
  | "biquad"
  | "convolve"
  /* Math */
  | "sin"
  | "cos"
  | "tan"
  | "tanh"
  | "asinh"
  | "ln"
  | "log"
  | "log2"
  | "ceil"
  | "floor"
  | "sqrt"
  | "exp"
  | "abs"
  | "le"
  | "leq"
  | "ge"
  | "geq"
  | "pow"
  | "add"
  | "sub"
  | "mul"
  | "div"
  | "mod"
  | "min"
  | "max"
  /* Noise */
  /* Oscillators */
  | "phasor"
  /* Samples */
  | "sample"
  | "table"
  /* Signals */
  | "latch"
  | "seq"
  /* In */
  | "in";

/**
 * Names of builtin composite nodes.
 */
export type BuiltinCompositeName =
  /* Analysis */
  /* Native */
  /* Basics */
  /* Delays */
  /* Filters */
  | "zero"
  | "dcblock"
  | "df11"
  | "smooth"
  | "sm"
  | "lowpass"
  | "highpass"
  | "bandpass"
  | "allpass"
  | "notch"
  | "peak"
  | "lowshelf"
  | "highshelf"
  | "pink"
  /* Math */
  /* Noise */
  | "noise"
  | "pinknoise"
  /* Oscillators */
  | "train"
  | "cycle"
  | "saw"
  | "square"
  | "triangle"
  | "blepsaw"
  | "blepsquare"
  | "bleptriangle"
  /* Samples */
  /* Signals */
  | "env"
  | "adsr"
  | "hann";
/* In */

/**
 * Names of builtin nodes.
 */
export type BuiltinName = BuiltinNativeName | BuiltinCompositeName;

/**
 * Names of nodes.
 */
export type Name = string;
