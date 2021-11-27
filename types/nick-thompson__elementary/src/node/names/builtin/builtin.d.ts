import * as names from "./";

/**
 * Builtin native node names.
 */
export type BuiltinNativeName =
  /* Analysis */
  | names.MeterName
  /* Native */
  | names.MetroName
  | names.RandName
  /* Basics */
  | names.SrName
  | names.ConstName
  | names.CounterName
  /* Delays */
  | names.ZName
  | names.TapInName
  | names.TapOutName
  | names.DelayName
  /* Filters */
  | names.PoleName
  | names.BiquadName
  | names.ConvolveName
  /* Math */
  | names.SinName
  | names.CosName
  | names.TanName
  | names.TanhName
  | names.AsinhName
  | names.LnName
  | names.LogName
  | names.Log2Name
  | names.CeilName
  | names.FloorName
  | names.SqrtName
  | names.ExpName
  | names.AbsName
  | names.LeName
  | names.LeqName
  | names.GeName
  | names.GeqName
  | names.PowName
  | names.AddName
  | names.SubName
  | names.MulName
  | names.DivName
  | names.ModName
  | names.MinName
  | names.MaxName
  /* Noise */
  /* Oscillators */
  | names.PhasorName
  /* Samples */
  | names.SampleName
  | names.TableName
  /* Signals */
  | names.LatchName
  | names.SeqName
  /* In */
  | names.InName;

/**
 * Names of builtin composite nodes.
 */
export type BuiltinCompositeName =
  /* Analysis */
  /* Native */
  /* Basics */
  | names.SelectName
  /* Delays */
  /* Filters */
  | names.ZeroName
  | names.DcBlockName
  | names.Df11Name
  | names.SmoothName
  | names.SmName
  | names.LowPassName
  | names.HighPassName
  | names.BandPassName
  | names.AllPassName
  | names.NotchName
  | names.PeakName
  | names.LowShelfName
  | names.HighShelfName
  | names.PinkName
  /* Math */
  /* Noise */
  | names.NoiseName
  | names.PinkNoiseName
  /* Oscillators */
  | names.TrainName
  | names.CycleName
  | names.SawName
  | names.SquareName
  | names.TriangleName
  | names.BlepSawName
  | names.BlepSquareName
  | names.BlepTriangleName
  /* Samples */
  /* Signals */
  | names.EnvName
  | names.AdsrName
  | names.HannName;
/* In */

/**
 * Builtin node names.
 */
export type BuiltinName = BuiltinNativeName | BuiltinCompositeName;
