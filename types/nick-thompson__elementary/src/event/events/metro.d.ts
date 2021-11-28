import { node } from "@nick-thompson/elementary";

/**
 * Event emitted by {@link node.MetroNode}s that fire off on each interval
 * they were created with.
 *
 * @see node.MetroNode
 */
export interface MetroEvent {
  /**
   * Name of the {@link node.MetroNode} that emitted the event.
   */
  source?: string;
}
