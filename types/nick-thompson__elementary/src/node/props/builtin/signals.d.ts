import { KeyProps } from "../props";

/**
 * EnvNode props.
 */
export interface EnvProps extends KeyProps {}

/**
 * AdsrNode props.
 */
export interface AdsrProps extends KeyProps {}

/**
 * LatchNode props.
 */
export interface LatchProps extends KeyProps {}

/**
 * SeqNode props.
 */
export interface SeqProps extends KeyProps {
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
 * HannNode props.
 */
export interface HannProps extends KeyProps {}
