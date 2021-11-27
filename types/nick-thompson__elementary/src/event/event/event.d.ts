import * as type from "../types";

import { LoadEvent } from "./load";
import { MeterEvent } from "./meter";
import { MetroEvent } from "./metro";
import { MidiEvent } from "./midi";

/**
 * Maps evnet types to events.
 */
export type TypeEventMap = Record<type.LoadType, LoadEvent> &
  Record<type.MidiType, MidiEvent> &
  Record<type.MetroType, MetroEvent> &
  Record<type.MeterType, MeterEvent>;
