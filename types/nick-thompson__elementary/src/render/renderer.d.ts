import { EventEmitter } from 'events';

import {
  Child,
  NodeType,
  NodeProps,
  NodeChildren,
  ConcreteNode,
} from '../node';
import { MidiEvent, MeterEvent, MetroEvent } from './events';

export interface Renderer extends EventEmitter {
  /**
   * The load event fires when the runtime has finished preparing the audio
   * rendering thread and is ready to handle render calls.
   *
   * @param event
   * event name
   *
   * @param doThis
   * callback to call
   *
   * @see Renderer
   */
  on(event: 'load', doThis: () => void): this;

  /**
   * The midi event fires any time the runtime receives a MIDI event from
   * any connected and enabled device. By default, the runtime will be
   * listening to any such device, which may yield frequent MIDI events.
   *
   * @param event
   * event name
   *
   * @param doThis
   * callback to call with the {@link MidiEvent}
   *
   * @see Renderer
   * @see MidiEvent
   */
  on(event: 'midi', doThis: (event: MidiEvent) => void): this;

  /**
   * The meter event fires any time a meter node emits it. This happens on
   * each block processed by the renderer.
   *
   * @param event
   * event name
   *
   * @param doThis
   * callback to call with the {@link MeterEvent}
   *
   * @see Renderer
   * @see MeterEvent
   */
  on(event: 'meter', doThis: (event: MeterEvent) => void): this;

  /**
   * The meter event fires any time a metro node emits it. This happens on
   * each interval that the meter event node was initialized with.
   *
   * @param event
   * event name
   *
   * @param doThis
   * callback to call with the {@link MetroEvent}
   *
   * @see Renderer
   * @see MetroEvent
   */
  on(event: 'metro', doThis: (event: MetroEvent) => void): this;

  /**
   * Factory for any {@link Node} type.
   *
   * @see Node
   * @see NodeType
   * @see NodeProps
   * @see NodeChildren
   */
  createNode: <T extends NodeType>(
    type: T,
    props: NodeProps<T>,
    children: NodeChildren<T>,
  ) => ConcreteNode<T>;

  /**
   * Accepts a variadic set of arguments, each one representing the audio
   * signal that is to be rendered into the given channel.
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

export interface ElementaryWebAudioRenderer extends Renderer {
  /**
   * Rendering Elementary applications via WebAudio is extremely simple. In
   * general, you'll just need to import the {@link ElementaryWebAudioRenderer}
   * from the top level package, establish a callback for the "load" event,
   * initialize the renderer by passing in an {@link AudioContext} and an
   * optional configuration object, then connect the resulting
   * {@link AudioWorkletNode} to your desired destination.
   *
   * This method installs the necessary communication mechanisms between the
   * {@link Renderer} and the backend engine, and if necessary, spins up an
   * instance of the underlying engine. It must be called once at the
   * beginning of your application's lifetime to kick off the Elementary
   * engine, and should be called only after installing a "load" event
   * listener on the {@link Renderer} instance itself.
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
   *   (async function main() {
   *     let node = await core.initialize(ctx, {
   *       numberOfInputs: 0,
   *       numberOfOutputs: 1,
   *       outputChannelCount: [2],
   *     });
   *     node.connect(ctx.destination);
   *   })();
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
    options: AudioWorkletNodeOptions,
  ): Promise<undefined>;
}

export interface ElementaryNodeRenderer extends Renderer {
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

export interface ElementaryPluginRenderer extends Renderer {
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