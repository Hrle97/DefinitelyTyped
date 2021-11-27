import * as props from "./";
import * as names from "../../names";

/**
 * Maps native builtin node names to their props.
 */
export type BuiltinNativeNamePropsMap =
  /* Analysis */
  Record<names.MeterName, props.MeterProps> &
    /* Native */
    Record<names.MetroName, props.MetroProps> &
    Record<names.RandName, props.RandProps> &
    /* Basics */
    Record<names.SrName, props.SrProps> &
    Record<names.ConstName, props.ConstProps> &
    Record<names.CounterName, props.CounterProps> &
    /* Delays */
    Record<names.ZName, props.ZProps> &
    Record<names.TapOutName, props.TapOutProps> &
    Record<names.TapInName, props.TapInProps> &
    Record<names.DelayName, props.DelayProps> &
    /* Filters */
    Record<names.PoleName, props.PoleProps> &
    Record<names.BiquadName, props.BiquadProps> &
    Record<names.ConvolveName, props.ConvolveProps> &
    /* Math */
    Record<names.SinName, props.SinProps> &
    Record<names.CosName, props.CosProps> &
    Record<names.TanName, props.TanProps> &
    Record<names.TanhName, props.TanhProps> &
    Record<names.AsinhName, props.AsinhProps> &
    Record<names.LnName, props.LnProps> &
    Record<names.LogName, props.LogProps> &
    Record<names.Log2Name, props.Log2Props> &
    Record<names.CeilName, props.CeilProps> &
    Record<names.FloorName, props.FloorProps> &
    Record<names.SqrtName, props.SqrtProps> &
    Record<names.ExpName, props.ExpProps> &
    Record<names.AbsName, props.AbsProps> &
    Record<names.LeName, props.LeProps> &
    Record<names.LeqName, props.LeqProps> &
    Record<names.GeName, props.GeProps> &
    Record<names.GeqName, props.GeqProps> &
    Record<names.PowName, props.PowProps> &
    Record<names.ModName, props.ModProps> &
    Record<names.MinName, props.MinProps> &
    Record<names.MaxName, props.MaxProps> &
    Record<names.AddName, props.AddProps> &
    Record<names.SubName, props.SubProps> &
    Record<names.MulName, props.MulProps> &
    Record<names.DivName, props.DivProps> &
    /* Noise */
    /* Oscillators */
    Record<names.PhasorName, props.PhasorProps> &
    /* Samples */
    Record<names.SampleName, props.SampleProps> &
    Record<names.TableName, props.TableProps> &
    /* Signals */
    Record<names.LatchName, props.LatchProps> &
    Record<names.SeqName, props.SeqProps> &
    /* In */
    Record<names.InName, props.InProps>;

/**
 * Maps composite builtin node names to their props.
 */
export type BuiltinCompositeNamePropsMap =
  /* Analysis */
  /* Native */
  /* Basics */
  Record<names.SelectName, props.SelectProps> &
    /* Delays */
    /* Filters */
    Record<names.ZeroName, props.ZeroProps> &
    Record<names.DcBlockName, props.DcBlockProps> &
    Record<names.Df11Name, props.Df11Props> &
    Record<names.SmoothName, props.SmoothProps> &
    Record<names.SmName, props.SmProps> &
    Record<names.LowPassName, props.LowPassProps> &
    Record<names.HighPassName, props.HighPassProps> &
    Record<names.BandPassName, props.BandPassProps> &
    Record<names.AllPassName, props.AllPassProps> &
    Record<names.NotchName, props.NotchProps> &
    Record<names.PeakName, props.PeakProps> &
    Record<names.LowShelfName, props.LowShelfProps> &
    Record<names.HighShelfName, props.HighShelfProps> &
    Record<names.PinkName, props.PinkProps> &
    /* Math */
    /* Noise */
    Record<names.NoiseName, props.NoiseProps> &
    Record<names.PinkNoiseName, props.PinkNoiseProps> &
    /* Oscillators */
    Record<names.TrainName, props.TrainProps> &
    Record<names.CycleName, props.CycleProps> &
    Record<names.SawName, props.SawProps> &
    Record<names.SquareName, props.SquareProps> &
    Record<names.TriangleName, props.TriangleProps> &
    Record<names.BlepSawName, props.BlepSawProps> &
    Record<names.BlepSquareName, props.BlepSquareProps> &
    Record<names.BlepTriangleName, props.BlepTriangleProps> &
    /* Samples */
    /* Signals */
    Record<names.EnvName, props.EnvProps> &
    Record<names.AdsrName, props.AdsrProps> &
    Record<names.HannName, props.HannProps>;
/* In */
