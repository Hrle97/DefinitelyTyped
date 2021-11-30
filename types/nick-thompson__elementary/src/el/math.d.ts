import { node } from "@nick-thompson/elementary";

/**
 * Computes the sine of the operand.
 *
 * @see node.SinType
 */
export declare const sin: node.TypeFactory<node.SinType>;

/**
 * Computes the cosine of the operand.
 *
 * @see node.CosType
 */
export declare const cos: node.TypeFactory<node.CosType>;

/**
 * Computes the tangent of the operand.
 *
 * @see node.TanType
 */
export declare const tan: node.TypeFactory<node.TanType>;

/**
 * Computes the hyperbolic tangent of the operand.
 *
 * @see node.TanhType
 */
export declare const tanh: node.TypeFactory<node.TanhType>;

/**
 * Computes the inverse hyperbolic sine of the operand.
 *
 * @see node.AsinhType
 */
export declare const asinh: node.TypeFactory<node.AsinhType>;

/**
 * Computes the natural logarithm of the operand.
 *
 * @see node.LnType
 */
export declare const ln: node.TypeFactory<node.LnType>;

/**
 * Computes the logarithm in base 10 of the operand.
 *
 * @see node.LogType
 */
export declare const log: node.TypeFactory<node.LogType>;

/**
 * Computes the logarithm in base 2 of the operand.
 *
 * @see node.Log2Type
 */
export declare const log2: node.TypeFactory<node.Log2Type>;

/**
 * Computes the ceiling of the operand.
 *
 * @see node.CeilType
 */
export declare const ceil: node.TypeFactory<node.CeilType>;

/**
 * Computes the floor of the operand.
 *
 * @see node.FloorType
 */
export declare const floor: node.TypeFactory<node.FloorType>;

/**
 * Computes the square root of the operand.
 *
 * @see node.SqrtType
 */
export declare const sqrt: node.TypeFactory<node.SqrtType>;

/**
 * Computes the exponential in base 10 of the operand.
 *
 * @see node.ExpType
 */
export declare const exp: node.TypeFactory<node.ExpType>;

/**
 * Computes the absolute number of the operand.
 *
 * @see node.AbsType
 */
export declare const abs: node.TypeFactory<node.AbsType>;

// Binary

/**
 * Computes whether the first is lesser than the second.
 *
 * @see node.LeType
 */
export declare const le: node.TypeFactory<node.LeType>;

/**
 * Computes whether the first is lesser or equal than the second.
 *
 * @see node.LeqType
 */
export declare const leq: node.TypeFactory<node.LeqType>;

/**
 * Computes whether the first is greater than the second.
 *
 * @see node.GeType
 */
export declare const ge: node.TypeFactory<node.GeType>;

/**
 * Computes whether the first is greater or equal than the second.
 *
 * @see node.GeqType
 */
export declare const geq: node.TypeFactory<node.GeqType>;

/**
 * Computes the power of the first with with the second as the exponent.
 *
 * @see node.PowType
 */
export declare const pow: node.TypeFactory<node.PowType>;

/**
 * Computes the modulo of the first with the second.
 *
 * @see node.ModType
 */
export declare const mod: node.TypeFactory<node.ModType>;

/**
 * Returns the result of the minimal operand.
 *
 * @see node.MinType
 */
export declare const min: node.TypeFactory<node.MinType>;

/**
 * Returns the result of the maximal operand.
 *
 * @see node.MaxType
 */
export declare const max: node.TypeFactory<node.MaxType>;

// Variadic

/**
 * Adds up the operands.
 * Identical to: (((child1 + child2) + child3) + ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @see node.AddType
 */
export declare const add: node.TypeFactory<node.AddType>;

/**
 * Subtracts the rest of the operands from the first.
 * Identical to: (((child1 - child2) - child3) - ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @see node.SubType
 */
export declare const sub: node.TypeFactory<node.SubType>;

/**
 * Multiplies the operands.
 * Identical to: (((child1 * child2) * child3) * ... )
 *
 * Expects at least one operand.
 * If only one is passed it as the identity function.
 *
 * @see node.MulType
 */
export declare const mul: node.TypeFactory<node.MulType>;

/**
 * Divides the first with the rest of the operands.
 * Identical to: (((child1 / child2) / child3) / ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @see node.DivType
 */
export declare const div: node.TypeFactory<node.DivType>;
