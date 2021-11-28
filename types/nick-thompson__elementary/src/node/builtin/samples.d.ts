import { nose } from "@nick-thompson/elementary";

/**
 * Loads a sample from disk and triggers its playback on the rising edge of an
 * incoming pulse train.
 *
 * @see node.TypeNode
 * @see node.SampleType
 */
export type SampleNode = node.TypeNode<node.SampleType>;

/**
 * Loads a lookup table which is then read from with a position determined by
 * the incoming signal phase.
 *
 * @see node.TypeNode
 * @see node.TableType
 */
export type TableNode = node.TypeNode<node.TableType>;
