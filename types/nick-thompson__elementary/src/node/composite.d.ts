import { Name } from "./name";
import { Props } from "./props";
import { Children } from "./children";
import { Node } from "./node";

/**
 * Context passed to a composite node function to get information about the
 * current renderer.
 */
export interface Context {
  /**
   * Sample rate of current renderer.
   */
  sampleRate: number;

  /**
   * Block size of current renderer.
   */
  blockSize: number;

  /**
   * Number of input channels of current renderer.
   */
  numInputs: number;

  /**
   * Number of output channels of current renderer.
   */
  numOutputs: number;
}

/**
 * Composite node function for the provided name, props, and children.
 *
 * @see Name
 * @see Context
 * @see Props
 * @see Children
 * @see Node
 */
export type CompositeFunction<
  N extends Name,
  P extends Props,
  C extends Children
> = ((args: { context: Context; props: P; children: C }) => Node) &
  Function & {
    name: N;
  };
