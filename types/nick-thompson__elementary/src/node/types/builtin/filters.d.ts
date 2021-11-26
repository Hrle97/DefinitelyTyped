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

import { CompositeNodeFunction } from "../types";

/**
 * PoleNode type.
 */
export type PoleType = "pole";

/**
 * ZeroNode type.
 */
export type ZeroType = CompositeNodeFunction<"zero", ZeroProps, ZeroChildren>;

/**
 * DcBlockNode type.
 */
export type DcBlockType = CompositeNodeFunction<
  "dcblock",
  DcBlockProps,
  DcBlockChildren
>;

/**
 * Df11Node type.
 */
export type Df11Type = CompositeNodeFunction<"df11", Df11Props, Df11Children>;

/**
 * SmoothNode type.
 */
export type SmoothType = CompositeNodeFunction<
  "smooth",
  SmoothProps,
  SmoothChildren
>;

/**
 * SmNode type.
 */
export type SmType = CompositeNodeFunction<"sm", SmProps, SmChildren>;

/**
 * BiquadNode type.
 */
export type BiquadType = "biquad";

/**
 * LowPassNode type.
 */
export type LowPassType = CompositeNodeFunction<
  "lowpass",
  LowPassProps,
  LowPassChildren
>;

/**
 * HighPassNode type.
 */
export type HighPassType = CompositeNodeFunction<
  "highpass",
  HighPassProps,
  HighPassChildren
>;

/**
 * BandPassNode type.
 */
export type BandPassType = CompositeNodeFunction<
  "bandpass",
  BandPassProps,
  BandPassChildren
>;

/**
 * AllPassNode type.
 */
export type AllPassType = CompositeNodeFunction<
  "allpass",
  AllPassProps,
  AllPassChildren
>;

/**
 * NotchNode type.
 */
export type NotchType = CompositeNodeFunction<
  "notch",
  NotchProps,
  NotchChildren
>;

/**
 * PeakNode type.
 */
export type PeakType = CompositeNodeFunction<"peak", PeakProps, PeakChildren>;

/**
 * LowShelfNode type.
 */
export type LowShelfType = CompositeNodeFunction<
  "lowshelf",
  LowShelfProps,
  LowShelfChildren
>;

/**
 * HighShelfNode type.
 */
export type HighShelfType = CompositeNodeFunction<
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
export type PinkType = CompositeNodeFunction<"pink", PinkProps, PinkChildren>;
