import { node } from "@nick-thompson/elementary";

/**
 * {@link node.SampleNode} {@link node.Props}.
 *
 * @see node.SampleNode
 */
export interface SampleProps extends node.KeyProps {
  /**
   * Path to the file of the sample.
   */
  path?: string;

  /**
   * Channel of the sample that the {@link node.SampleNode} will output.
   *
   * {@link node.Node}s can output only one channel, so you have to select
   * the channel to read from the sample.
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
 * {@link node.TableNode} {@link node.Props}.
 *
 * Properties {@link node.TableProps.path} and {@link node.TableProps.data}
 * are mutually exclusive.
 *
 * @see node.TableNode
 */
export type TableProps = node.KeyProps &
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
     * Channel of the sample that the {@link node.TableNode} will output.
     * Default is 0.
     *
     * {@link node.Node}s can output only one channel, so you have to select
     * the channel to read from the sample.
     */
    channel?: number;
  };
