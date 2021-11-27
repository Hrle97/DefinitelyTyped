import * as node from "./";
import * as names from "../names";

/**
 * Maps native builtin node names to their node.
 */
export type BuiltinNativeNameNodeMap =
  /* Analysis */
  Record<names.MeterName, node.MeterNode> &
    /* Native */
    Record<names.MetroName, node.MetroNode> &
    Record<names.RandName, node.RandNode> &
    /* Basics */
    Record<names.SrName, node.SrNode> &
    Record<names.ConstName, node.ConstNode> &
    Record<names.CounterName, node.CounterNode> &
    /* Delays */
    Record<names.ZName, node.ZNode> &
    Record<names.TapOutName, node.TapOutNode> &
    Record<names.TapInName, node.TapInNode> &
    Record<names.DelayName, node.DelayNode> &
    /* Filters */
    Record<names.PoleName, node.PoleNode> &
    Record<names.BiquadName, node.BiquadNode> &
    Record<names.ConvolveName, node.ConvolveNode> &
    /* Math */
    Record<names.SinName, node.SinNode> &
    Record<names.CosName, node.CosNode> &
    Record<names.TanName, node.TanNode> &
    Record<names.TanhName, node.TanhNode> &
    Record<names.AsinhName, node.AsinhNode> &
    Record<names.LnName, node.LnNode> &
    Record<names.LogName, node.LogNode> &
    Record<names.Log2Name, node.Log2Node> &
    Record<names.CeilName, node.CeilNode> &
    Record<names.FloorName, node.FloorNode> &
    Record<names.SqrtName, node.SqrtNode> &
    Record<names.ExpName, node.ExpNode> &
    Record<names.AbsName, node.AbsNode> &
    Record<names.LeName, node.LeNode> &
    Record<names.LeqName, node.LeqNode> &
    Record<names.GeName, node.GeNode> &
    Record<names.GeqName, node.GeqNode> &
    Record<names.PowName, node.PowNode> &
    Record<names.ModName, node.ModNode> &
    Record<names.MinName, node.MinNode> &
    Record<names.MaxName, node.MaxNode> &
    Record<names.AddName, node.AddNode> &
    Record<names.SubName, node.SubNode> &
    Record<names.MulName, node.MulNode> &
    Record<names.DivName, node.DivNode> &
    /* Noise */
    /* Oscillators */
    Record<names.PhasorName, node.PhasorNode> &
    /* Samples */
    Record<names.SampleName, node.SampleNode> &
    Record<names.TableName, node.TableNode> &
    /* Signals */
    Record<names.LatchName, node.LatchNode> &
    Record<names.SeqName, node.SeqNode> &
    /* In */
    Record<names.InName, node.InNode>;

/**
 * Maps composite builtin node names to their node.
 */
export type BuiltinCompositeNameNodeMap =
  /* Analysis */
  /* Native */
  /* Basics */
  Record<names.SelectName, node.SelectNode> &
    /* Delays */
    /* Filters */
    Record<names.ZeroName, node.ZeroNode> &
    Record<names.DcBlockName, node.DcBlockNode> &
    Record<names.Df11Name, node.Df11Node> &
    Record<names.SmoothName, node.SmoothNode> &
    Record<names.SmName, node.SmNode> &
    Record<names.LowPassName, node.LowPassNode> &
    Record<names.HighPassName, node.HighPassNode> &
    Record<names.BandPassName, node.BandPassNode> &
    Record<names.AllPassName, node.AllPassNode> &
    Record<names.NotchName, node.NotchNode> &
    Record<names.PeakName, node.PeakNode> &
    Record<names.LowShelfName, node.LowShelfNode> &
    Record<names.HighShelfName, node.HighShelfNode> &
    Record<names.PinkName, node.PinkNode> &
    /* Math */
    /* Noise */
    Record<names.NoiseName, node.NoiseNode> &
    Record<names.PinkNoiseName, node.PinkNoiseNode> &
    /* Oscillators */
    Record<names.TrainName, node.TrainNode> &
    Record<names.CycleName, node.CycleNode> &
    Record<names.SawName, node.SawNode> &
    Record<names.SquareName, node.SquareNode> &
    Record<names.TriangleName, node.TriangleNode> &
    Record<names.BlepSawName, node.BlepSawNode> &
    Record<names.BlepSquareName, node.BlepSquareNode> &
    Record<names.BlepTriangleName, node.BlepTriangleNode> &
    /* Samples */
    /* Signals */
    Record<names.EnvName, node.EnvNode> &
    Record<names.AdsrName, node.AdsrNode> &
    Record<names.HannName, node.HannNode>;
/* In */

/**
 * Maps builtin node names to their node.
 */
export type BuiltinNameNodeMap = BuiltinNativeNameNodeMap &
  BuiltinCompositeNameNodeMap;
