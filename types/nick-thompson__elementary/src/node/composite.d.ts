import { node, renderer } from "@nick-thompson/elementary";

/**
 * Context passed to a {@link node.CompositeFunction} to get information about
 * the current {@link renderer.Renderer}.
 */
export interface RenderContext {
  /**
   * Sample rate of the current {@link renderer.Renderer}.
   */
  sampleRate: number;

  /**
   * Block size of the current {@link renderer.Renderer}.
   */
  blockSize: number;

  /**
   * Number of input channels of the current {@link renderer.Renderer}.
   */
  numInputs: number;

  /**
   * Number of output channels of the current {@link renderer.Renderer}.
   */
  numOutputs: number;
}

/**
 * {@link node.CompositeFunction} for the provided {@link node.Name},
 * {@link node.Props}, and {@link node.Children}.
 *
 * @see node.Name
 * @see node.Context
 * @see node.Props
 * @see node.Children
 * @see node.Node
 */
export type CompositeFunction<
  N extends node.Name,
  P extends node.Props,
  C extends node.Children
> = ((args: {
  context: node.RenderContext;
  props: P;
  children: C;
}) => node.Node) & {
  name: N;
};
