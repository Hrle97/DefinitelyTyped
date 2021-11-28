import { EventEmitter } from "events";

import { node, event } from "@nick-thompson/elementary";

/**
 * Base type of Elementary renderers.
 */
export interface Renderer extends EventEmitter {
  /**
   * Registers a callback for the specified {@link event.Type}.
   *
   * The 'load' event fires when the runtime has finished preparing the audio
   * rendering thread and is ready to handle render calls.
   *
   * The 'midi' event fires any time the runtime receives a MIDI event from
   * any connected and enabled device. By default, the runtime will be
   * listening to any such device, which may yield frequent MIDI events.
   *
   * The 'meter' event fires any time a {@link node.MeterNode} emits it.
   * This happens on each block processed by the renderer.
   *
   * The 'metro' event fires any time a {@link node.MetroNode} emits it.
   * This happens on each interval that the meter event node was initialized
   * with.
   *
   * @param type
   * {@link event.Type} on which to call the callback
   *
   * @param callback
   * {@link event.TypeCallback} to call
   *
   * @see event.Type
   * @see event.TypeCallback
   */
  on: <T extends event.Type>(type: T, doThis: event.TypeCallback<T>) => this;

  /**
   * Factory for any {@link node.Type}.
   *
   * @param type
   * the type of {@link node.Node} to create
   *
   * @param props
   * the props of {@link node.Node} to create
   *
   * @param children
   * the children of {@link node.Node} to create
   *
   * @returns
   * the newly created {@link node.Node}
   *
   * @see node.Node
   * @see node.TypeProps
   * @see node.TypeChildren
   * @see node.TypeNode
   */
  createNode: <T extends node.Type>(
    type: T,
    props: node.TypeProps<T>,
    children: node.TypeChildren<T>
  ) => node.TypeNode<T>;

  /**
   * Memoizes the result of the provided {@link node.CompositeFunction}
   *
   * If the predicate returns false, the previous result of the
   * {@link node.CompositeFunction} is used, and otherwise, a new result is
   * computed.
   *
   * If no predicate is provided, the predicate is equal to shallowly
   * equating the previous props to the next props.
   *
   * @param composite
   * {@link node.CompositeFunction} to memoize the result of
   *
   * @param [predicate]
   * should return false when a new result of the provided
   * {@link node.CompositeFunction} should be computed, and true otherwise
   *
   * @returns
   * if predicate is false, the newly computed result of the provided
   * {@link node.CompositeFunction} and the memoized result otherwise
   *
   * @see node.Name
   * @see node.Props
   * @see node.Children
   * @see node.CompositeFunction
   */
  memo: <N extends node.Name, P extends node.Props, C extends node.Children>(
    composite: node.CompositeFunction<N, P, C>,
    predicate?: (prevProps: P, nextProps: P) => boolean
  ) => node.CompositeFunction<N, P, C>;

  /**
   * Accepts a variadic set of {@link node.Child}ren, each one representing
   * the audio signal that will rendered into the given channel.
   *
   * Will throw an error if invoked before the 'load' event has fired.
   *
   * @param children
   * {@link node.Child}ren to render in channels
   *
   * @see node.Child
   */
  render(...children: node.Child[]): void;
}