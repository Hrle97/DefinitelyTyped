import { EnvProps, AdsrProps, HannProps } from "../../props/builtin/signals";

import {
  EnvChildren,
  AdsrChildren,
  HannChildren,
} from "../../children/builtin/signals";

import { CompositeNodeFunction } from "../types";

/**
 * EnvNode type.
 */
export type EnvType = CompositeNodeFunction<"env", EnvProps, EnvChildren>;

/**
 * AdsrNode type.
 */
export type AdsrType = CompositeNodeFunction<"adsr", AdsrProps, AdsrChildren>;

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
export type HannType = CompositeNodeFunction<"hann", HannProps, HannChildren>;
