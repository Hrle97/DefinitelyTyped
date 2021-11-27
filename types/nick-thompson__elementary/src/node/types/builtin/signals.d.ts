import { CompositeFunction } from "../../composite";

import { EnvName } from "../../names";
import { EnvProps } from "../../props";
import { EnvChildren } from "../../children";
/**
 * EnvNode type.
 *
 * @see CompositeFunction
 * @see EnvName
 * @see EnvProps
 * @see EnvChildren
 */
export type EnvType = CompositeFunction<EnvName, EnvProps, EnvChildren>;

import { AdsrName } from "../../names";
import { AdsrProps } from "../../props";
import { AdsrChildren } from "../../children";
/**
 * AdsrNode type.
 *
 * @see CompositeFunction
 * @see AdsrName
 * @see AdsrProps
 * @see AdsrChildren
 */
export type AdsrType = CompositeFunction<AdsrName, AdsrProps, AdsrChildren>;

import { LatchName } from "../../names";
/**
 * LatchNode type.
 *
 * @see LatchName
 */
export type LatchType = LatchName;

import { SeqName } from "../../names";
/**
 * SeqNode type.
 *
 * @see SeqName
 */
export type SeqType = SeqName;

import { HannName } from "../../names";
import { HannProps } from "../../props";
import { HannChildren } from "../../children";
/**
 * HannNode type.
 *
 * @see CompositeFunction
 * @see HannName
 * @see HannProps
 * @see HannChildren
 */
export type HannType = CompositeFunction<HannName, HannProps, HannChildren>;
