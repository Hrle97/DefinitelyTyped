import { node } from "@nick-thompson/elementary";

/**
 * A pass-through node which analyses its incoming signal, measuring the
 * maximum and minimum peak value each block. The result is emitted through
 * the core Renderer event interface with an event object matching the
 * following structure.
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * the pass-through {@link node.MeterNode}
 *
 * @see node.MeterProps
 * @see node.MeterNode
 */
export const meter: node.MeterType;
