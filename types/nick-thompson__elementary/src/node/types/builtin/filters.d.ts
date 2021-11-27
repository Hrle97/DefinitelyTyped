import { CompositeFunction } from "../types";

/**
 * PoleNode type.
 */
export type PoleType = "pole";

import { ZeroProps } from "../../props";
import { ZeroChildren } from "../../children";
/**
 * ZeroNode type.
 */
export type ZeroType = CompositeFunction<"zero", ZeroProps, ZeroChildren>;

import { DcBlockProps } from "../../props";
import { DcBlockChildren } from "../../children";
/**
 * DcBlockNode type.
 */
export type DcBlockType = CompositeFunction<
  "dcblock",
  DcBlockProps,
  DcBlockChildren
>;

import { Df11Props } from "../../props";
import { Df11Children } from "../../children";
/**
 * Df11Node type.
 */
export type Df11Type = CompositeFunction<"df11", Df11Props, Df11Children>;

import { SmoothProps } from "../../props";
import { SmoothChildren } from "../../children";
/**
 * SmoothNode type.
 */
export type SmoothType = CompositeFunction<
  "smooth",
  SmoothProps,
  SmoothChildren
>;

import { SmProps } from "../../props";
import { SmChildren } from "../../children";
/**
 * SmNode type.
 */
export type SmType = CompositeFunction<"sm", SmProps, SmChildren>;

/**
 * BiquadNode type.
 */
export type BiquadType = "biquad";

import { LowPassProps } from "../../props";
import { LowPassChildren } from "../../children";
/**
 * LowPassNode type.
 */
export type LowPassType = CompositeFunction<
  "lowpass",
  LowPassProps,
  LowPassChildren
>;

import { HighPassProps } from "../../props";
import { HighPassChildren } from "../../children";
/**
 * HighPassNode type.
 */
export type HighPassType = CompositeFunction<
  "highpass",
  HighPassProps,
  HighPassChildren
>;

import { BandPassProps } from "../../props";
import { BandPassChildren } from "../../children";
/**
 * BandPassNode type.
 */
export type BandPassType = CompositeFunction<
  "bandpass",
  BandPassProps,
  BandPassChildren
>;

import { AllPassProps } from "../../props";
import { AllPassChildren } from "../../children";
/**
 * AllPassNode type.
 */
export type AllPassType = CompositeFunction<
  "allpass",
  AllPassProps,
  AllPassChildren
>;

import { NotchProps } from "../../props";
import { NotchChildren } from "../../children";
/**
 * NotchNode type.
 */
export type NotchType = CompositeFunction<"notch", NotchProps, NotchChildren>;

import { PeakProps } from "../../props";
import { PeakChildren } from "../../children";
/**
 * PeakNode type.
 */
export type PeakType = CompositeFunction<"peak", PeakProps, PeakChildren>;

import { LowShelfProps } from "../../props";
import { LowShelfChildren } from "../../children";
/**
 * LowShelfNode type.
 */
export type LowShelfType = CompositeFunction<
  "lowshelf",
  LowShelfProps,
  LowShelfChildren
>;

import { HighShelfProps } from "../../props";
import { HighShelfChildren } from "../../children";
/**
 * HighShelfNode type.
 */
export type HighShelfType = CompositeFunction<
  "highshelf",
  HighShelfProps,
  HighShelfChildren
>;

/**
 * ConvolveNode type.
 */
export type ConvolveType = "convolve";

import { PinkProps } from "../../props";
import { PinkChildren } from "../../children";
/**
 * PinkNode type.
 */
export type PinkType = CompositeFunction<"pink", PinkProps, PinkChildren>;
