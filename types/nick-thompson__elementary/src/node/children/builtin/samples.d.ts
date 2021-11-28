import { node } from "@nick-thompson/elementary";

/**
 * {@link node.SampleNode} {@link node.Child}ren.
 *
 * @see node.SampleNode
 * @see node.Child
 */
export type SampleChildren = [
  /**
   * Pulse train that triggers the playback of the sample.
   */
  trigger: node.Child
];

/**
 * {@link node.TableNode} {@link node.Child}ren.
 *
 * @see node.TableNode
 * @see node.Child
 */
export type TableChildren = [
  /**
   * Lookup position of the table.
   */
  position: node.Child
];
