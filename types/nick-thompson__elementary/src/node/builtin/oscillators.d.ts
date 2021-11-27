import { TypeNode } from "../node";

import { PhasorType } from "../types";
/**
 * Outputs a ramp from 0 to 1 at the given rate.
 *
 * @see TypeNode
 * @see PhasorType
 */
export type PhasorNode = TypeNode<PhasorType>;

import { TrainType } from "../types";
/**
 * Outputs a pulse train alternating between 0 and 1 at the given rate.
 *
 * @see TypeNode
 * @see TrainType
 */
export type TrainNode = TypeNode<TrainType>;

import { CycleType } from "../types";
/**
 * Outputs a periodic sine tone at the given frequency.
 *
 * @see TypeNode
 * @see CycleType
 */
export type CycleNode = TypeNode<CycleType>;

import { SawType } from "../types";
/**
 * Outputs a naive sawtooth oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive sawtooth at audio rates, this
 * oscillator is used for low frequencly modulation.
 *
 * @see TypeNode
 * @see SawType
 */
export type SawNode = TypeNode<SawType>;

import { SquareType } from "../types";
/**
 * Outputs a naive square oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive square at audio rates, this
 * oscillator is used for low frequencly modulation.
 *
 * @see TypeNode
 * @see SquareType
 */
export type SquareNode = TypeNode<SquareType>;

import { TriangleType } from "../types";
/**
 * Outputs a naive triangle oscillator at the given frequency.
 *
 * Typically, due to the aliasing of the naive triangle at audio rates, this
 * oscillator is used for low frequencly modulation.
 *
 * @see TypeNode
 * @see TriangleType
 */
export type TriangleNode = TypeNode<TriangleType>;

import { BlepSawType } from "../types";
/**
 * Outputs a band-limited polyblep sawtooth waveform at the given frequency.
 *
 * @see TypeNode
 * @see BlepSawType
 */
export type BlepSawNode = TypeNode<BlepSawType>;

import { BlepSquareType } from "../types";
/**
 * Outputs a band-limited polyblep square waveform at the given frequency.
 *
 * @see TypeNode
 * @see BlepSquareType
 */
export type BlepSquareNode = TypeNode<BlepSquareType>;

import { BlepTriangleType } from "../types";
/**
 * Outputs a band-limited polyblep triangle waveform at the given frequency.
 *
 * @see TypeNode
 * @see BlepTriangleType
 */
export type BlepTriangleNode = TypeNode<BlepTriangleType>;
