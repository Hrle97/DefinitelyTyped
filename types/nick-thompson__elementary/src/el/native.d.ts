import * as node from '../node';

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
 * a {@link node.RandNode} that computes a stream of random numbers
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.RandNode
 */
export const rand: node.NativeNodeFactory<'rand', node.KeyProps>;
