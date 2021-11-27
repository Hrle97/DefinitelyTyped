import {
  ZeroProps,
  DcBlockProps,
  Df11Props,
  SmoothProps,
  SmProps,
  LowPassProps,
  HighPassProps,
  BandPassProps,
  AllPassProps,
  NotchProps,
  PeakProps,
  LowShelfProps,
  HighShelfProps,
  PinkProps,
} from "../../props/builtin/filters";

import {
  ZeroChildren,
  DcBlockChildren,
  Df11Children,
  SmoothChildren,
  SmChildren,
  LowPassChildren,
  HighPassChildren,
  BandPassChildren,
  AllPassChildren,
  NotchChildren,
  PeakChildren,
  LowShelfChildren,
  HighShelfChildren,
  PinkChildren,
} from "../../children/builtin/filters";

import { CompositeFunction } from "../types";

/**
 * PoleNode type.
 */
export type PoleType = "pole";

/**
 * ZeroNode type.
 */
export type ZeroType = CompositeFunction<"zero", ZeroProps, ZeroChildren>;

/**
 * DcBlockNode type.
 */
export type DcBlockType = CompositeFunction<
  "dcblock",
  DcBlockProps,
  DcBlockChildren
>;

/**
 * Df11Node type.
 */
export type Df11Type = CompositeFunction<"df11", Df11Props, Df11Children>;

/**
 * SmoothNode type.
 */
export type SmoothType = CompositeFunction<
  "smooth",
  SmoothProps,
  SmoothChildren
>;

/**
 * SmNode type.
 */
export type SmType = CompositeFunction<"sm", SmProps, SmChildren>;

/**
 * BiquadNode type.
 */
export type BiquadType = "biquad";

/**
 * LowPassNode type.
 */
export type LowPassType = CompositeFunction<
  "lowpass",
  LowPassProps,
  LowPassChildren
>;

/**
 * HighPassNode type.
 */
export type HighPassType = CompositeFunction<
  "highpass",
  HighPassProps,
  HighPassChildren
>;

/**
 * BandPassNode type.
 */
export type BandPassType = CompositeFunction<
  "bandpass",
  BandPassProps,
  BandPassChildren
>;

/**
 * AllPassNode type.
 */
export type AllPassType = CompositeFunction<
  "allpass",
  AllPassProps,
  AllPassChildren
>;

/**
 * NotchNode type.
 */
export type NotchType = CompositeFunction<"notch", NotchProps, NotchChildren>;

/**
 * PeakNode type.
 */
export type PeakType = CompositeFunction<"peak", PeakProps, PeakChildren>;

/**
 * LowShelfNode type.
 */
export type LowShelfType = CompositeFunction<
  "lowshelf",
  LowShelfProps,
  LowShelfChildren
>;

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

/**
 * PinkNode type.
 */
export type PinkType = CompositeFunction<"pink", PinkProps, PinkChildren>;
