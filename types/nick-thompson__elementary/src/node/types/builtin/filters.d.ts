import { CompositeFunction } from "../../composite";

import { PoleName } from "../../names";
/**
 * PoleNode type.
 *
 * @see PoleName
 */
export type PoleType = PoleName;

import { ZeroName } from "../../names";
import { ZeroProps } from "../../props";
import { ZeroChildren } from "../../children";
/**
 * ZeroNode type.
 *
 * @see CompositeFunction
 * @see ZeroName
 * @see ZeroProps
 * @see ZeroChildren
 */
export type ZeroType = CompositeFunction<ZeroName, ZeroProps, ZeroChildren>;

import { DcBlockProps } from "../../props";
import { DcBlockChildren } from "../../children";
/**
 * DcBlockNode type.
 *
 * @see CompositeFunction
 * @see DcBlockName
 * @see DcBlockProps
 * @see DcBlockChildren
 */
export type DcBlockType = CompositeFunction<
  "dcblock",
  DcBlockProps,
  DcBlockChildren
>;

import { Df11Name } from "../../names";
import { Df11Props } from "../../props";
import { Df11Children } from "../../children";
/**
 * Df11Node type.
 *
 * @see CompositeFunction
 * @see Df11Name
 * @see Df11Props
 * @see Df11Children
 */
export type Df11Type = CompositeFunction<Df11Name, Df11Props, Df11Children>;

import { SmoothProps } from "../../props";
import { SmoothChildren } from "../../children";
/**
 * SmoothNode type.
 *
 * @see CompositeFunction
 * @see SmoothName
 * @see SmoothProps
 * @see SmoothChildren
 */
export type SmoothType = CompositeFunction<
  "smooth",
  SmoothProps,
  SmoothChildren
>;

import { SmName } from "../../names";
import { SmProps } from "../../props";
import { SmChildren } from "../../children";
/**
 * SmNode type.
 *
 * @see CompositeFunction
 * @see SmName
 * @see SmProps
 * @see SmChildren
 */
export type SmType = CompositeFunction<SmName, SmProps, SmChildren>;

import { BiquadName } from "../../names";
/**
 * BiquadNode type.
 *
 * @see BiquadName
 */
export type BiquadType = BiquadName;

import { LowPassName } from "../../names";
import { LowPassProps } from "../../props";
import { LowPassChildren } from "../../children";
/**
 * LowPassNode type.
 *
 * @see CompositeFunction
 * @see LowPassName
 * @see LowPassProps
 * @see LowPassChildren
 */
export type LowPassType = CompositeFunction<
  LowPassName,
  LowPassProps,
  LowPassChildren
>;

import { HighPassName } from "../../names";
import { HighPassProps } from "../../props";
import { HighPassChildren } from "../../children";
/**
 * HighPassNode type.
 *
 * @see CompositeFunction
 * @see HighPassName
 * @see HighPassProps
 * @see HighPassChildren
 */
export type HighPassType = CompositeFunction<
  HighPassName,
  HighPassProps,
  HighPassChildren
>;

import { BandPassName } from "../../names";
import { BandPassProps } from "../../props";
import { BandPassChildren } from "../../children";
/**
 * BandPassNode type.
 *
 * @see CompositeFunction
 * @see BandPassName
 * @see BandPassProps
 * @see BandPassChildren
 */
export type BandPassType = CompositeFunction<
  BandPassName,
  BandPassProps,
  BandPassChildren
>;

import { AllPassName } from "../../names";
import { AllPassProps } from "../../props";
import { AllPassChildren } from "../../children";
/**
 * AllPassNode type.
 *
 * @see CompositeFunction
 * @see AllPassName
 * @see AllPassProps
 * @see AllPassChildren
 */
export type AllPassType = CompositeFunction<
  AllPassName,
  AllPassProps,
  AllPassChildren
>;

import { NotchName } from "../../names";
import { NotchProps } from "../../props";
import { NotchChildren } from "../../children";
/**
 * NotchNode type.
 *
 * @see CompositeFunction
 * @see NotchName
 * @see NotchProps
 * @see NotchChildren
 */
export type NotchType = CompositeFunction<NotchName, NotchProps, NotchChildren>;

import { PeakName } from "../../names";
import { PeakProps } from "../../props";
import { PeakChildren } from "../../children";
/**
 * PeakNode type.
 *
 * @see CompositeFunction
 * @see PeakName
 * @see PeakProps
 * @see PeakChildren
 */
export type PeakType = CompositeFunction<PeakName, PeakProps, PeakChildren>;

import { LowShelfName } from "../../names";
import { LowShelfProps } from "../../props";
import { LowShelfChildren } from "../../children";
/**
 * LowShelfNode type.
 *
 * @see CompositeFunction
 * @see LowShelfName
 * @see LowShelfProps
 * @see LowShelfChildren
 */
export type LowShelfType = CompositeFunction<
  LowShelfName,
  LowShelfProps,
  LowShelfChildren
>;

import { HighShelfName } from "../../names";
import { HighShelfProps } from "../../props";
import { HighShelfChildren } from "../../children";
/**
 * HighShelfNode type.
 *
 * @see CompositeFunction
 * @see HighShelfName
 * @see HighShelfProps
 * @see HighShelfChildren
 */
export type HighShelfType = CompositeFunction<
  HighShelfName,
  HighShelfProps,
  HighShelfChildren
>;

import { ConvolveName } from "../../names";
/**
 * ConvolveNode type.
 *
 * @see ConvolveName
 */
export type ConvolveType = ConvolveName;

import { PinkName } from "../../names";
import { PinkProps } from "../../props";
import { PinkChildren } from "../../children";
/**
 * PinkNode type.
 *
 * @see CompositeFunction
 * @see PinkName
 * @see PinkProps
 * @see PinkChildren
 */
export type PinkType = CompositeFunction<PinkName, PinkProps, PinkChildren>;
