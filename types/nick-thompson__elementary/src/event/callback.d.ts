import { Type } from "./types";
import { TypeEventMap } from "./event";

/**
 * Callback for the provided event type.
 *
 * @see EventType
 * @see TypeEvent
 */
export type TypeCallback<T extends Type = Type> = (
  props: TypeEventMap[T]
) => void;
