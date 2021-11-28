import { event } from "@nick-thompson/elementary";

/**
 * Callback for the provided {@link event.Type}.
 *
 * @see event.EventType
 * @see event.TypeEvent
 */
export type TypeCallback<T extends event.Type> = (
  props: event.TypeEventMap[T]
) => void;
