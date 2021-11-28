import { node } from "@nick-thompson/elementary";

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
 * {@link node.Node} for the provided {@link node.BuiltinNativeType}.
 *
 * @see node.BuiltinNativeType
 * @see node.NamedNode
 * @see node.NativeTypeName
 */
export type BuiltinNativeTypeNode<T extends node.BuiltinNativeType> =
  node.NamedNode<node.NativeTypeName<T>>;

/**
 * {@link node.Node} for the provided {@link node.BuiltinCompositeType}.
 *
 * @see node.BuiltinCompositeType
 * @see node.NamedNode
 * @see node.CompositeTypeName
 */
export type BuiltinCompositeTypeNode<T extends node.BuiltinCompositeType> =
  node.NamedNode<node.CompositeTypeName<T>>;

/**
 * {@link node.Node} for the provided {@link node.BuiltinType}.
 *
 * @see node.BuiltinType
 * @see node.BuiltinNativeType
 * @see node.BuiltinNativeTypeNode
 * @see node.BuiltinCompositeType
 * @see node.BuiltinCompositeTypeNode
 * @see node.NamedNode
 * @see node.TypeName
 */
export type BuiltinTypeNode<T extends node.BuiltinType> =
  T extends node.BuiltinNativeType
    ? node.BuiltinNativeTypeNode<T>
    : T extends node.BuiltinCompositeType
    ? node.BuiltinCompositeTypeNode<T>
    : node.NamedNode<node.TypeName<T>>;

/**
 * {@link node.Node} of provided {@link node.NativeType}.
 *
 * @see node.NativeType
 * @see node.TypeName
 * @see node.NamedNativeNode
 * @see node.NamedNode
 * @see node.NativeTypeName
 */
export type NativeTypeNode<T extends node.NativeType> =
  T extends node.BuiltinNativeType
    ? node.BuiltinNativeTypeNode<T>
    : node.NamedNode<node.NativeTypeName<T>>;

/**
 * {@link node.Node} of provided {@link node.CompositeType}.
 *
 * @see node.CompositeType
 * @see node.TypeName
 * @see node.NamedCompositeNode
 * @see node.NamedNode
 * @see node.NativeTypeName
 */
export type CompositeTypeNode<T extends node.CompositeType> =
  T extends node.BuiltinCompositeType
    ? node.BuiltinCompositeTypeNode<T>
    : node.NamedNode<node.CompositeTypeName<T>>;

/**
 * {@link node.Node} of the provided {@link node.Type}.
 *
 * @see node.Type
 * @see node.NativeType
 * @see node.NativeTypeNode
 * @see node.CompositeType
 * @see node.CompositeTypeNode
 */
export type TypeNode<T extends node.Type> = T extends node.NativeType
  ? node.NativeTypeNode<T>
  : T extends node.CompositeType
  ? node.CompositeTypeNode<T>
  : node.NamedNode<node.TypeName<T>>;

/**
 * {@link node.Node} type for prettier messages.
 *
 * @see node.Name
 * @see node.Node
 */
export interface NamedNode<N extends node.Name> extends node.Node {
  // NOTE: $$typeof is a symbol but N | unknown is there to suppress
  // NOTE: unused N warning
  /**
   * Do not use this! It is only here to differentiate {@link node.Node} and
   * {@link node.Props} types.
   */
  $$typeof: (N | unknown) & symbol;
}
