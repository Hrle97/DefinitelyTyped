import { node } from "@nick-thompson/elementary";

/**
 * {@link node.EnvNode} {@link node.Type}.
 *
 * @see node.EnvNode
 * @see node.CompositeFunction
 * @see node.EnvName
 * @see node.EnvProps
 * @see node.EnvChildren
 */
export type EnvType = node.CompositeFunction<
  node.EnvName,
  node.EnvProps,
  node.EnvChildren
>;

/**
 * {@link node.AdsrNode} {@link node.Type}.
 *
 * @see node.AdsrNode
 * @see node.CompositeFunction
 * @see node.AdsrName
 * @see node.AdsrProps
 * @see node.AdsrChildren
 */
export type AdsrType = node.CompositeFunction<
  node.AdsrName,
  node.AdsrProps,
  node.AdsrChildren
>;

/**
 * {@link node.LatchNode} {@link node.Type}.
 *
 * @see node.LatchNode
 * @see node.LatchName
 */
export type LatchType = node.LatchName;

/**
 * {@link node.SeqNode} {@link node.Type}.
 *
 * @see node.SeqNode
 * @see node.SeqName
 */
export type SeqType = node.SeqName;

/**
 * {@link node.HannNode} {@link node.Type}.
 *
 * @see node.HannNode
 * @see node.CompositeFunction
 * @see node.HannName
 * @see node.HannProps
 * @see node.HannChildren
 */
export type HannType = node.CompositeFunction<
  node.HannName,
  node.HannProps,
  node.HannChildren
>;
