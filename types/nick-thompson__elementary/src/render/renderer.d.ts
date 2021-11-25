import { EventEmitter } from "events";

import {
  Props,
  Child,
  Children,
  NodeType,
  NodeProps,
  NodeChildren,
  ConcreteNode,
  CompositeNodeFunction,
} from "../node";

import { EventType, EventCallback } from "../event";

export interface Renderer extends EventEmitter {
  /**
   * Registers a callback for the specified event type.
   *
   * The load event fires when the runtime has finished preparing the audio
   * rendering thread and is ready to handle render calls.
   *
   * The midi event fires any time the runtime receives a MIDI event from
   * any connected and enabled device. By default, the runtime will be
   * listening to any such device, which may yield frequent MIDI events.
   *
   * The meter event fires any time a meter node emits it. This happens on
   * each block processed by the renderer.
   *
   * The metro event fires any time a metro node emits it. This happens on
   * each interval that the meter event node was initialized with.
   *
   * @param type
   * event type
   *
   * @param callback
   * callback to call
   *
   * @see Renderer
   */
  on: <T extends EventType>(type: T, doThis: EventCallback<T>) => this;

  /**
   * Factory for any {@link Node} type.
   *
   * @param type
   * the type of {@link Node} to create
   *
   * @param props
   * the props of {@link Node} to create
   *
   * @param children
   * the children of {@link Node} to create
   *
   * @returns
   * the newly created {@link Node}
   *
   * @see Node
   * @see NodeType
   * @see NodeProps
   * @see NodeChildren
   */
  createNode: <T extends NodeType>(
    type: T,
    props: NodeProps<T>,
    children: NodeChildren<T>
  ) => ConcreteNode<T>;

  /**
   * Memoizes the result of the provided {@link CompositeNodeFunction}.
   *
   * If the predicate returns false, the previous result of the
   * {@link CompositeNodeFunction} is used, and otherwise, a new result is
   * computed.
   *
   * If no predicate is provided, the predicate is equal to shallowly
   * equating the previous props to the next props.
   *
   * @param composite
   * {@link CompositeNodeFunction} to memoize the result of
   *
   * @param [predicate]
   * should return false when a new result of the provided
   * {@link CompositeNodeFunction} should be computed, and true otherwise
   *
   * @returns
   * if predicate is false, the newly computed result of the provided
   * {@link CompositeNodeFunction} and the memoized result otherwise
   *
   * @see Renderer
   * @see CompositeNodeFunction
   */
  memo: <P extends Props, C extends Children>(
    composite: CompositeNodeFunction<P, C>,
    predicate?: (prevProps: P, nextProps: P) => boolean
  ) => CompositeNodeFunction<P, C>;

  /**
   * Accepts a variadic set of arguments, each one representing the audio
   * signal that will rendered into the given channel.
   *
   * Will throw an error if invoked before the load event has fired.
   *
   * @param children
   * {@link Child}ren to render in channels
   *
   * @see Renderer
   * @see Child
   * @see Node
   */
  render(...children: Child[]): void;
}

/**
 * Base {@link Renderer} type for the {@link ElementaryNodeRenderer} and
 * {@link ElementaryPluginRenderer}.
 *
 * @see Renderer
 */
export interface NativeRenderer extends Renderer {
  /**
   * This method installs the necessary communication mechanisms between the
   * {@link Renderer} and the backend engine, and if necessary, spins up an
   * instance of the underlying engine. It must be called once at the
   * beginning of your application's lifetime to kick off the Elementary
   * engine, and should be called only after installing a "load" event
   * listener on the {@link Renderer} instance itself.
   *
   * @async
   *
   * @returns
   * when the {@link Renderer} is initialized
   *
   * @see Renderer
   */
  initialize(): Promise<undefined>;
}

/**
 * {@link Renderer} for the Elemenentary CLI.
 *
 * @see Renderer
 * @see NativeRenderer
 */
export interface ElementaryNodeRenderer extends NativeRenderer {}

/**
 * {@link Renderer} for the Elementary DevKit.
 *
 * @see Renderer
 * @see NativeRenderer
 */
export interface ElementaryPluginRenderer extends NativeRenderer {}

/**
 * WebAudio {@link Renderer} for Elementary.
 *
 * Rendering Elementary applications via WebAudio is extremely simple. In
 * general, you'll just need to import the {@link ElementaryWebAudioRenderer}
 * from the top level package, establish a callback for the "load" event,
 * initialize the renderer by passing in an {@link AudioContext} and an
 * optional configuration object, then connect the resulting
 * {@link AudioWorkletNode} to your desired destination.
 *
 * @example
 *   import {
 *     ElementaryWebAudioRenderer as core,
 *     el
 *   } from '@nick-thompson/elementary';
 *
 *   core.on('load', function() {
 *     core.render(el.cycle(440), el.cycle(441));
 *   });
 *
 * @see Renderer
 */
export interface ElementaryWebAudioRenderer extends Renderer {
  /**
   * This method installs the necessary communication mechanisms between the
   * {@link Renderer} and the backend engine, and if necessary, spins up an
   * instance of the underlying engine. It must be called once at the
   * beginning of your application's lifetime to kick off the Elementary
   * engine, and should be called only after installing a "load" event
   * listener on the {@link Renderer} instance itself.
   *
   * @async
   *
   * @param context
   * {@link AudioContext} to initialize the {@link ElementaryWebAudioRenderer}
   * with
   *
   * @param options
   * {@link AudioWorkletNodeOptions} that will get passed to the underlying
   * {@link AudioWorkletNode}
   *
   * @returns
   * when the {@link Renderer} is initialized
   *
   * @see Renderer
   */
  initialize(
    context: AudioContext,
    options: AudioWorkletNodeOptions
  ): Promise<undefined>;
}