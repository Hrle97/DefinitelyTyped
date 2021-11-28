import { node, renderer, event } from "@nick-thompson/elementary";

/**
 * Emits a pulse train signal much like the {@link node.TrainNode},
 * alternating from 0 to 1 at a given rate.
 * Importantly, the {@link node.MetroNode} ("Metronome Node") is used for
 * synchronized train signals, and will emit the {@link event.MetroEvent}
 * through a {@link renderer.Renderer}s interface on each rising edge of its
 * output signal.
 *
 * @see node.TypeNode
 * @see node.MetroType
 * @see renderer.Renderer
 * @see event.MetroEvent
 */
export type MetroNode = node.TypeNode<node.MetroType>;

/**
 * Generates a stream of random numbers uniformly distributed on the range
 * [0, 1].
 *
 * @see node.TypeNode
 * @see node.RandType
 */
export type RandNode = node.TypeNode<node.RandType>;
