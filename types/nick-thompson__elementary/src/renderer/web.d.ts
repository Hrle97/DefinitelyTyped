import { renderer } from "@nick-thompson/elementary";

/**
 * Elementary {@link renderer.Renderer} for WebAudio.
 */
export interface WebAudioRenderer extends renderer.Renderer {
  /**
   * This method installs the necessary communication mechanisms between the
   * {@link renderer.Renderer} and the WebAudio backend engine, and if
   * necessary, spins up an instance of the underlying engine.
   *
   * It must be called once at the beginning of your application's lifetime to
   * kick off the Elementary engine, and should be called only after
   * installing a "load" event listener on the {@link renderer.Renderer}
   * instance itself.
   *
   * @param context
   * {@link AudioContext} to initialize the {@link renderer.WebAudioRenderer}
   * with
   *
   * @param options
   * {@link AudioWorkletNodeOptions} that will get passed to the underlying
   * {@link AudioWorkletNode}
   *
   * @returns
   * when the {@link Renderer} is initialized
   *
   * @see AudioContext
   * @see AudioWorkletNode
   * @see AudioWorkletNodeOptions
   */
  initialize(
    context: AudioContext,
    options: AudioWorkletNodeOptions
  ): Promise<undefined>;
}
