import * as types from "./";
import * as names from "../../names";

/**
 * Maps native builtin node names to their types.
 */
export type BuiltinNativeNameTypeMap =
  /* Analysis */
  Record<names.MeterName, types.MeterType> &
    /* Native */
    Record<names.MetroName, types.MetroType> &
    Record<names.RandName, types.RandType> &
    /* Basics */
    Record<names.SrName, types.SrType> &
    Record<names.ConstName, types.ConstType> &
    Record<names.CounterName, types.CounterType> &
    /* Delays */
    Record<names.ZName, types.ZType> &
    Record<names.TapOutName, types.TapOutType> &
    Record<names.TapInName, types.TapInType> &
    Record<names.DelayName, types.DelayType> &
    /* Filters */
    Record<names.PoleName, types.PoleType> &
    Record<names.BiquadName, types.BiquadType> &
    Record<names.ConvolveName, types.ConvolveType> &
    /* Math */
    Record<names.SinName, types.SinType> &
    Record<names.CosName, types.CosType> &
    Record<names.TanName, types.TanType> &
    Record<names.TanhName, types.TanhType> &
    Record<names.AsinhName, types.AsinhType> &
    Record<names.LnName, types.LnType> &
    Record<names.LogName, types.LogType> &
    Record<names.Log2Name, types.Log2Type> &
    Record<names.CeilName, types.CeilType> &
    Record<names.FloorName, types.FloorType> &
    Record<names.SqrtName, types.SqrtType> &
    Record<names.ExpName, types.ExpType> &
    Record<names.AbsName, types.AbsType> &
    Record<names.LeName, types.LeType> &
    Record<names.LeqName, types.LeqType> &
    Record<names.GeName, types.GeType> &
    Record<names.GeqName, types.GeqType> &
    Record<names.PowName, types.PowType> &
    Record<names.ModName, types.ModType> &
    Record<names.MinName, types.MinType> &
    Record<names.MaxName, types.MaxType> &
    Record<names.AddName, types.AddType> &
    Record<names.SubName, types.SubType> &
    Record<names.MulName, types.MulType> &
    Record<names.DivName, types.DivType> &
    /* Noise */
    /* Oscillators */
    Record<names.PhasorName, types.PhasorType> &
    /* Samples */
    Record<names.SampleName, types.SampleType> &
    Record<names.TableName, types.TableType> &
    /* Signals */
    Record<names.LatchName, types.LatchType> &
    Record<names.SeqName, types.SeqType> &
    /* In */
    Record<names.InName, types.InType>;

/**
 * Maps composite builtin node names to their types.
 */
export type BuiltinCompositeNameTypeMap =
  /* Analysis */
  /* Native */
  /* Basics */
  Record<names.SelectName, types.SelectType> &
    /* Delays */
    /* Filters */
    Record<names.ZeroName, types.ZeroType> &
    Record<names.DcBlockName, types.DcBlockType> &
    Record<names.Df11Name, types.Df11Type> &
    Record<names.SmoothName, types.SmoothType> &
    Record<names.SmName, types.SmType> &
    Record<names.LowPassName, types.LowPassType> &
    Record<names.HighPassName, types.HighPassType> &
    Record<names.BandPassName, types.BandPassType> &
    Record<names.AllPassName, types.AllPassType> &
    Record<names.NotchName, types.NotchType> &
    Record<names.PeakName, types.PeakType> &
    Record<names.LowShelfName, types.LowShelfType> &
    Record<names.HighShelfName, types.HighShelfType> &
    Record<names.PinkName, types.PinkType> &
    /* Math */
    /* Noise */
    Record<names.NoiseName, types.NoiseType> &
    Record<names.PinkNoiseName, types.PinkNoiseType> &
    /* Oscillators */
    Record<names.TrainName, types.TrainType> &
    Record<names.CycleName, types.CycleType> &
    Record<names.SawName, types.SawType> &
    Record<names.SquareName, types.SquareType> &
    Record<names.TriangleName, types.TriangleType> &
    Record<names.BlepSawName, types.BlepSawType> &
    Record<names.BlepSquareName, types.BlepSquareType> &
    Record<names.BlepTriangleName, types.BlepTriangleType> &
    /* Samples */
    /* Signals */
    Record<names.EnvName, types.EnvType> &
    Record<names.AdsrName, types.AdsrType> &
    Record<names.HannName, types.HannType>;
/* In */

/**
 * Maps builtin node names to their type.
 */
export type BuiltinNameTypeMap = BuiltinNativeNameTypeMap &
  BuiltinCompositeNameTypeMap;
