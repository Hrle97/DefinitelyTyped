import { KeyProps } from "../props";

/**
 * SampleNode props.
 */
export interface SampleProps extends KeyProps {
  /**
   * Path to the file of the sample.
   */
  path?: string;

  /**
   * Channel of the sample that the SampleNode will output.
   *
   * Nodes can output only one channel so you have to select the channel
   * to read from the sample.
   */
  channel?: number;

  /**
   * Mode in which the sample will be output.
   *
   * Valid values are:
   * - trigger: plays the sample once fully on a rising edge of the pulse
   *   train
   * - gate: resumes playing the sample on a rising edge and pauses on a
   *   falling edge of the pulse train until the end of the sample
   * - loop: same as gate but it doesn't stop at the end of the sample,
   *   instead it continues playing it back from the start in a loop
   */
  mode?: "trigger" | "gate" | "loop";

  /**
   * Offset in samples from the start of the sample where playback starts.
   */
  startOffset?: number;

  /**
   * Offset in samples from the end of the sample where playback ends.
   */
  stopOffset?: number;
}

/**
 * TableNode props.
 *
 * Properties 'path' and 'data' are mutually exclusive.
 */
export type TableProps = KeyProps &
  (
    | {
        /**
         * Path to the file of the sample.
         */
        path?: string;

        data?: never;
      }
    | {
        path?: never;

        /**
         * Data that represents the sample.
         */
        data?: Float32Array;
      }
  ) & {
    /**
     * Channel of the sample that the SampleNode will output.
     *
     * Nodes can output only one channel so you have to select the channel
     * to read from the sample.
     */
    channel?: number;
  };
