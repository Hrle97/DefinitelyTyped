import { event } from "@nick-thompson/elementary";

/**
 * Maps {@link event.Type}s to events.
 */
export type TypeEventMap = Record<event.LoadType, event.LoadEvent> &
  Record<event.MidiType, event.MidiEvent> &
  Record<event.MetroType, event.MetroEvent> &
  Record<event.MeterType, event.MeterEvent>;
