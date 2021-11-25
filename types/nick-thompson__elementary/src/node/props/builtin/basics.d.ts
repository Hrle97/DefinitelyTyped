import { KeyProps } from "../props";

/**
 * Props for el.in.
 *
 * @see KeyProps
 */
export interface InProps extends KeyProps {
  /**
   * Input channel of the el.in node.
   *
   * @see InProps
   */
  channel?: number;
}

/**
 * Props for el.const.
 *
 * @see KeyProps
 */
export interface ConstProps extends KeyProps {
  /**
   * Value of the el.const node.
   *
   * @see ConstProps
   */
  value: number;
}
