import { Child } from "../children";

/**
 * SampleNode children.
 */
export type SampleChildren = [
  /**
   * Pulse train that triggers the playback of the sample.
   */
  trigger: Child
];

/**
 * TableNode children.
 */
export type TableChildren = [
  /**
   * Lookup position of the table.
   */
  position: Child
];
