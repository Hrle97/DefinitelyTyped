import { node } from "@nick-thompson/elementary";

/**
 * Maps {@link node.BuiltinNativeName}s to their {@link node.Node}.
 */
export type BuiltinNativeNameChildrenMap =
  /* Analysis */
  Record<node.MeterName, node.MeterChildren> &
    /* Native */
    Record<node.MetroName, node.MetroChildren> &
    Record<node.RandName, node.RandChildren> &
    /* Basics */
    Record<node.SrName, node.SrChildren> &
    Record<node.ConstName, node.ConstChildren> &
    Record<node.CounterName, node.CounterChildren> &
    /* Delays */
    Record<node.ZName, node.ZChildren> &
    Record<node.TapOutName, node.TapOutChildren> &
    Record<node.TapInName, node.TapInChildren> &
    Record<node.DelayName, node.DelayChildren> &
    /* Filters */
    Record<node.PoleName, node.PoleChildren> &
    Record<node.BiquadName, node.BiquadChildren> &
    Record<node.ConvolveName, node.ConvolveChildren> &
    /* Math */
    Record<node.SinName, node.SinChildren> &
    Record<node.CosName, node.CosChildren> &
    Record<node.TanName, node.TanChildren> &
    Record<node.TanhName, node.TanhChildren> &
    Record<node.AsinhName, node.AsinhChildren> &
    Record<node.LnName, node.LnChildren> &
    Record<node.LogName, node.LogChildren> &
    Record<node.Log2Name, node.Log2Children> &
    Record<node.CeilName, node.CeilChildren> &
    Record<node.FloorName, node.FloorChildren> &
    Record<node.SqrtName, node.SqrtChildren> &
    Record<node.ExpName, node.ExpChildren> &
    Record<node.AbsName, node.AbsChildren> &
    Record<node.LeName, node.LeChildren> &
    Record<node.LeqName, node.LeqChildren> &
    Record<node.GeName, node.GeChildren> &
    Record<node.GeqName, node.GeqChildren> &
    Record<node.PowName, node.PowChildren> &
    Record<node.ModName, node.ModChildren> &
    Record<node.MinName, node.MinChildren> &
    Record<node.MaxName, node.MaxChildren> &
    Record<node.AddName, node.AddChildren> &
    Record<node.SubName, node.SubChildren> &
    Record<node.MulName, node.MulChildren> &
    Record<node.DivName, node.DivChildren> &
    /* Noise */
    /* Oscillators */
    Record<node.PhasorName, node.PhasorChildren> &
    /* Samples */
    Record<node.SampleName, node.SampleChildren> &
    Record<node.TableName, node.TableChildren> &
    /* Signals */
    Record<node.LatchName, node.LatchChildren> &
    Record<node.SeqName, node.SeqChildren> &
    /* In */
    Record<node.InName, node.InChildren>;

/**
 * Maps {@link node.BuiltinCompositeName}s to their {@link node.Node}.
 */
export type BuiltinCompositeNameChildrenMap =
  /* Analysis */
  /* Native */
  /* Basics */
  Record<node.SelectName, node.SelectChildren> &
    /* Delays */
    /* Filters */
    Record<node.ZeroName, node.ZeroChildren> &
    Record<node.DcBlockName, node.DcBlockChildren> &
    Record<node.Df11Name, node.Df11Children> &
    Record<node.SmoothName, node.SmoothChildren> &
    Record<node.SmName, node.SmChildren> &
    Record<node.LowPassName, node.LowPassChildren> &
    Record<node.HighPassName, node.HighPassChildren> &
    Record<node.BandPassName, node.BandPassChildren> &
    Record<node.AllPassName, node.AllPassChildren> &
    Record<node.NotchName, node.NotchChildren> &
    Record<node.PeakName, node.PeakChildren> &
    Record<node.LowShelfName, node.LowShelfChildren> &
    Record<node.HighShelfName, node.HighShelfChildren> &
    Record<node.PinkName, node.PinkChildren> &
    /* Math */
    /* Noise */
    Record<node.NoiseName, node.NoiseChildren> &
    Record<node.PinkNoiseName, node.PinkNoiseChildren> &
    /* Oscillators */
    Record<node.TrainName, node.TrainChildren> &
    Record<node.CycleName, node.CycleChildren> &
    Record<node.SawName, node.SawChildren> &
    Record<node.SquareName, node.SquareChildren> &
    Record<node.TriangleName, node.TriangleChildren> &
    Record<node.BlepSawName, node.BlepSawChildren> &
    Record<node.BlepSquareName, node.BlepSquareChildren> &
    Record<node.BlepTriangleName, node.BlepTriangleChildren> &
    /* Samples */
    /* Signals */
    Record<node.EnvName, node.EnvChildren> &
    Record<node.AdsrName, node.AdsrChildren> &
    Record<node.HannName, node.HannChildren>;
/* In */

/**
 * Maps {@link node.BuiltinName}s to their {@link node.Node}.
 *
 * @see node.BuiltinNativeNameChildrenMap
 * @see node.BuiltinCompositeNameChildrenMap
 */
export type BuiltinNameChildrenMap = node.BuiltinNativeNameChildrenMap &
  node.BuiltinCompositeNameChildrenMap;
