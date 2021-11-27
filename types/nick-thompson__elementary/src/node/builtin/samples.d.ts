import { TypeNode } from "../node";

import { SampleType } from "../types";
/**
 * Loads a sample from disk and triggers its playback on the rising edge of an
 * incoming pulse train.
 *
 * @see TypeNode
 * @see SampleType
 */
export type SampleNode = TypeNode<SampleType>;

import { TableType } from "../types";
/**
 * Loads a lookup table which is then read from with a position determined by
 * the incoming signal phase.
 *
 * @see TypeNode
 * @see TableType
 */
export type TableNode = TypeNode<TableType>;
