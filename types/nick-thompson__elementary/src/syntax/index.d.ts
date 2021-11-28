import { node } from "@nick-thompson/elementary";

/**
 * @todo
 */
export type Sugar = (<T extends node.Type>(
  type: T,
  props: node.TypeProps<T>,
  ...children: node.TypeChildren<T>
) => node.TypeNode<T>) &
  (<T extends node.Type>(
    type: T,
    ...children: node.TypeChildren<T>
  ) => node.TypeNode<T>);

/**
 * @todo
 */
export type CandyWrap = <O extends { [name: string]: node.Type }>(
  object: O
) => {
  [name in keyof O]: node.TypeFactory<O[name]>;
};
