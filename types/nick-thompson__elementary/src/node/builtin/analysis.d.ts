import { TypeNode } from "../node";

import { MeterType } from "../types";
/**
 * A pass-through node which analyses its incoming signal, measuring the
 * maximum and minimum peak value each block. The result is emitted through
 * a Renderer event interface on 'meter' events.
 *
 * @see TypeNode
 * @see MeterType
 */
export type MeterNode = TypeNode<MeterType>;
