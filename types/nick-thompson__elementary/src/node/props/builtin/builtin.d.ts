import { node } from "@nick-thompson/elementary";

/**
 * Maps {@link node.BuiltinNativeName}s to their {@link node.Node}.
 */
export type BuiltinNativeNamePropsMap =
  /* Analysis */
  Record<node.MeterName, node.MeterProps> &
    /* Native */
    Record<node.MetroName, node.MetroProps> &
    Record<node.RandName, node.RandProps> &
    /* Basics */
    Record<node.SrName, node.SrProps> &
    Record<node.ConstName, node.ConstProps> &
    Record<node.CounterName, node.CounterProps> &
    /* Delays */
    Record<node.ZName, node.ZProps> &
    Record<node.TapOutName, node.TapOutProps> &
    Record<node.TapInName, node.TapInProps> &
    Record<node.DelayName, node.DelayProps> &
    /* Filters */
    Record<node.PoleName, node.PoleProps> &
    Record<node.BiquadName, node.BiquadProps> &
    Record<node.ConvolveName, node.ConvolveProps> &
    /* Math */
    Record<node.SinName, node.SinProps> &
    Record<node.CosName, node.CosProps> &
    Record<node.TanName, node.TanProps> &
    Record<node.TanhName, node.TanhProps> &
    Record<node.AsinhName, node.AsinhProps> &
    Record<node.LnName, node.LnProps> &
    Record<node.LogName, node.LogProps> &
    Record<node.Log2Name, node.Log2Props> &
    Record<node.CeilName, node.CeilProps> &
    Record<node.FloorName, node.FloorProps> &
    Record<node.SqrtName, node.SqrtProps> &
    Record<node.ExpName, node.ExpProps> &
    Record<node.AbsName, node.AbsProps> &
    Record<node.LeName, node.LeProps> &
    Record<node.LeqName, node.LeqProps> &
    Record<node.GeName, node.GeProps> &
    Record<node.GeqName, node.GeqProps> &
    Record<node.PowName, node.PowProps> &
    Record<node.ModName, node.ModProps> &
    Record<node.MinName, node.MinProps> &
    Record<node.MaxName, node.MaxProps> &
    Record<node.AddName, node.AddProps> &
    Record<node.SubName, node.SubProps> &
    Record<node.MulName, node.MulProps> &
    Record<node.DivName, node.DivProps> &
    /* Noise */
    /* Oscillators */
    Record<node.PhasorName, node.PhasorProps> &
    /* Samples */
    Record<node.SampleName, node.SampleProps> &
    Record<node.TableName, node.TableProps> &
    /* Signals */
    Record<node.LatchName, node.LatchProps> &
    Record<node.SeqName, node.SeqProps> &
    /* In */
    Record<node.InName, node.InProps>;

/**
 * Maps {@link node.BuiltinCompositeName}s to their {@link node.Node}.
 */
export type BuiltinCompositeNamePropsMap =
  /* Analysis */
  /* Native */
  /* Basics */
  Record<node.SelectName, node.SelectProps> &
    /* Delays */
    /* Filters */
    Record<node.ZeroName, node.ZeroProps> &
    Record<node.DcBlockName, node.DcBlockProps> &
    Record<node.Df11Name, node.Df11Props> &
    Record<node.SmoothName, node.SmoothProps> &
    Record<node.SmName, node.SmProps> &
    Record<node.LowPassName, node.LowPassProps> &
    Record<node.HighPassName, node.HighPassProps> &
    Record<node.BandPassName, node.BandPassProps> &
    Record<node.AllPassName, node.AllPassProps> &
    Record<node.NotchName, node.NotchProps> &
    Record<node.PeakName, node.PeakProps> &
    Record<node.LowShelfName, node.LowShelfProps> &
    Record<node.HighShelfName, node.HighShelfProps> &
    Record<node.PinkName, node.PinkProps> &
    /* Math */
    /* Noise */
    Record<node.NoiseName, node.NoiseProps> &
    Record<node.PinkNoiseName, node.PinkNoiseProps> &
    /* Oscillators */
    Record<node.TrainName, node.TrainProps> &
    Record<node.CycleName, node.CycleProps> &
    Record<node.SawName, node.SawProps> &
    Record<node.SquareName, node.SquareProps> &
    Record<node.TriangleName, node.TriangleProps> &
    Record<node.BlepSawName, node.BlepSawProps> &
    Record<node.BlepSquareName, node.BlepSquareProps> &
    Record<node.BlepTriangleName, node.BlepTriangleProps> &
    /* Samples */
    /* Signals */
    Record<node.EnvName, node.EnvProps> &
    Record<node.AdsrName, node.AdsrProps> &
    Record<node.HannName, node.HannProps>;
/* In */

/**
 * Maps {@link node.BuiltinName}s to their {@link node.Node}.
 *
 * @see node.BuiltinNativeNamePropsMap
 * @see node.BuiltinCompositeNamePropsMap
 */
export type BuiltinNamePropsMap = node.BuiltinNativeNamePropsMap &
  node.BuiltinCompositeNamePropsMap;
