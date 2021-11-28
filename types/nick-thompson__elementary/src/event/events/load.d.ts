/**
 * Event emitted by a renderer after it has been initialized.
 */
export interface LoadEvent {
  /**
   * Sample rate with which the renderer was initialized.
   */
  sampleRate: number;

  /**
   * Block size with which the renderer was initialized.
   */
  blockSize: number;

  /**
   * Number of input channels with which the renderer was initialized.
   */
  numInputs: number;

  /**
   * Number of output channels with which the renderer was initialized.
   */
  numOutputs: number;
}
