import { node } from "@nick-thompson/elementary";

/**
 * {@link node.NoiseNode} {@link node.Type}.
 *
 * @see node.NoiseNode
 * @see node.CompositeFunction
 * @see node.NoiseName
 * @see node.NoiseProps
 * @see node.NoiseChildren
 */
export type NoiseType = node.CompositeFunction<
  node.NoiseName,
  node.NoiseProps,
  node.NoiseChildren
>;

/**
 * {@link node.PinkNoiseNode} {@link node.Type}.
 *
 * @see node.PinkNoiseNode
 * @see node.CompositeFunction
 * @see node.PinkNoiseName
 * @see node.PinkNoiseProps
 * @see node.PinkNoiseChildren
 */
export type PinkNoiseType = node.CompositeFunction<
  node.PinkNoiseName,
  node.PinkNoiseProps,
  node.PinkNoiseChildren
>;
