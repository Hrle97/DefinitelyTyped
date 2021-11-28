import { node } from "@nick-thompson/elementary";

// ============================================================================
// Native

/**
 * Generates a stream of random numbers
 * uniformly distributed on the range [0, 1].
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * a {@link node.RandNode} that computes a stream of random numbers
 *
 * @see node.KeyProps
 * @see node.RandNode
 */
export const rand: node.NativeNodeFactory<"rand", node.KeyProps>;

/**
 * Emits a pulse train signal much like el.train, alternating from 0 to 1 at a
 * given rate. Importantly, the el.metro ("Metronome") node is used for
 * synchronized train signals, and will emit an event through the core
 * Renderer's interface on each rising edge of its output signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * a {@link node.MetroNode} that outputs the pulse train synchronized with the
 * underlying host transport.
 *
 * @see node.KeyProps
 * @see node.MetroNode
 */
export const metro: node.NativeNodeFactory<"metro", node.MetroProps>;
