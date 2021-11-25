import { Renderer } from "./renderer";

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
