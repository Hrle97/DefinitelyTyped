export * from "./load";
export * from "./midi";
export * from "./meter";
export * from "./metro";

import { EventType } from "../types";
import { LoadEvent } from "./load";
import { MidiEvent } from "./midi";
import { MeterEvent } from "./meter";
import { MetroEvent } from "./metro";

export type EventProps<T extends EventType = EventType> = {
  load: LoadEvent;
  midi: MidiEvent;
  metro: MetroEvent;
  meter: MeterEvent;
}[T];
