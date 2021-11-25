import { KeyProps } from "../props";

/**
 * Props for el.seq
 *
 * @see KeyProps
 */
export interface SeqProps extends KeyProps {
  /**
   * Sequence of values to generate.
   *
   * @see SeqProps
   */
  seq?: number[];

  /**
   * When true, continues to output the sequence value until the next trigger.
   *
   * @see SeqProps
   */
  hold?: boolean;

  /**
   * When true, sequence repeats, looping from start to end, indefinitely.
   *
   * @see SeqProps
   */
  loop?: boolean;
}
