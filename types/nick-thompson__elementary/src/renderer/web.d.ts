import { Renderer } from "./renderer";

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
