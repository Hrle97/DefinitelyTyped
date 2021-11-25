import { NodeType, NativeNodeType, CompositeNodeType } from "./types";
import { Context } from "./context";
import { Props, DefaultProps, KeyProps, NativeNodeProps } from "./props";
import { Children, DefaultChildren, NativeNodeChildren } from "./children";

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
  // NOTE: $$typeof is symbol but T | unknown to suppress unused T warning
}

/**
 * Native node specific to the {@link CompositeNodeType}, props, and children.
 *
 * @see Node
 */
export type CompositeNode<T extends CompositeNodeType = CompositeNodeType> =
  T extends Function ? NamedCompositeNode<T["name"]> : never;

/**
 * {@link CompositeNode} type for prettier messages.
 *
 * @see Node
 * @see CompositeNode
 */
export interface NamedCompositeNode<Name extends string = string> extends Node {
  /**
   * Do not use this! It is only here to differentiate {@link Node} and
   * {@link Props} types.
   *
   * @see Node
   * @see Props
   */
  $$typeof: (Name | unknown) & symbol;
  // NOTE: $$typeof is symbol but T | unknown to suppress unused T warning
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
