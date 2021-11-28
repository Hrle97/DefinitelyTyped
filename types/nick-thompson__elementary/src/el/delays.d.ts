import { node } from "@nick-thompson/elementary";

// ============================================================================
// Native

/**
 * A very simple single-sample delay {@link node.Node} (z^-1).
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * the signal {@link node.ZNode} to delay
 *
 * @see node.KeyProps
 * @see node.ZNode
 */
export const z: node.NativeNodeFactory<"z">;

/**
 * The {@link node.TapOutNode} pairs with the tapIn node to provide special
 * case behavior for implementing feedback around arbitrary parts of your
 * signal graph. A {@link node.TapOutNode} is identified by name, and its
 * signal can be fed back into any part of your signal graph using a tapIn
 * node by the same name.
 *
 * It's important to note that in the digital domain, feedback requires at
 * least a single sample delay. For efficiency, the {@link node.TapOutNode}
 * implements an implicit delay before the signal is propagated onwards and to
 * any corresponding {@link node.TapInNode}s.
 *
 * Note: Feedback loops can very easily build unstable scenarios that grow in
 * volume extremely quickly. Elementary cannot provide implicit constraints to
 * prevent this behavior. Please use care when implementing feedback to insert
 * appropriate gains.
 *
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * signal {@link node.Node} to tap out
 *
 * @returns
 * the delayed pass through {@link node.TapOutNode}
 *
 * @see node.TapOutProps
 * @see node.Child
 * @see node.TapOutNode
 */
export const tapOut: node.NativeNodeFactory<
  "tapOut",
  node.TapOutProps,
  [node.Child]
>;

/**
 * See the description for the {@link node.TapOoutNode} above.
 *
 * Given a {@link node.TapOutNode} with a known name in a signal graph, we can
 * use {@link node.TapInNode} to wire the signal into any other region of our
 * graph, allowing feedback around arbitrary subgraphs.
 *
 * Note: Feedback loops can very easily build unstable scenarios that grow in
 * volume extremely quickly. Elementary cannot provide implicit constraints to
 * prevent this behavior. Please use care when implementing feedback to insert
 * appropriate gains.
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * the signal from the wired {@link node.TapOutNode}
 *
 * @see node.TapInProps
 * @see node.TapInNode
 */
export const tapIn: node.NativeNodeFactory<"tapIn", node.TapInProps>;

/**
 * A variable-length delay line with a feedback component.
 *
 * When feedback is zero, this gives a simple signal delay.
 *
 * At small delay times, and with various feedback and feedforward components,
 * this gives various comb filters.
 *
 * At larger delay times with a positive feedback
 * this gives a simple feedback delay/echo.
 *
 * In the following example, a feedforward component where feedforward is equal
 * to the negative feedback gives an allpass filter:
 * @example
 *     el.add(
 *      el.mul(feedforward, signal),
 *      el.delay(
 *       {size: 44100}, // usually one second
 *       el.ms2samps(length),
 *       feedback,
 *       signal));
 *
 * @param [props]
 * {@link node.DelayProps} object
 *
 * @param length
 * delay time in samples
 *
 * @param feedback
 * feedback in the range of [-1, 1]
 *
 * @param signal
 * the signal to delay
 *
 * @returns
 * a {@link node.DelayNode} that computes the output of the delay
 *
 * @see node.DelayProps
 * @see node.Child
 * @see node.DelayNode
 */
export const delay: node.NativeNodeFactory<
  "delay",
  node.DelayProps,
  [length: node.Child, feedback: node.Child, signal: node.Child]
>;
