import { Child } from "../children";

/**
 * SampleNode children.
 *
 * @see Child
 */
export type SampleChildren = [
  /**
   * Pulse train that triggers the playback of the sample.
   */
  trigger: Child
];

/**
 * TableNode children.
 *
 * @see Child
 */
export type TableChildren = [
  /**
   * Lookup position of the table.
   */
  position: Child
];
