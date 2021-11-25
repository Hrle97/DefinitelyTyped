/**
 * Event emitted by meter nodes that measure volume on every block.
 */
export interface MeterEvent {
  /**
   * Name of the meter node that emitted the event.
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
