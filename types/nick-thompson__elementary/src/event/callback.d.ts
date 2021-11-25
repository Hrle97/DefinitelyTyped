import { EventType } from "./types";
import { EventProps } from "./props";

export type EventCallback<T extends EventType = EventType> = (
  props: EventProps<T>
) => void;
