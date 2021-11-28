import { event } from "@nick-thompson/elementary";

/**
 * Base MIDI event type.
 * MIDI events are emitted by MIDI devices such as keyboards, control
 * surfaces or even virtual MIDI devices.
 * By default, Elementary listens to all MIDI events from all available MIDI
 * devices.
 */
export interface MidiEventBase {
  /**
   * Type of MIDI Event.
   */
  type: string;

  /**
   * Source of the MIDI event like a keyboard, control surface or even a
   * virtual MIDI device.
   */
  source: string;

  /**
   * The raw MIDI payload used for further deserialization.
   */
  bytes: string;
}

/**
 * Base type for MIDI note events.
 */
export interface MidiNoteEventBase extends event.MidiEventBase {
  /**
   * Frequency of the note being played which doesn't have to match the
   * 'noteName' and 'noteNumber' properties to express motions like
   * portamento and vibrato.
   *
   * Please refer to: http://midi.teragonaudio.com/tutr/notenum.htm
   */
  noteFrequency: number;

  /**
   * Name of the note being played.
   *
   * Please refer to: http://midi.teragonaudio.com/tutr/notenum.htm
   */
  noteName: string;

  /**
   * Number of the note being played.
   *
   * Please refer to: http://midi.teragonaudio.com/tutr/notenum.htm
   */
  noteNumber: number;
}

/**
 * A stricter type for 'noteOn' MIDI event types.
 */
export interface MidiNoteOnEvent extends event.MidiNoteEventBase {
  /**
   * Since this is a 'noteOn' event it can only be a 'noteOn' value.
   */
  type: "noteOn";
}

/**
 * A stricter type for 'noteOff' MIDI event types.
 */
export interface MidiNoteOffEvent extends event.MidiNoteEventBase {
  /**
   * Since this is a 'noteOff' event it can only be a 'noteOff' value.
   */
  type: "noteOff";
}

/**
 * A stricter type for MIDI note events.
 * Unlike the base type, this one does not allow for types of note events
 * other than 'noteOn' and 'noteOff'.
 *
 * @see event.MidiNoteOnEvent
 * @see event.MidiNoteOffEvent
 */
export type MidiNoteEvent = event.MidiNoteOnEvent | event.MidiNoteOffEvent;

/**
 * Base type for MIDI controller events usually emitted by control surfaces.
 */
export interface MidiControllerEvent extends event.MidiEventBase {
  /**
   * Since this is a 'controller' event the only possible value of this field
   * is 'controller'.
   */
  type: "controller";

  /**
   * One of the 16 available MIDI channels where each one represents a
   * separate 'instrument'.
   */
  channel: number;

  /**
   * The property of the channel to target; volume, pan and such.
   */
  target: number;

  /**
   * The value of the target property.
   */
  value: number;
}

// /**
//  * @todo document more
//  *
//  * More information is needed to document this type of event.
//  */
// export interface MidiProgramChangeEvent extends event.MidiEventBase {
// }
//
// /**
//  * @todo document more
//  *
//  * More information is needed to document this type of event.
//  */
// export interface MidiPitchWheelEvent extends event.MidiEventBase {
// }
//
// /**
//  * @todo document more
//  *
//  * More information is needed to document this type of event.
//  */
// export interface MidiAftertouchEvent extends event.MidiEventBase {
// }
//
// /**
//  * @todo document more
//  *
//  * More information is needed to document this type of event.
//  */
// export interface MidiChannelPressureEvent extends event.MidiEventBase {
// }
//
// /**
//  * @todo document more
//  *
//  * More information is needed to document this type of event.
//  */
// export interface MidiAllNotesOffEvent extends event.MidiEventBase {
// }
//
// /**
//  * @todo document more
//  *
//  * More information is needed to document this type of event.
//  */
// export interface MidiAllSoundOffEvent extends event.MidiEventBase {
// }
//
// /**
//  * @todo document more
//  *
//  * More information is needed to document this type of event.
//  */
// export interface MidiMetaEvent extends event.MidiEventBase {
// }

/**
 * Raw MIDI event that is emitted when Elementary does not know which type
 * of event is appropriate for the given MIDI message.
 */
export interface MidiRawEvent extends event.MidiEventBase {
  /**
   * The type can only be 'raw' for this type of event.
   */
  type: "raw";
}

/**
 * A stricter type for MIDI events.
 * The base type is a lot looser and does not allow for fields that are
 * specific to certain types.
 *
 * @see event.MidiNoteOnEvent
 * @see event.MidiNoteOffEvent
 * @see event.MidiControllerEvent
 * @see event.MidiProgramChangeEvent
 * @see event.MidiPitchWheelEvent
 * @see event.MidiAftertouchEvent
 * @see event.MidiChannelPressureEvent
 * @see event.MidiAllNotesOffEvent
 * @see event.MidiAllSoundOffEvent
 * @see event.MidiMetaEvent
 * @see event.MidiRawEvent
 */
export type MidiEvent =
  | event.MidiNoteOnEvent
  | event.MidiNoteOffEvent
  | event.MidiControllerEvent
  // event.MidiProgramChangeEvent |
  // event.MidiPitchWheelEvent |
  // event.MidiAftertouchEvent |
  // event.MidiChannelPressureEvent |
  // event.MidiAllNotesOffEvent |
  // event.MidiAllSoundOffEvent |
  // event.MidiMetaEvent |
  | event.MidiRawEvent;
