import { NodeType, NativeNodeType, CompositeNodeType } from './types';
import { Context } from './context';
import { Props, DefaultProps, KeyProps, NodeProps, NativeNodeProps } from './props';
import { Children, DefaultChildren, NodeChildren, NativeNodeChildren } from './children';

// ***************************************************************************
// Nodes

/**
 * The fundamental building block of the Elementary audio graph.
 */
export interface Node {
  /**
   * Do not use this! It is only here to differentiate {@link Node} and
   * {@link Props} types.
   *
   * @see Node
   * @see Props
   */
  $$typeof: symbol;
}

/**
 * Native node specific to the {@link NativeNodeType}.
 *
 * @see Node
 */
export interface NativeNode<T extends NativeNodeType = NativeNodeType>
  extends Node {
  /**
   * Do not use this! It is only here to differentiate {@link Node} and
   * {@link Props} types.
   *
   * @see Node
   * @see Props
   */
  $$typeof: (T | unknown) & symbol;
  // NOTE: is symbol but T | unknown to suppress unused T warning
}

/**
 * Native node specific to the {@link CompositeNodeType}, props, and children.
 *
 * @see Node
 */
export interface CompositeNode<T extends CompositeNodeType = CompositeNodeType>
  extends Node {
  /**
   * Do not use this! It is only here to differentiate {@link Node} and
   * {@link Props} types.
   *
   * @see Node
   * @see Props
   */
  $$typeof: (T | unknown) & symbol;
  // NOTE: is symbol but T | unknown to suppress unused T warning
}

/**
 * The node for the given {@link NodeType}, props and children.
 * If a {@link NativeNodeType} is passed props and children must match
 * the nodes' props and children types.
 *
 * @see Node
 * @see NativeNode
 * @see CompositeNode
 * @see NodeType
 * @see NativeNodeType
 * @see CompositeNodeType
 * @see NodeProps
 * @see NodeConstructor
 */
export type ConcreteNode<T extends NodeType> = T extends NativeNodeType
  ? NativeNode<T>
  : T extends CompositeNodeType
  ? CompositeNode<T>
  : never;

// ***************************************************************************
// Native nodes

// Analysis

export type MeterNode = NativeNode<'meter'>;

// Native

export type RandNode = NativeNode<'rand'>;
export type MetroNode = NativeNode<'metro'>;

// Basics

export type InNode = NativeNode<'in'>;
export type SrNode = NativeNode<'sr'>;
export type ConstNode = NativeNode<'const'>;
export type CounterNode = NativeNode<'counter'>;

// Delays

export type ZNode = NativeNode<'z'>;
export type TapOutNode = NativeNode<'tapOut'>;
export type TapInNode = NativeNode<'tapIn'>;
export type DelayNode = NativeNode<'delay'>;

// Filters

export type PoleNode = NativeNode<'pole'>;
export type BiquadNode = NativeNode<'biquad'>;
export type ConvolveNode = NativeNode<'convolve'>;

// Math

export type SinNode = NativeNode<'sin'>;
export type CosNode = NativeNode<'cos'>;
export type TanNode = NativeNode<'tan'>;
export type TanhNode = NativeNode<'tanh'>;
export type AsinhNode = NativeNode<'asinh'>;
export type LnNode = NativeNode<'ln'>;
export type LogNode = NativeNode<'log'>;
export type Log2Node = NativeNode<'log2'>;
export type CeilNode = NativeNode<'ceil'>;
export type FloorNode = NativeNode<'floor'>;
export type SqrtNode = NativeNode<'sqrt'>;
export type ExpNode = NativeNode<'exp'>;

export type AbsNode = NativeNode<'abs'>;
export type LeNode = NativeNode<'le'>;
export type LeqNode = NativeNode<'leq'>;
export type GeNode = NativeNode<'ge'>;
export type GeqNode = NativeNode<'geq'>;
export type PowNode = NativeNode<'pow'>;
export type ModNode = NativeNode<'mod'>;
export type MinNode = NativeNode<'min'>;
export type MaxNode = NativeNode<'max'>;

export type AddNode = NativeNode<'add'>;
export type SubNode = NativeNode<'sub'>;
export type MulNode = NativeNode<'mul'>;
export type DivNode = NativeNode<'div'>;

// Oscillators

export type PhasorNode = NativeNode<'phasor'>;

// Samples

export type SampleNode = NativeNode<'sample'>;
export type TableNode = NativeNode<'table'>;

// Signals

export type LatchNode = NativeNode<'latch'>;
export type SeqNode = NativeNode<'seq'>;

// ***************************************************************************
// Creation

/**
 * Helper type that forces TypeScript to compute the type of function, so
 * types that result in a function type look like an actual function in
 * signatures.
 */
export type InferFunction<T extends (...params: any) => any> = (
  ...params: Parameters<T>
) => ReturnType<T>;

/**
 * Returns a function for the appropriate type, props and children.
 * Elementary stdlib function types are created this way.
 *
 * @see Node
 * @see NodeType
 * @see NodeProps
 * @see NodeChildren
 */
export type CompositeNodeFunction<
  P extends Props,
  C extends Children,
> = InferFunction<
  (args: { context: Context; props?: P & KeyProps; children?: C }) => Node
>;

/**
 * Returns a native factory for the appropriate type, props and children.
 * Elementary el function types are created this way.
 *
 * @see Node
 * @see NodeType
 * @see NodeProps
 * @see NodeChildren
 */
export type NativeNodeFactory<
  T extends NativeNodeType = NativeNodeType,
  P extends NativeNodeProps<T> = NativeNodeProps<T>,
  C extends NativeNodeChildren<T> = NativeNodeChildren<T>,
> = InferFunction<(props: P, ...children: C) => NativeNode<T>> &
  InferFunction<(...children: C) => NativeNode<T>>;
// NOTE: InferType twice because of TypeScript function intersections.

/**
 * Returns a composite factory for the appropriate type, props and children.
 * Elementary el function types are created this way.
 *
 * @see Node
 * @see NodeType
 * @see NodeProps
 * @see NodeChildren
 */
export type CompositeNodeFactory<
  P extends Props = DefaultProps,
  C extends Children = DefaultChildren,
> = InferFunction<(props: P & KeyProps, ...children: C) =>
CompositeNode<CompositeNodeFunction<P, C>> &
  InferFunction<(...children: C) =>
CompositeNode<CompositeNodeFunction<P, C>>>;
// NOTE: InferType twice because of TypeScript function intersections.

// ***************************************************************************
// Sugar

export type Sugar = (<T extends NodeType>(
  type: T,
  props: NodeProps<T>,
  ...children: NodeChildren<T>
) => ConcreteNode<T>) &
  (<T extends NodeType>(
    type: T,
    ...children: NodeChildren<T>
  ) => ConcreteNode<T>);

export type CandyWrap = <O extends { [name: string]: NodeType }>(
  object: O,
) => { [name in keyof O]: NodeFactory<O[name]> };
