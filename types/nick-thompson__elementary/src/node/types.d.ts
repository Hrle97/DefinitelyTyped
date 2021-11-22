import { Node } from './node';
import { Context } from './context';
import { Props } from './props';
import { ChildrenArraySizeRange, SizedChildrenArray } from './children';

/**
 * Native types of {@link Node}.
 *
 * @see Node
 */
export type NativeNodeType =
  /* Analysis */
  | 'meter'
  /* Native */
  | 'metro'
  | 'rand'
  /* Basics */
  | 'in'
  | 'sr'
  | 'const'
  | 'counter'
  /* Delays */
  | 'z'
  | 'tapIn'
  | 'tapOut'
  | 'delay'
  /* Filters */
  | 'pole'
  | 'biquad'
  | 'convolve'
  /* Math */
  | 'sin'
  | 'cos'
  | 'tan'
  | 'tanh'
  | 'asinh'
  | 'ln'
  | 'log'
  | 'log2'
  | 'ceil'
  | 'floor'
  | 'sqrt'
  | 'exp'
  | 'abs'
  | 'le'
  | 'leq'
  | 'ge'
  | 'geq'
  | 'pow'
  | 'add'
  | 'sub'
  | 'mul'
  | 'div'
  | 'mod'
  | 'min'
  | 'max'
  /* Noise */
  /* Oscillators */
  | 'phasor'
  /* Samples */
  | 'sample'
  | 'table'
  /* Signals */
  | 'latch'
  | 'seq';

/**
 * Composites types of {@link Node}s.
 *
 * @see Node
 * @see Props
 * @see ChildrenArray
 */
export type CompositeNodeType = {
  [childrenArraySize in ChildrenArraySizeRange]: (args: {
    context: Context;
    props: Props;
    children: SizedChildrenArray<childrenArraySize>;
  }) => Node;
}[ChildrenArraySizeRange];

/**
 * Types of {@link Node}.
 *
 * @see Node
 * @see NativeNodeType
 * @see CompositeNodeType
 */
export type NodeType = NativeNodeType | CompositeNodeType;
