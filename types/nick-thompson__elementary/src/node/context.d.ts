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
