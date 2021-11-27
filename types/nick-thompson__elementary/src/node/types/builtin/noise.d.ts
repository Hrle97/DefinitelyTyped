import { CompositeFunction } from "../../composite";

import { NoiseName } from "../../names";
import { NoiseProps } from "../../props";
import { NoiseChildren } from "../../children";
/**
 * NoiseNode type.
 *
 * @see CompositeFunction
 * @see NoiseName
 * @see NoiseProps
 * @see NoiseChildren
 */
export type NoiseType = CompositeFunction<NoiseName, NoiseProps, NoiseChildren>;

import { PinkNoiseName } from "../../names";
import { PinkNoiseProps } from "../../props";
import { PinkNoiseChildren } from "../../children";
/**
 * PinkNoiseNode type.
 *
 * @see CompositeFunction
 * @see PinkNoiseName
 * @see PinkNoiseProps
 * @see PinkNoiseChildren
 */
export type PinkNoiseType = CompositeFunction<
  PinkNoiseName,
  PinkNoiseProps,
  PinkNoiseChildren
>;
