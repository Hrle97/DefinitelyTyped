import { Context } from "./context";
import { NativeNodeType, CompositeNodeType } from "./types";
import { Props, KeyProps, DefaultProps, NativeNodeProps } from "./props";
import { Children, DefaultChildren, NativeNodeChildren } from "./children";
import { Node, NativeNode, CompositeNode } from "./node";

/**
 * Returns a function for the appropriate props and children.
 * Elementary stdlib function types are created this way.
 *
 * @see Node
 * @see NodeType
 * @see NodeProps
 * @see NodeChildren
 */
export type CompositeNodeFunction<
  P extends Props,
  C extends Children
> = (args: { context: Context; props: P & KeyProps; children: C }) => Node;

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
  C extends NativeNodeChildren<T> = NativeNodeChildren<T>
> = ((props: P & KeyProps, ...children: C) => NativeNode<T>) &
  ((...children: C) => NativeNode<T>);

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
  C extends Children = DefaultChildren
> = ((
  props: P & KeyProps,
  ...children: C
) => CompositeNode<CompositeNodeFunction<P, C> & CompositeNodeType>) &
  ((
    ...children: C
  ) => CompositeNode<CompositeNodeFunction<P, C> & CompositeNodeType>);
