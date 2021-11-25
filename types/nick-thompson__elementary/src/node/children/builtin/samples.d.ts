import { Child } from "../children";

/**
 * Sample node children.
 */
export type SampleChildren = [
  /**
   * Pulse train that triggers the playback of the sample.
   */
  trigger: Child
];

/**
 * Table node children.
 */
export type TableChildren = [
  /**
   * Lookup position of the table.
   */
  position: Child
];
