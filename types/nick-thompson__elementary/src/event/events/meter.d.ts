import { node } from "@nick-thompson/elementary";

/**
 * Event emitted by {@link node.MeterNode}s that measure volume on every block.
 *
 * @see node.MeterNode
 */
export interface MeterEvent {
  /**
   * Name of the {@link node.MeterNode} that emitted the event.
   */
  source?: string;

  /**
   * Minimal volume in the interval between emitted meter events.
   */
  min: number;

  /**
   * Maximal volume in the interval between emitted meter events.
   */
  max: number;
}
