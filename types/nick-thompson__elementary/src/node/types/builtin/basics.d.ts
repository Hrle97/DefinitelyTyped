import { CompositeFunction } from "../../composite";

import { SrName } from "../../names";
/**
 * SrNode type.
 */
export type SrType = SrName;

import { ConstName } from "../../names";
/**
 * ConstNode type.
 */
export type ConstType = ConstName;

import { CounterName } from "../../names";
/**
 * CounterNode type.
 */
export type CounterType = CounterName;

import { SelectName } from "../../names";
import { SelectProps } from "../../props";
import { SelectChildren } from "../../children";
/**
 * SelectNode type.
 */
export type SelectType = CompositeFunction<
  SelectName,
  SelectProps,
  SelectChildren
>;
