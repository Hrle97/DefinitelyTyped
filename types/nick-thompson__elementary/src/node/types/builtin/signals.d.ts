import { EnvProps, AdsrProps, HannProps } from "../../props/builtin/signals";

import {
  EnvChildren,
  AdsrChildren,
  HannChildren,
} from "../../children/builtin/signals";

import { CompositeFunction } from "../types";

/**
 * EnvNode type.
 */
export type EnvType = CompositeFunction<"env", EnvProps, EnvChildren>;

/**
 * AdsrNode type.
 */
export type AdsrType = CompositeFunction<"adsr", AdsrProps, AdsrChildren>;

/**
 * LatchNode type.
 */
export type LatchType = "latch";

/**
 * SeqNode type.
 */
export type SeqType = "seq";

/**
 * HannNode type.
 */
export type HannType = CompositeFunction<"hann", HannProps, HannChildren>;
