import { TypeNode } from "../node";

import { MetroType } from "../types";
/**
 * Emits a pulse train signal much like the TrainNode, alternating from 0 to 1
 * at a given rate. Importantly, the MetroNode (metronome node) node is used
 * for synchronized train signals, and will emit the 'metro' event through a
 * Renderer's interface on each rising edge of its output signal.
 *
 * @see TypeNode
 * @see MetroType
 */
export type MetroNode = TypeNode<MetroType>;

import { RandType } from "../types";
/**
 * Generates a stream of random numbers uniformly distributed on the range
 * [0, 1].
 *
 * @see TypeNode
 * @see RandType
 */
export type RandNode = TypeNode<RandType>;
