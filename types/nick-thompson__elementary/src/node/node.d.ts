import { NodeType, NativeNodeType, CompositeNodeType } from "./types";
import { NodeName } from "./names";

/**
 * Native node specific to the {@link NativeNodeType}.
 *
 * If a {@link NativeNodeType} is not provided {@link Node} is returned.
 *
 * @see Node
 * @see NativeNodeType
 */
export type NativeNode<T extends NativeNodeType | never = never> =
  T extends NativeNodeType ? NamedNativeNode<T> : Node;

/**
 * Composite node specific to the {@link CompositeNodeType}.
 *
 * If a {@link CompositeNodeType} is not provided {@link Node} is returned.
 *
 * @see Node
 * @see CompositeNodeType
 */
export type CompositeNode<T extends CompositeNodeType | never = never> =
  T extends Function ? NamedCompositeNode<T["name"]> : Node;

/**
 * The node for the given {@link NodeType}.
 *
 * If a {@link NodeType} is not provided a base node type is returned.
 *
 * @see Node
 * @see NativeNode
 * @see CompositeNode
 * @see NodeType
 * @see NativeNodeType
 * @see CompositeNodeType
 */
export type Node<T extends NodeType | never = never> = T extends never
  ? BaseNode
  : T extends NativeNodeType
  ? NativeNode<T>
  : T extends CompositeNodeType
  ? CompositeNode<T>
  : never;

/**
 * The fundamental building block of the Elementary audio graph.
 */
interface BaseNode {
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
 * {@link NativeNode} for prettier messages.
 *
 * @see BaseNode
 */
interface NamedNativeNode<Name extends NodeName> extends BaseNode {
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
 * {@link CompositeNode} type for prettier messages.
 *
 * @see BaseNode
 * @see CompositeNode
 */
interface NamedCompositeNode<Name extends NodeName> extends BaseNode {
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
