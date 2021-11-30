import { node } from "@nick-thompson/elementary";

/**
 * A very simple single-sample delay {@link node.Node} (z^-1).
 *
 * @see node.ZType
 */
export declare const z: node.ZType;

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
 * @see node.TapOutType
 */
export declare const tapOut: node.TapOutType;

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
 * @see node.TapInType
 */
export declare const tapIn: node.TapInType;

/**
 * A variable-length delay line with a feedback component.
 *
 * When feedback is zero, this gives a simple signal delay.
 *
 * At small delay times, and with various feedback and feedforward components,
 * this gives various comb filters.
 *
 * At larger delay times with a positive feedback this gives a simple feedback
 * delay/echo.
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
 * @see node.DelayType
 */
export declare const delay: node.DelayType;
