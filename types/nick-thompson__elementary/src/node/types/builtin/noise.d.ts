import { CompositeFunction } from "../../composite";

import { NoiseProps } from "../../props";
import { NoiseChildren } from "../../children";
/**
 * NoiseNode type.
 */
export type NoiseType = CompositeFunction<"noise", NoiseProps, NoiseChildren>;

import { PinkNoiseProps } from "../../props";
import { PinkNoiseChildren } from "../../children";
/**
 * PinkNoiseNode type.
 */
export type PinkNoiseType = CompositeFunction<
  "pinknoise",
  PinkNoiseProps,
  PinkNoiseChildren
>;
