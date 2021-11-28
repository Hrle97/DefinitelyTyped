import { node } from "@nick-thompson/elementary";

/**
 * Builtin native {@link node.Node} names.
 */
export type BuiltinNativeName =
  /* Analysis */
  | node.MeterName
  /* Native */
  | node.MetroName
  | node.RandName
  /* Basics */
  | node.SrName
  | node.ConstName
  | node.CounterName
  /* Delays */
  | node.ZName
  | node.TapInName
  | node.TapOutName
  | node.DelayName
  /* Filters */
  | node.PoleName
  | node.BiquadName
  | node.ConvolveName
  /* Math */
  | node.SinName
  | node.CosName
  | node.TanName
  | node.TanhName
  | node.AsinhName
  | node.LnName
  | node.LogName
  | node.Log2Name
  | node.CeilName
  | node.FloorName
  | node.SqrtName
  | node.ExpName
  | node.AbsName
  | node.LeName
  | node.LeqName
  | node.GeName
  | node.GeqName
  | node.PowName
  | node.AddName
  | node.SubName
  | node.MulName
  | node.DivName
  | node.ModName
  | node.MinName
  | node.MaxName
  /* Noise */
  /* Oscillators */
  | node.PhasorName
  /* Samples */
  | node.SampleName
  | node.TableName
  /* Signals */
  | node.LatchName
  | node.SeqName
  /* In */
  | node.InName;

/**
 * Builtin composite {@link node.Node} names.
 */
export type BuiltinCompositeName =
  /* Analysis */
  /* Native */
  /* Basics */
  | node.SelectName
  /* Delays */
  /* Filters */
  | node.ZeroName
  | node.DcBlockName
  | node.Df11Name
  | node.SmoothName
  | node.SmName
  | node.LowPassName
  | node.HighPassName
  | node.BandPassName
  | node.AllPassName
  | node.NotchName
  | node.PeakName
  | node.LowShelfName
  | node.HighShelfName
  | node.PinkName
  /* Math */
  /* Noise */
  | node.NoiseName
  | node.PinkNoiseName
  /* Oscillators */
  | node.TrainName
  | node.CycleName
  | node.SawName
  | node.SquareName
  | node.TriangleName
  | node.BlepSawName
  | node.BlepSquareName
  | node.BlepTriangleName
  /* Samples */
  /* Signals */
  | node.EnvName
  | node.AdsrName
  | node.HannName;
/* In */

/**
 * Builtin {@link node.Node} names.
 */
export type BuiltinName = node.BuiltinNativeName | node.BuiltinCompositeName;
