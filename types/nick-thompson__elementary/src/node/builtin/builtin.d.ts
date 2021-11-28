import { node } from "@nick-thompson/elementary";

/**
 * Maps {@link node.NativeBuiltinName} to their {@link node.Node}.
 */
export type BuiltinNativeNameNodeMap =
  /* Analysis */
  Record<node.MeterName, node.MeterNode> &
    /* Native */
    Record<node.MetroName, node.MetroNode> &
    Record<node.RandName, node.RandNode> &
    /* Basics */
    Record<node.SrName, node.SrNode> &
    Record<node.ConstName, node.ConstNode> &
    Record<node.CounterName, node.CounterNode> &
    /* Delays */
    Record<node.ZName, node.ZNode> &
    Record<node.TapOutName, node.TapOutNode> &
    Record<node.TapInName, node.TapInNode> &
    Record<node.DelayName, node.DelayNode> &
    /* Filters */
    Record<node.PoleName, node.PoleNode> &
    Record<node.BiquadName, node.BiquadNode> &
    Record<node.ConvolveName, node.ConvolveNode> &
    /* Math */
    Record<node.SinName, node.SinNode> &
    Record<node.CosName, node.CosNode> &
    Record<node.TanName, node.TanNode> &
    Record<node.TanhName, node.TanhNode> &
    Record<node.AsinhName, node.AsinhNode> &
    Record<node.LnName, node.LnNode> &
    Record<node.LogName, node.LogNode> &
    Record<node.Log2Name, node.Log2Node> &
    Record<node.CeilName, node.CeilNode> &
    Record<node.FloorName, node.FloorNode> &
    Record<node.SqrtName, node.SqrtNode> &
    Record<node.ExpName, node.ExpNode> &
    Record<node.AbsName, node.AbsNode> &
    Record<node.LeName, node.LeNode> &
    Record<node.LeqName, node.LeqNode> &
    Record<node.GeName, node.GeNode> &
    Record<node.GeqName, node.GeqNode> &
    Record<node.PowName, node.PowNode> &
    Record<node.ModName, node.ModNode> &
    Record<node.MinName, node.MinNode> &
    Record<node.MaxName, node.MaxNode> &
    Record<node.AddName, node.AddNode> &
    Record<node.SubName, node.SubNode> &
    Record<node.MulName, node.MulNode> &
    Record<node.DivName, node.DivNode> &
    /* Noise */
    /* Oscillators */
    Record<node.PhasorName, node.PhasorNode> &
    /* Samples */
    Record<node.SampleName, node.SampleNode> &
    Record<node.TableName, node.TableNode> &
    /* Signals */
    Record<node.LatchName, node.LatchNode> &
    Record<node.SeqName, node.SeqNode> &
    /* In */
    Record<node.InName, node.InNode>;

/**
 * Maps {@link node.CompositeBuiltinName} to their {@link node.Node}.
 */
export type BuiltinCompositeNameNodeMap =
  /* Analysis */
  /* Native */
  /* Basics */
  Record<node.SelectName, node.SelectNode> &
    /* Delays */
    /* Filters */
    Record<node.ZeroName, node.ZeroNode> &
    Record<node.DcBlockName, node.DcBlockNode> &
    Record<node.Df11Name, node.Df11Node> &
    Record<node.SmoothName, node.SmoothNode> &
    Record<node.SmName, node.SmNode> &
    Record<node.LowPassName, node.LowPassNode> &
    Record<node.HighPassName, node.HighPassNode> &
    Record<node.BandPassName, node.BandPassNode> &
    Record<node.AllPassName, node.AllPassNode> &
    Record<node.NotchName, node.NotchNode> &
    Record<node.PeakName, node.PeakNode> &
    Record<node.LowShelfName, node.LowShelfNode> &
    Record<node.HighShelfName, node.HighShelfNode> &
    Record<node.PinkName, node.PinkNode> &
    /* Math */
    /* Noise */
    Record<node.NoiseName, node.NoiseNode> &
    Record<node.PinkNoiseName, node.PinkNoiseNode> &
    /* Oscillators */
    Record<node.TrainName, node.TrainNode> &
    Record<node.CycleName, node.CycleNode> &
    Record<node.SawName, node.SawNode> &
    Record<node.SquareName, node.SquareNode> &
    Record<node.TriangleName, node.TriangleNode> &
    Record<node.BlepSawName, node.BlepSawNode> &
    Record<node.BlepSquareName, node.BlepSquareNode> &
    Record<node.BlepTriangleName, node.BlepTriangleNode> &
    /* Samples */
    /* Signals */
    Record<node.EnvName, node.EnvNode> &
    Record<node.AdsrName, node.AdsrNode> &
    Record<node.HannName, node.HannNode>;
/* In */

/**
 * Maps {@link node.BuiltinName} to their {@link node.Node}.
 */
export type BuiltinNameNodeMap = BuiltinNativeNameNodeMap &
  BuiltinCompositeNameNodeMap;
