/**
 * Helper type that forces TypeScript to compute a type for nice signatures
 */
export type Infer<O> = O extends (...params: infer IParams) => infer IReturn
  ? (...params: Infer<IParams>) => Infer<IReturn>
  : O extends { [key in infer IKey]: infer IValue }
  ? { [key in IKey]: Infer<IValue> }
  : O extends [...infer IElements]
  ? [...Infer<IElements>]
  : O;

type a = [number, string] extends [...infer IElements] ? [...IElements] : never;
type b = [number, string];
type c = { [key in keyof b]: key }[keyof b];
