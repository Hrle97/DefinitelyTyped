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

import { CompositeFunction } from "../types";

/**
 * PhasorNode type.
 */
export type PhasorType = "phasor";

/**
 * TrainNode type.
 */
export type TrainType = CompositeFunction<"train", TrainProps, TrainChildren>;

/**
 * CycleNode type.
 */
export type CycleType = CompositeFunction<"cycle", CycleProps, CycleChildren>;

/**
 * SawNode type.
 */
export type SawType = CompositeFunction<"saw", SawProps, SawChildren>;

/**
 * SquareNode type.
 */
export type SquareType = CompositeFunction<
  "square",
  SquareProps,
  SquareChildren
>;

/**
 * TriangleNode type.
 */
export type TriangleType = CompositeFunction<
  "triangle",
  TriangleProps,
  TriangleChildren
>;

/**
 * BlepSawNode type.
 */
export type BlepSawType = CompositeFunction<
  "blepsaw",
  BlepSawProps,
  BlepSawChildren
>;

/**
 * BlepSquareNode type.
 */
export type BlepSquareType = CompositeFunction<
  "blepsquare",
  BlepSquareProps,
  BlepSquareChildren
>;

/**
 * BlepTriangleNode type.
 */
export type BlepTriangleType = CompositeFunction<
  "bleptriangle",
  BlepTriangleProps,
  BlepTriangleChildren
>;
