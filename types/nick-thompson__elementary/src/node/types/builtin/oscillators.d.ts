import { CompositeFunction } from "../../composite";

import { PhasorName } from "../../names";
/**
 * PhasorNode type.
 *
 * @see PhasorName
 */
export type PhasorType = PhasorName;

import { TrainName } from "../../names";
import { TrainProps } from "../../props";
import { TrainChildren } from "../../children";
/**
 * TrainNode type.
 *
 * @see CompositeFunction
 * @see TrainName
 * @see TrainProps
 * @see TrainChildren
 */
export type TrainType = CompositeFunction<TrainName, TrainProps, TrainChildren>;

import { CycleName } from "../../names";
import { CycleProps } from "../../props";
import { CycleChildren } from "../../children";
/**
 * CycleNode type.
 *
 * @see CompositeFunction
 * @see CycleName
 * @see CycleProps
 * @see CycleChildren
 */
export type CycleType = CompositeFunction<CycleName, CycleProps, CycleChildren>;

import { SawName } from "../../names";
import { SawProps } from "../../props";
import { SawChildren } from "../../children";
/**
 * SawNode type.
 *
 * @see CompositeFunction
 * @see SawName
 * @see SawProps
 * @see SawChildren
 */
export type SawType = CompositeFunction<SawName, SawProps, SawChildren>;

import { SquareName } from "../../names";
import { SquareProps } from "../../props";
import { SquareChildren } from "../../children";
/**
 * SquareNode type.
 *
 * @see CompositeFunction
 * @see SquareName
 * @see SquareProps
 * @see SquareChildren
 */
export type SquareType = CompositeFunction<
  SquareName,
  SquareProps,
  SquareChildren
>;

import { TriangleName } from "../../names";
import { TriangleProps } from "../../props";
import { TriangleChildren } from "../../children";
/**
 * TriangleNode type.
 *
 * @see CompositeFunction
 * @see TriangleName
 * @see TriangleProps
 * @see TriangleChildren
 */
export type TriangleType = CompositeFunction<
  TriangleName,
  TriangleProps,
  TriangleChildren
>;

import { BlepSawName } from "../../names";
import { BlepSawProps } from "../../props";
import { BlepSawChildren } from "../../children";
/**
 * BlepSawNode type.
 *
 * @see CompositeFunction
 * @see BlepSawName
 * @see BlepSawProps
 * @see BlepSawChildren
 */
export type BlepSawType = CompositeFunction<
  BlepSawName,
  BlepSawProps,
  BlepSawChildren
>;

import { BlepSquareName } from "../../names";
import { BlepSquareProps } from "../../props";
import { BlepSquareChildren } from "../../children";
/**
 * BlepSquareNode type.
 *
 * @see CompositeFunction
 * @see BlepSquareName
 * @see BlepSquareProps
 * @see BlepSquareChildren
 */
export type BlepSquareType = CompositeFunction<
  BlepSquareName,
  BlepSquareProps,
  BlepSquareChildren
>;

import { BlepTriangleName } from "../../names";
import { BlepTriangleProps } from "../../props";
import { BlepTriangleChildren } from "../../children";
/**
 * BlepTriangleNode type.
 *
 * @see CompositeFunction
 * @see BlepTriangleName
 * @see BlepTriangleProps
 * @see BlepTriangleChildren
 */
export type BlepTriangleType = CompositeFunction<
  BlepTriangleName,
  BlepTriangleProps,
  BlepTriangleChildren
>;
