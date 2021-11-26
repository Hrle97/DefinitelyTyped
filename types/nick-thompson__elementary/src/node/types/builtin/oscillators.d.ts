import {
  TrainProps,
  CycleProps,
  SawProps,
  SquareProps,
  TriangleProps,
  BlepSawProps,
  BlepSquareProps,
  BlepTriangleProps,
} from "../../props/builtin/oscillators";

import {
  TrainChildren,
  CycleChildren,
  SawChildren,
  SquareChildren,
  TriangleChildren,
  BlepSawChildren,
  BlepSquareChildren,
  BlepTriangleChildren,
} from "../../children/builtin/oscillators";

import { CompositeNodeFunction } from "../types";

/**
 * PhasorNode type.
 */
export type PhasorType = "phasor";

/**
 * TrainNode type.
 */
export type TrainType = CompositeNodeFunction<
  "train",
  TrainProps,
  TrainChildren
>;

/**
 * CycleNode type.
 */
export type CycleType = CompositeNodeFunction<
  "cycle",
  CycleProps,
  CycleChildren
>;

/**
 * SawNode type.
 */
export type SawType = CompositeNodeFunction<"saw", SawProps, SawChildren>;

/**
 * SquareNode type.
 */
export type SquareType = CompositeNodeFunction<
  "square",
  SquareProps,
  SquareChildren
>;

/**
 * TriangleNode type.
 */
export type TriangleType = CompositeNodeFunction<
  "triangle",
  TriangleProps,
  TriangleChildren
>;

/**
 * BlepSawNode type.
 */
export type BlepSawType = CompositeNodeFunction<
  "blepsaw",
  BlepSawProps,
  BlepSawChildren
>;

/**
 * BlepSquareNode type.
 */
export type BlepSquareType = CompositeNodeFunction<
  "blepsquare",
  BlepSquareProps,
  BlepSquareChildren
>;

/**
 * BlepTriangleNode type.
 */
export type BlepTriangleType = CompositeNodeFunction<
  "bleptriangle",
  BlepTriangleProps,
  BlepTriangleChildren
>;
