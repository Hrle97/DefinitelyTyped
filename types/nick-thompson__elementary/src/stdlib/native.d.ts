import { core } from '../core';

// ============================================================================
// Native

/**
 * Generates a stream of random numbers
 * uniformly distributed on the range [0, 1].
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * a {@link core.RandNode} that computes a stream of random numbers
 *
 * @see core.KeyProps
 * @see core.Child
 * @see core.RandNode
 */
export const rand: core.NodeFactory<'rand', core.KeyProps, []>;
