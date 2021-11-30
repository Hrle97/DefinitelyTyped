import { node } from "@nick-thompson/elementary";

/**
 * A pass-through node which analyses its incoming signal, measuring the
 * maximum and minimum peak value each block. The result is emitted through
 * the core Renderer event interface with an event object matching the
 * following structure.
 *
 * @see node.MeterType
 */
export const meter: node.TypeFactory<node.MeterType>;
