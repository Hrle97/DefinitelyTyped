import {
  BuiltinNativeType,
  BuiltinCompositeType,
  BuiltinType,
  NativeType,
  CompositeType,
  Type,
  NativeTypeName,
  CompositeTypeName,
  TypeName,
} from "./types";

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
 * Node for the provided builtin native node type.
 *
 * @see BuiltinNativeType
 */
export type BuiltinNativeTypeNode<T extends BuiltinNativeType> = NamedNode<
  NativeTypeName<T>
>;

/**
 * Node for the provided builtin composite node type.
 *
 * @see BuiltinCompositeType
 */
export type BuiltinCompositeTypeNode<T extends BuiltinCompositeType> =
  NamedNode<CompositeTypeName<T>>;

/**
 * Node for the provided builtin node type.
 *
 * @see BuiltinType
 * @see BuiltinNativeType
 * @see BuiltinNativeTypeNode
 * @see BuiltinCompositeType
 * @see BuiltinCompositeTypeNode
 */
export type BuiltinTypeNode<T extends BuiltinType> = T extends BuiltinNativeType
  ? BuiltinNativeTypeNode<T>
  : T extends BuiltinCompositeType
  ? BuiltinCompositeTypeNode<T>
  : NamedNode<TypeName<T>>;

/**
 * Node of provided native node type.
 *
 * @see NativeType
 * @see TypeName
 * @see NamedNativeNode
 */
export type NativeTypeNode<T extends NativeType> = T extends BuiltinNativeType
  ? BuiltinNativeTypeNode<T>
  : NamedNode<NativeTypeName<T>>;

/**
 * Node of provided composite node type.
 *
 * @see CompositeType
 * @see TypeName
 * @see NamedCompositeNode
 */
export type CompositeTypeNode<T extends CompositeType> =
  T extends BuiltinCompositeType
    ? BuiltinCompositeTypeNode<T>
    : NamedNode<CompositeTypeName<T>>;

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
  : NamedNode<TypeName<T>>;

/**
 * Node type for prettier messages.
 *
 * @see Name
 * @see Node
 */
interface NamedNode<N extends Name> extends Node {
  /**
   * Do not use this! It is only here to differentiate node and props types.
   */
  $$typeof: (N | unknown) & symbol;
  // NOTE: $$typeof is symbol but N | unknown to suppress unused N warning
}
