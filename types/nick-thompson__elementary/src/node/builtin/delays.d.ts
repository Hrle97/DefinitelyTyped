import { TypeNode } from "../node";

import { ZType } from "../types";
/**
 * A very simple single-sample delay node (z^-1).
 *
 * @see TypeNode
 * @see ZType
 */
export type ZNode = TypeNode<ZType>;

import { TapOutType } from "../types";
/**
 * The TapOutNode pairs with the TapInNode to provide special case behavior
 * for implementing feedback around arbitrary parts of your signal graph. A
 * TapOytNode is identified by name, and its signal can be fed back into any
 * part of your signal graph using a TapInNode by the same name.
 *
 * @see TypeNode
 * @see TapOutType
 * @see TapInNode
 */
export type TapOutNode = TypeNode<TapOutType>;

import { TapInType } from "../types";
/**
 * Given a TapOytNode with a known name in a signal graph, we can use
 * TapInNode to wire the signal into any other region of our graph, allowing
 * feedback around arbitrary subgraphs.
 *
 * @see TypeNode
 * @see TapInType
 * @see TapOutNode
 */
export type TapInNode = TypeNode<TapInType>;

import { DelayType } from "../types";
/**
 * A variable-length delay line with a feedback component.
 *
 * @see TypeNode
 * @see DelayType
 */
export type DelayNode = TypeNode<DelayType>;
