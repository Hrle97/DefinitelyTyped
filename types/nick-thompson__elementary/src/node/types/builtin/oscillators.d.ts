import { CompositeFunction } from "../types";

/**
 * PhasorNode type.
 */
export type PhasorType = "phasor";

import { TrainProps } from "../../props";
import { TrainChildren } from "../../children";
/**
 * TrainNode type.
 */
export type TrainType = CompositeFunction<"train", TrainProps, TrainChildren>;

import { CycleProps } from "../../props";
import { CycleChildren } from "../../children";
/**
 * CycleNode type.
 */
export type CycleType = CompositeFunction<"cycle", CycleProps, CycleChildren>;

import { SawProps } from "../../props";
import { SawChildren } from "../../children";
/**
 * SawNode type.
 */
export type SawType = CompositeFunction<"saw", SawProps, SawChildren>;

import { SquareProps } from "../../props";
import { SquareChildren } from "../../children";
/**
 * SquareNode type.
 */
export type SquareType = CompositeFunction<
  "square",
  SquareProps,
  SquareChildren
>;

import { TriangleProps } from "../../props";
import { TriangleChildren } from "../../children";
/**
 * TriangleNode type.
 */
export type TriangleType = CompositeFunction<
  "triangle",
  TriangleProps,
  TriangleChildren
>;

import { BlepSawProps } from "../../props";
import { BlepSawChildren } from "../../children";
/**
 * BlepSawNode type.
 */
export type BlepSawType = CompositeFunction<
  "blepsaw",
  BlepSawProps,
  BlepSawChildren
>;

import { BlepSquareProps } from "../../props";
import { BlepSquareChildren } from "../../children";
/**
 * BlepSquareNode type.
 */
export type BlepSquareType = CompositeFunction<
  "blepsquare",
  BlepSquareProps,
  BlepSquareChildren
>;

import { BlepTriangleProps } from "../../props";
import { BlepTriangleChildren } from "../../children";
/**
 * BlepTriangleNode type.
 */
export type BlepTriangleType = CompositeFunction<
  "bleptriangle",
  BlepTriangleProps,
  BlepTriangleChildren
>;
