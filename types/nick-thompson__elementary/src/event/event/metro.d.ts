/**
 * Event emitted by metro nodes that fire off on each interval they were
 * created with.
 */
export interface MetroEvent {
  /**
   * Name of the metro node that emitted the event.
   */
  source?: string;
}
