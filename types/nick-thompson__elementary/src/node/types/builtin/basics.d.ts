import { CompositeFunction } from "../../composite";

/**
 * SrNode type.
 */
export type SrType = "sr";

/**
 * ConstNode type.
 */
export type ConstType = "const";

/**
 * CounterNode type.
 */
export type CounterType = "counter";

import { SelectProps } from "../../props";
import { SelectChildren } from "../../children";
/**
 * SelectNode type.
 */
export type SelectType = CompositeFunction<
  "select",
  SelectProps,
  SelectChildren
>;
