import * as children from "./";
import * as names from "../../names";

/**
 * Maps native builtin node names to their children.
 */
export type BuiltinNativeNameChildrenMap =
  /* Analysis */
  Record<names.MeterName, children.MeterChildren> &
    /* Native */
    Record<names.MetroName, children.MetroChildren> &
    Record<names.RandName, children.RandChildren> &
    /* Basics */
    Record<names.SrName, children.SrChildren> &
    Record<names.ConstName, children.ConstChildren> &
    Record<names.CounterName, children.CounterChildren> &
    /* Delays */
    Record<names.ZName, children.ZChildren> &
    Record<names.TapOutName, children.TapOutChildren> &
    Record<names.TapInName, children.TapInChildren> &
    Record<names.DelayName, children.DelayChildren> &
    /* Filters */
    Record<names.PoleName, children.PoleChildren> &
    Record<names.BiquadName, children.BiquadChildren> &
    Record<names.ConvolveName, children.ConvolveChildren> &
    /* Math */
    Record<names.SinName, children.SinChildren> &
    Record<names.CosName, children.CosChildren> &
    Record<names.TanName, children.TanChildren> &
    Record<names.TanhName, children.TanhChildren> &
    Record<names.AsinhName, children.AsinhChildren> &
    Record<names.LnName, children.LnChildren> &
    Record<names.LogName, children.LogChildren> &
    Record<names.Log2Name, children.Log2Children> &
    Record<names.CeilName, children.CeilChildren> &
    Record<names.FloorName, children.FloorChildren> &
    Record<names.SqrtName, children.SqrtChildren> &
    Record<names.ExpName, children.ExpChildren> &
    Record<names.AbsName, children.AbsChildren> &
    Record<names.LeName, children.LeChildren> &
    Record<names.LeqName, children.LeqChildren> &
    Record<names.GeName, children.GeChildren> &
    Record<names.GeqName, children.GeqChildren> &
    Record<names.PowName, children.PowChildren> &
    Record<names.ModName, children.ModChildren> &
    Record<names.MinName, children.MinChildren> &
    Record<names.MaxName, children.MaxChildren> &
    Record<names.AddName, children.AddChildren> &
    Record<names.SubName, children.SubChildren> &
    Record<names.MulName, children.MulChildren> &
    Record<names.DivName, children.DivChildren> &
    /* Noise */
    /* Oscillators */
    Record<names.PhasorName, children.PhasorChildren> &
    /* Samples */
    Record<names.SampleName, children.SampleChildren> &
    Record<names.TableName, children.TableChildren> &
    /* Signals */
    Record<names.LatchName, children.LatchChildren> &
    Record<names.SeqName, children.SeqChildren> &
    /* In */
    Record<names.InName, children.InChildren>;

/**
 * Maps composite builtin node names to their children.
 */
export type BuiltinCompositeNameChildrenMap =
  /* Analysis */
  /* Native */
  /* Basics */
  Record<names.SelectName, children.SelectChildren> &
    /* Delays */
    /* Filters */
    Record<names.ZeroName, children.ZeroChildren> &
    Record<names.DcBlockName, children.DcBlockChildren> &
    Record<names.Df11Name, children.Df11Children> &
    Record<names.SmoothName, children.SmoothChildren> &
    Record<names.SmName, children.SmChildren> &
    Record<names.LowPassName, children.LowPassChildren> &
    Record<names.HighPassName, children.HighPassChildren> &
    Record<names.BandPassName, children.BandPassChildren> &
    Record<names.AllPassName, children.AllPassChildren> &
    Record<names.NotchName, children.NotchChildren> &
    Record<names.PeakName, children.PeakChildren> &
    Record<names.LowShelfName, children.LowShelfChildren> &
    Record<names.HighShelfName, children.HighShelfChildren> &
    Record<names.PinkName, children.PinkChildren> &
    /* Math */
    /* Noise */
    Record<names.NoiseName, children.NoiseChildren> &
    Record<names.PinkNoiseName, children.PinkNoiseChildren> &
    /* Oscillators */
    Record<names.TrainName, children.TrainChildren> &
    Record<names.CycleName, children.CycleChildren> &
    Record<names.SawName, children.SawChildren> &
    Record<names.SquareName, children.SquareChildren> &
    Record<names.TriangleName, children.TriangleChildren> &
    Record<names.BlepSawName, children.BlepSawChildren> &
    Record<names.BlepSquareName, children.BlepSquareChildren> &
    Record<names.BlepTriangleName, children.BlepTriangleChildren> &
    /* Samples */
    /* Signals */
    Record<names.EnvName, children.EnvChildren> &
    Record<names.AdsrName, children.AdsrChildren> &
    Record<names.HannName, children.HannChildren>;
/* In */
