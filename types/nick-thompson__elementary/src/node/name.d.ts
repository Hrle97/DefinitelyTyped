/**
 * Builtin native node names.
 */
export type BuiltinNativeName =
  /* Analysis */
  | "meter"
  /* Native */
  | "metro"
  | "rand"
  /* Basics */
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
  | "select"
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
 * Builtin node names.
 */
export type BuiltinName = BuiltinNativeName | BuiltinCompositeName;

/**
 * Native node names.
 */
export type NativeName = string;

/**
 * Composite node names.
 */
export type CompositeName = string;

/**
 * Node names.
 */
export type Name = NativeName | CompositeName;
