import { node } from "@nick-thompson/elementary";

/**
 * Maps {@link node.BuiltinNativeName}s to their {@link node.Type}.
 */
export type BuiltinNativeNameTypeMap =
  /* Analysis */
  Record<node.MeterName, node.MeterType> &
    /* Native */
    Record<node.MetroName, node.MetroType> &
    Record<node.RandName, node.RandType> &
    /* Basics */
    Record<node.SrName, node.SrType> &
    Record<node.ConstName, node.ConstType> &
    Record<node.CounterName, node.CounterType> &
    /* Delays */
    Record<node.ZName, node.ZType> &
    Record<node.TapOutName, node.TapOutType> &
    Record<node.TapInName, node.TapInType> &
    Record<node.DelayName, node.DelayType> &
    /* Filters */
    Record<node.PoleName, node.PoleType> &
    Record<node.BiquadName, node.BiquadType> &
    Record<node.ConvolveName, node.ConvolveType> &
    /* Math */
    Record<node.SinName, node.SinType> &
    Record<node.CosName, node.CosType> &
    Record<node.TanName, node.TanType> &
    Record<node.TanhName, node.TanhType> &
    Record<node.AsinhName, node.AsinhType> &
    Record<node.LnName, node.LnType> &
    Record<node.LogName, node.LogType> &
    Record<node.Log2Name, node.Log2Type> &
    Record<node.CeilName, node.CeilType> &
    Record<node.FloorName, node.FloorType> &
    Record<node.SqrtName, node.SqrtType> &
    Record<node.ExpName, node.ExpType> &
    Record<node.AbsName, node.AbsType> &
    Record<node.LeName, node.LeType> &
    Record<node.LeqName, node.LeqType> &
    Record<node.GeName, node.GeType> &
    Record<node.GeqName, node.GeqType> &
    Record<node.PowName, node.PowType> &
    Record<node.ModName, node.ModType> &
    Record<node.MinName, node.MinType> &
    Record<node.MaxName, node.MaxType> &
    Record<node.AddName, node.AddType> &
    Record<node.SubName, node.SubType> &
    Record<node.MulName, node.MulType> &
    Record<node.DivName, node.DivType> &
    /* Noise */
    /* Oscillators */
    Record<node.PhasorName, node.PhasorType> &
    /* Samples */
    Record<node.SampleName, node.SampleType> &
    Record<node.TableName, node.TableType> &
    /* Signals */
    Record<node.LatchName, node.LatchType> &
    Record<node.SeqName, node.SeqType> &
    /* In */
    Record<node.InName, node.InType>;

/**
 * Maps {@link node.BuiltinCompositeName}s to their {@link node.Type}.
 */
export type BuiltinCompositeNameTypeMap =
  /* Analysis */
  /* Native */
  /* Basics */
  Record<node.SelectName, node.SelectType> &
    /* Delays */
    /* Filters */
    Record<node.ZeroName, node.ZeroType> &
    Record<node.DcBlockName, node.DcBlockType> &
    Record<node.Df11Name, node.Df11Type> &
    Record<node.SmoothName, node.SmoothType> &
    Record<node.SmName, node.SmType> &
    Record<node.LowPassName, node.LowPassType> &
    Record<node.HighPassName, node.HighPassType> &
    Record<node.BandPassName, node.BandPassType> &
    Record<node.AllPassName, node.AllPassType> &
    Record<node.NotchName, node.NotchType> &
    Record<node.PeakName, node.PeakType> &
    Record<node.LowShelfName, node.LowShelfType> &
    Record<node.HighShelfName, node.HighShelfType> &
    Record<node.PinkName, node.PinkType> &
    /* Math */
    /* Noise */
    Record<node.NoiseName, node.NoiseType> &
    Record<node.PinkNoiseName, node.PinkNoiseType> &
    /* Oscillators */
    Record<node.TrainName, node.TrainType> &
    Record<node.CycleName, node.CycleType> &
    Record<node.SawName, node.SawType> &
    Record<node.SquareName, node.SquareType> &
    Record<node.TriangleName, node.TriangleType> &
    Record<node.BlepSawName, node.BlepSawType> &
    Record<node.BlepSquareName, node.BlepSquareType> &
    Record<node.BlepTriangleName, node.BlepTriangleType> &
    /* Samples */
    /* Signals */
    Record<node.EnvName, node.EnvType> &
    Record<node.AdsrName, node.AdsrType> &
    Record<node.HannName, node.HannType>;
/* In */

/**
 * Maps {@link node.BuiltinName}s to their {@link node.Type}.
 *
 * @see node.BuiltinNativeNameTypeMap
 * @see node.BuiltinCompositeNameTypeMap
 */
export type BuiltinNameTypeMap = node.BuiltinNativeNameTypeMap &
  node.BuiltinCompositeNameTypeMap;
