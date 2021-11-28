import { node } from "@nick-thompson/elementary";

/**
 * {@link node.EnvNode} {@link node.Props}.
 */
export interface EnvProps extends node.KeyProps {}

/**
 * {@link node.AdsrNode} {@link node.Props}.
 */
export interface AdsrProps extends node.KeyProps {}

/**
 * {@link node.LatchNode} {@link node.Props}.
 */
export interface LatchProps extends node.KeyProps {}

/**
 * {@link node.SeqNode} {@link node.Props}.
 */
export interface SeqProps extends node.KeyProps {
  /**
   * Sequence of values to generate.
   */
  seq?: number[];

  /**
   * When true, continues to output the sequence value until the next trigger.
   */
  hold?: boolean;

  /**
   * When true, sequence repeats, looping from start to end, indefinitely.
   */
  loop?: boolean;
}

/**
 * {@link node.HannNode} {@link node.Props}.
 */
export interface HannProps extends node.KeyProps {}
