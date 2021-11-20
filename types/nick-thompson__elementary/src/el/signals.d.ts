import * as node from '../node';

// ============================================================================
// Native

/**
 * A sample and hold node.
 * Samples a new value from the input on a rising edge of the control signal,
 * then holds and emits that value until the next rising edge of
 * the control signal.
 *
 * Expected children:
 * 1. The control signal
 * 2. The input signal to sample.
 *
 * @param [props]
 * props object with optional key
 *
 * @param control
 * the control signal
 *
 * @param input
 * the input signal
 *
 * @returns
 * a {@link node.LatchNode} that computes the controlled input signal output
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.LatchNode
 */
export const latch: node.NativeNodeFactory<
  'latch',
  node.KeyProps,
  [control: node.Child, input: node.Child]
>;

/**
 * A simple signal sequencer. Receives a sequence of values from the seq
 * property and steps through them on each rising edge of an incoming
 * pulse train.
 *
 * Expects at least one child,
 * the pulse train to trigger the next step of the sequence.
 * An optional second child may be provided:
 * another control signal (pulse train) whose rising edge will
 * reset the sequence position back to the beginning.
 *
 * @param [props]
 * {@link node.SeqProps} object
 *
 * @param next
 * the next step
 *
 * @param last
 * the last step
 *
 * @returns
 * a {@link node.SeqNode} that computes the output of the sequencer
 *
 * @see node.SeqProps
 * @see node.Child
 * @see node.SeqNode
 */
export const seq: node.NativeNodeFactory<
  'seq',
  node.SeqProps,
  [next: node.Child] | [next: node.Child, last: node.Child]
>;

// ============================================================================
// Composite

/**
 * An exponential ADSR envelope generator, triggered by the gate signal g.
 * When the gate is high (1), this generates the ADS phase. When the gate
 * is low, the R phase.
 *
 * Expected children: 1. Attack time in seconds (number or signal) 2. Decay
 * time in seconds (number or signal) 3. Sustain amplitude between 0 and
 * 1 (number or signal) 4. Release time in seconds (number or signal) 5.
 * Gate signal; a pulse train alternating between 0 and 1.
 *
 * @param [props]
 * props object with optional key
 *
 * @param attack
 * the attack time in seconds
 *
 * @param delay
 * the decay time in seconds
 *
 * @param sustain
 * the sustain amplitude between 0 and 1
 *
 * @param release
 * the release time in seconds
 *
 * @param gate
 * the gate signal limited to values of 0 and 1
 *
 * @returns
 * a {@link node.Node} that computes the output of the envelope
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const adsr: node.CompositeNodeFactory<
  node.KeyProps,
  [
    attack: node.Child,
    delay: node.Child,
    sustain: node.Child,
    release: node.Child,
    gate: node.Child,
  ]
>;

/**
 * A simple Hann window generator. The window is generated according to an
 * incoming phasor signal, where a phase value of 0 corresponds to the
 * left hand side of the window, and a phase value of 1 corresponds to
 * the right hand side of the window.
 *
 * Expects exactly one child, the incoming phase.
 *
 * @param [props]
 * props object with optional key
 *
 * @param phase
 * the incoming phase
 *
 * @returns
 * a {@link node.Node} that computes the output of the generator
 *
 * @see node.KeyProps
 * @see node.Child
 * @see node.Node
 */
export const hann: node.CompositeNodeFactory<
  node.KeyProps,
  [phase: node.Child]
>;
