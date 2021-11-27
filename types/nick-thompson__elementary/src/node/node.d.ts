import { Type, NativeType, CompositeType, TypeName } from "./types";
import { Name } from "./names";

/**
 * The fundamental building block of the Elementary audio graph.
 */
export interface Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: symbol;
}

/**
 * Node of provided native node type.
 *
 * @see NativeType
 * @see TypeName
 * @see NamedNativeNode
 */
export type NativeTypeNode<T extends NativeType> = NamedNativeNode<TypeName<T>>;

/**
 * Node of provided composite node type.
 *
 * @see CompositeType
 * @see TypeName
 * @see NamedCompositeNode
 */
export type CompositeTypeNode<T extends CompositeType> = NamedCompositeNode<
  TypeName<T>
>;

/**
 * Node of the provided node type.
 *
 * @see Type
 * @see NativeType
 * @see NativeTypeNode
 * @see CompositeType
 * @see CompositeTypeNode
 */
export type TypeNode<T extends Type> = T extends NativeType
  ? NativeTypeNode<T>
  : T extends CompositeType
  ? CompositeTypeNode<T>
  : never;

/**
 * Native node for prettier messages.
 *
 * @see Name
 * @see Node
 */
interface NamedNativeNode<name extends Name> extends Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: (name | unknown) & symbol;
  // NOTE: $$typeof is symbol but T | unknown to suppress unused T warning
}

/**
 * Composite node type for prettier messages.
 *
 * @see Name
 * @see Node
 */
interface NamedCompositeNode<name extends Name> extends Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: (name | unknown) & symbol;
  // NOTE: $$typeof is symbol but T | unknown to suppress unused T warning
}
