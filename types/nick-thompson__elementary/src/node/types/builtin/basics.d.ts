import { SelectProps } from "../../props/builtin/basics";

import { SelectChildren } from "../../children/builtin/basics";

import { CompositeFunction } from "../types";

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

/**
 * SelectNode type.
 */
export type SelectType = CompositeFunction<
  "select",
  SelectProps,
  SelectChildren
>;
