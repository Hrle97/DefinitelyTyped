import { node, renderer, event } from "@nick-thompson/elementary";

/**
 * A pass-through {@link node.Node} which analyses its incoming signal,
 * measuring the maximum and minimum peak value each block.
 * The result is emitted through a {@link renderer.Renderer}s event interface
 * on {@link event.MeterEvent}s.
 *
 * @see node.TypeNode
 * @see node.MeterType
 * @see renderer.Renderer
 * @see event.MeterEvent
 */
export type MeterNode = node.TypeNode<node.MeterType>;
