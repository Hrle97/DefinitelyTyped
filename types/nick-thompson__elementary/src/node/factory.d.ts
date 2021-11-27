import { Type } from "./types";
import { TypeProps } from "./props";
import { TypeChildren } from "./children";
import { TypeNode } from "./node";

/**
 * Node factory of the provided type.
 *
 * @see Type
 * @see TypeProps
 * @see TypeChildren
 * @see TypeNode
 */
export type TypeFactory<T extends Type> = ((
  props: TypeProps<T>,
  ...children: TypeChildren<T>
) => TypeNode<T>) &
  ((...children: TypeChildren<T>) => TypeNode<T>);
