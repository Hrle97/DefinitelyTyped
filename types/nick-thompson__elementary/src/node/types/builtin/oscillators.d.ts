import { node } from "@nick-thompson/elementary";

/**
 * {@link node.PhasorNode} {@link node.Type}.
 *
 * @see node.PhasorNode
 * @see node.PhasorName
 */
export type PhasorType = node.PhasorName;

/**
 * {@link node.TrainNode} {@link node.Type}.
 *
 * @see node.TrainNode
 * @see node.CompositeFunction
 * @see node.TrainName
 * @see node.TrainProps
 * @see node.TrainChildren
 */
export type TrainType = node.CompositeFunction<
  node.TrainName,
  node.TrainProps,
  node.TrainChildren
>;

/**
 * {@link node.CycleNode} {@link node.Type}.
 *
 * @see node.CycleNode
 * @see node.CompositeFunction
 * @see node.CycleName
 * @see node.CycleProps
 * @see node.CycleChildren
 */
export type CycleType = node.CompositeFunction<
  node.CycleName,
  node.CycleProps,
  node.CycleChildren
>;

/**
 * {@link node.SawNode} {@link node.Type}.
 *
 * @see node.SawNode
 * @see node.CompositeFunction
 * @see node.SawName
 * @see node.SawProps
 * @see node.SawChildren
 */
export type SawType = node.CompositeFunction<
  node.SawName,
  node.SawProps,
  node.SawChildren
>;

/**
 * {@link node.SquareNode} {@link node.Type}.
 *
 * @see node.SquareNode
 * @see node.CompositeFunction
 * @see node.SquareName
 * @see node.SquareProps
 * @see node.SquareChildren
 */
export type SquareType = node.CompositeFunction<
  node.SquareName,
  node.SquareProps,
  node.SquareChildren
>;

/**
 * {@link node.TriangleNode} {@link node.Type}.
 *
 * @see node.TriangleNode
 * @see node.CompositeFunction
 * @see node.TriangleName
 * @see node.TriangleProps
 * @see node.TriangleChildren
 */
export type TriangleType = node.CompositeFunction<
  node.TriangleName,
  node.TriangleProps,
  node.TriangleChildren
>;

/**
 * {@link node.BlepSawNode} {@link node.Type}.
 *
 * @see node.BlepSawNode
 * @see node.CompositeFunction
 * @see node.BlepSawName
 * @see node.BlepSawProps
 * @see node.BlepSawChildren
 */
export type BlepSawType = node.CompositeFunction<
  node.BlepSawName,
  node.BlepSawProps,
  node.BlepSawChildren
>;

/**
 * {@link node.BlepSquareNode} {@link node.Type}.
 *
 * @see node.BlepSquareNode
 * @see node.CompositeFunction
 * @see node.BlepSquareName
 * @see node.BlepSquareProps
 * @see node.BlepSquareChildren
 */
export type BlepSquareType = node.CompositeFunction<
  node.BlepSquareName,
  node.BlepSquareProps,
  node.BlepSquareChildren
>;

/**
 * {@link node.BlepTriangleNode} {@link node.Type}.
 *
 * @see node.BlepTriangleNode
 * @see node.CompositeFunction
 * @see node.BlepTriangleName
 * @see node.BlepTriangleProps
 * @see node.BlepTriangleChildren
 */
export type BlepTriangleType = node.CompositeFunction<
  node.BlepTriangleName,
  node.BlepTriangleProps,
  node.BlepTriangleChildren
>;
