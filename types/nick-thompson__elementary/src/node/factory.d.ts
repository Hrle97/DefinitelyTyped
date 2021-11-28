import { node } from "@nick-thompson/elementary";

/**
 * Node factory of the provided type.
 *
 * @see node.Type
 * @see node.TypeProps
 * @see node.TypeChildren
 * @see node.TypeNode
 */
export type TypeFactory<T extends node.Type> = ((
  props: node.TypeProps<T>,
  ...children: node.TypeChildren<T>
) => node.TypeNode<T>) &
  ((...children: node.TypeChildren<T>) => node.TypeNode<T>);
