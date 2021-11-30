import { node } from "@nick-thompson/elementary";

/**
 * Generates a stream of random numbers uniformly distributed on the
 * range [0, 1].
 *
 * @see node.RandType
 */
export declare const rand: node.RandType;

/**
 * Emits a pulse train signal much like train, alternating from 0 to 1 at
 * a given rate. Importantly, the metro ("Metronome") node is used for
 * synchronized train signals, and will emit an event through the core
 * Renderer's interface on each rising edge of its output signal.
 *
 * @see node.MetroType
 */
export declare const metro: node.MetroType;
