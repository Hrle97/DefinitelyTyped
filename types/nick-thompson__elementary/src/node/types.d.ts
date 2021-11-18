import { Node } from './node';
import { Props } from './props';
import { ChildrenArraySizeRange, SizedChildrenArray } from './children';

// for docs
import { ChildrenArray } from './children';

/**
 * Internal types of {@link Node}.
 *
 * @see Node
 */
export type NativeNodeType =
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
    | 'root'
    | 'in'
    | 'sr'
    | 'const'
    | 'phasor'
    | 'rand'
    | 'counter'
    | 'latch'
    | 'sample'
    | 'table'
    | 'seq'
    | 'delay'
    | 'z'
    | 'pole'
    | 'biquad'
    | 'convolve';

/**
 * Composites of native {@link Node}s.
 *
 * @see Node
 * @see Props
 * @see ChildrenArray
 */
export type CompositeNodeType = {
    [key in ChildrenArraySizeRange]:
        | ((...children: SizedChildrenArray<key>) => Node)
        | ((props: Props, ...children: SizedChildrenArray<key>) => Node);
}[ChildrenArraySizeRange];

/**
 * Types of {@link Node}.
 *
 * @see Node
 * @see NativeNodeType
 * @see CompositeNodeType
 */
export type NodeType = NativeNodeType | CompositeNodeType;
