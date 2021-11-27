import { CompositeFunction } from "../../composite";

import { EnvProps } from "../../props";
import { EnvChildren } from "../../children";
/**
 * EnvNode type.
 */
export type EnvType = CompositeFunction<"env", EnvProps, EnvChildren>;

import { AdsrProps } from "../../props";
import { AdsrChildren } from "../../children";
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

import { HannProps } from "../../props";
import { HannChildren } from "../../children";
/**
 * HannNode type.
 */
export type HannType = CompositeFunction<"hann", HannProps, HannChildren>;
