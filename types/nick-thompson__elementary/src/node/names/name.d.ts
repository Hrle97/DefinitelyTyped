import { node } from "@nick-thompson/elementary";

/**
 * Native {@link node.Node} names.
 */
export type NativeName = string;

/**
 * Composite {@link node.Node} names.
 */
export type CompositeName = string;

/**
 * {@link node.Node} names.
 *
 * @see node.NativeName
 * @see node.CompositeName
 */
export type Name = node.NativeName | node.CompositeName;
