import { KeyProps } from "../props";

/**
 * Props for el.sample.
 *
 * @see KeyProps
 */
export interface SampleProps extends KeyProps {
  /**
   * Path to the file of the sample.
   *
   * @see SampleProps
   */
  path?: string;

  /**
   * Nodes can output only one channel so you have to select the channel
   * to read from the sample.
   *
   * @see SampleProps
   */
  channel?: number;

  /**
   * - trigger: plays the sample once fully on a rising edge of the pulse
   *   train
   * - gate: resumes playing the sample on a rising edge and pauses on a
   *   falling edge of the pulse train until the end of the sample
   * - loop: same as gate but it doesn't stop at the end of the sample,
   *   instead it continues playing it back from the start in a loop
   *
   * @see SampleProps
   */
  mode?: "trigger" | "gate" | "loop";

  /**
   * Offset in samples from the start of the sample where playback starts.
   *
   * @see SampleProps
   */
  startOffset?: number;

  /**
   * Offset in samples from the end of the sample where playback ends.
   *
   * @see SampleProps
   */
  stopOffset?: number;
}

/**
 * Props for el.table.
 * Properties 'path' and 'data' are mutually exclusive.
 *
 * @see KeyProps
 */
export type TableProps = KeyProps &
  (
    | {
        path?: string;
        data?: never;
      }
    | {
        path?: never;
        data?: Float32Array;
      }
  ) & {
    channel?: number;
  };
