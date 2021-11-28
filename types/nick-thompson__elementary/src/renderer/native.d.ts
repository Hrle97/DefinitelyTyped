import { renderer } from "@nick-thompson/elementary";

/**
 * Base {@link renderer.Renderer} type for native renderers.
 */
export interface NativeRenderer extends renderer.Renderer {
  /**
   * This method installs the necessary communication mechanisms between the
   * {@link renderer.NativeRenderer} and the backend engine, and if necessary,
   * spins up an instance of the underlying engine.
   *
   * It must be called once at the beginning of your application's lifetime to
   * kick off the Elementary engine, and should be called only after
   * installing a "load" event listener on the {@link renderer.NativeRenderer}
   * instance itself.
   *
   * @returns
   * when the {@link renderer.NativeRenderer} is initialized
   */
  initialize(): Promise<undefined>;
}
