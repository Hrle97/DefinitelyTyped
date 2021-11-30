import { node } from "@nick-thompson/elementary";

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
export declare const sin: node.SinType;

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
export declare const cos: node.CosType;

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
export declare const tan: node.TanType;

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
export declare const tanh: node.TanhType;

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
export declare const asinh: node.AsinhType;

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
export declare const ln: node.LnType;

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
export declare const log: node.LogType;

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
export declare const log2: node.Log2Type;

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
export declare const ceil: node.CeilType;

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
export declare const floor: node.FloorType;

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
export declare const sqrt: node.SqrtType;

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
export declare const exp: node.ExpType;

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
export declare const abs: node.AbsType;

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
export declare const le: node.LeType;

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
export declare const leq: node.LeqType;

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
export declare const ge: node.GeType;

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
export declare const geq: node.GeqType;

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
export declare const pow: node.PowType;

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
export declare const mod: node.ModType;

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
export declare const min: node.MinType;

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
export declare const max: node.MaxType;

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
export declare const add: node.AddType;

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
export declare const sub: node.SubType;

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
export declare const mul: node.MulType;

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
export declare const div: node.DivType;
