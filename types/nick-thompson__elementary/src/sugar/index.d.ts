import {
  ConcreteNode,
  NativeNodeType,
  CompositeNodeType,
  NodeType,
  NodeProps,
  NodeChildren,
  NativeNodeFactory,
  CompositeNodeFactory,
  CompositeNodeProps,
  CompositeNodeChildren,
} from "../node";

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
  object: O
) => {
  [name in keyof O]: O[name] extends NativeNodeType
    ? NativeNodeFactory<O[name]>
    : O[name] extends CompositeNodeType
    ? CompositeNodeFactory<
        CompositeNodeProps<O[name]>,
        CompositeNodeChildren<O[name]>
      >
    : never;
};
