import { node } from "@nick-thompson/elementary";

// ============================================================================
// Native

// Unary

// in is in in.d.ts because it collides with the in function from basics

/**
 * Computes the sine of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the sine of
 *
 * @returns
 * a {@link node.SinNode} that computes the sine of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.SinNode
 */
export const sin: node.NativeNodeFactory<
  "sin",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the cosine of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the cosine of
 *
 * @returns
 * a {@link node.CosNode} that computes the cosine of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.CosNode
 */
export const cos: node.NativeNodeFactory<
  "cos",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the tangent of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the tangent of
 *
 * @returns
 * a {@link node.TanNode} that computes the tangent of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.TanNode
 */
export const tan: node.NativeNodeFactory<
  "tan",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the hyperbolic tangent of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the hyperbolic tangent of
 *
 * @returns
 * a {@link node.TanhNode} that computes the hyperbolic tangent of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.TanhNode
 */
export const tanh: node.NativeNodeFactory<
  "tanh",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the inverse hyperbolic sine of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the inverse hyperbolic sine of
 *
 * @returns
 * a {@link node.AsinhNode} that computes the inverse hyperbolic sine
 * of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.AsinhNode
 */
export const asinh: node.NativeNodeFactory<
  "asinh",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the natural logarithm of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the natural logarithm of
 *
 * @returns
 * a {@link node.LnNode} that computes the natural logarithm of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.LnNode
 */
export const ln: node.NativeNodeFactory<
  "ln",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the logarithm in base 10 of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the logarithm in base 10 of
 *
 * @returns
 * a {@link node.LogNode} that computes the logarithm in base 10 of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.LogNode
 */
export const log: node.NativeNodeFactory<
  "log",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the logarithm in base 2 of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the logarithm in base 2 of
 *
 * @returns
 * a {@link node.Log2Node} that computes the logarithm in base 2 of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Log2Node
 */
export const log2: node.NativeNodeFactory<
  "log2",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the ceiling of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the ceiling of
 *
 * @returns
 * a {@link node.CeilNode} that computes the ceiling of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.CeilNode
 */
export const ceil: node.NativeNodeFactory<
  "ceil",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the floor of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the floor of
 *
 * @returns
 * a {@link node.FloorNode} that computes the floor of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.FloorNode
 */
export const floor: node.NativeNodeFactory<
  "floor",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the square root of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the square root of
 *
 * @returns
 * a {@link node.SqrtNode} that computes the square root of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.SqrtNode
 */
export const sqrt: node.NativeNodeFactory<
  "sqrt",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the exponential in base 10 of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the exponential in base 10 of
 *
 * @returns
 * a {@link node.ExpNode} that computes the exponential in base 10 of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.ExpNode
 */
export const exp: node.NativeNodeFactory<
  "exp",
  node.KeyProps,
  [operand: node.Child]
>;

/**
 * Computes the absolute number of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the absolute number of
 *
 * @returns
 * a {@link node.AbsNode} that computes the absolute number of the operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.AbsNode
 */
export const abs: node.NativeNodeFactory<
  "abs",
  node.KeyProps,
  [operand: node.Child]
>;

// Binary

/**
 * Computes whether the first is lesser than the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link node.LeNode} that computes whether the first is lesser
 * than the second operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.LeNode
 */
export const le: node.NativeNodeFactory<
  "le",
  node.KeyProps,
  [first: node.Child, second: node.Child]
>;

/**
 * Computes whether the first is lesser or equal than the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link node.LeqNode} that computes whether the first is lesser or equal
 * than the second operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.LeqNode
 */
export const leq: node.NativeNodeFactory<
  "leq",
  node.KeyProps,
  [first: node.Child, second: node.Child]
>;

/**
 * Computes whether the first is greater than the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link node.GeNode} that computes whether the first is greater
 * than the second operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.GeNode
 */
export const ge: node.NativeNodeFactory<
  "ge",
  node.KeyProps,
  [first: node.Child, second: node.Child]
>;

/**
 * Computes whether the first is greater or equal than the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link node.GeqNode} that computes whether the first is greater or equal
 * than the second operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.GeqNode
 */
export const geq: node.NativeNodeFactory<
  "geq",
  node.KeyProps,
  [first: node.Child, second: node.Child]
>;

/**
 * Computes the power of the first with with the second as the exponent.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link node.PowNode} that computes the power of the first with
 * the second as the exponent
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.PowNode
 */
export const pow: node.NativeNodeFactory<
  "pow",
  node.KeyProps,
  [first: node.Child, second: node.Child]
>;

/**
 * Computes the modulo of the first with the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link node.ModNode} that computes the module of the first with the second
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.ModNode
 */
export const mod: node.NativeNodeFactory<
  "mod",
  node.KeyProps,
  [first: node.Child, second: node.Child]
>;

/**
 * Returns the result of the minimal operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link node.MinNode} that returns the result of the minimal operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.MinNode
 */
export const min: node.NativeNodeFactory<
  "min",
  node.KeyProps,
  [first: node.Child, second: node.Child]
>;

/**
 * Returns the result of the maximal operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link node.MaxNode} that returns the result of the maximal operand
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.MaxNode
 */
export const max: node.NativeNodeFactory<
  "max",
  node.KeyProps,
  [first: node.Child, second: node.Child]
>;

// Variadic

/**
 * Adds up the operands.
 * Identical to: (((child1 + child2) + child3) + ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operands
 * the operands to add up
 *
 * @returns
 * a {@link node.AddNode} that sums up the operands
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.AddNode
 */
export const add: node.NativeNodeFactory<
  "add",
  node.KeyProps,
  [...operands: node.VariadicChildrenArray]
>;

/**
 * Subtracts the rest of the operands from the first.
 * Identical to: (((child1 - child2) - child3) - ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param operands
 * the operands to subtract
 *
 * @returns
 * a {@link node.SubNode} that subtracts the rest of the operands from the first
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.SubNode
 */
export const sub: node.NativeNodeFactory<
  "sub",
  node.KeyProps,
  [...operands: node.VariadicChildrenArray]
>;

/**
 * Multiplies the operands.
 * Identical to: (((child1 * child2) * child3) * ... )
 *
 * Expects at least one operand.
 * If only one is passed it as the identity function.
 *
 * @param [props]
 * props object with optional key
 *
 * @param rest
 * the operands to multiply
 *
 * @returns
 * a {@link node.MulNode} that multiplies the operands
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.MulNode
 */
export const mul: node.NativeNodeFactory<
  "mul",
  node.KeyProps,
  [...operands: node.VariadicChildrenArray]
>;

/**
 * Divides the first with the rest of the operands.
 * Identical to: (((child1 / child2) / child3) / ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operands
 * the operands to divide
 *
 * @returns
 * a {@link node.DivNode} that divides the first with the rest of the operands
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.DivNode
 */
export const div: node.NativeNodeFactory<
  "div",
  node.KeyProps,
  [...operands: node.VariadicChildrenArray]
>;
