import { Key } from "../constants/Key";
import { Note, NoteIndex, NOTE_NAMES } from "../constants/Note";
import { Voicing, VOICINGNAMES } from "../constants/Voicing";

function generateBlockVoicingWithTopNote(key: Key, note: Note): Note[] {
  return [{ noteIndex: NoteIndex.A0 }, { noteIndex: NoteIndex.C0 }];
}

export function generateVoicingWithTopNote(
  key: Key,
  voicing: Voicing,
  topNote: Note
): Note[] {
  switch (voicing.name) {
    case VOICINGNAMES.blockVoicing:
      return generateBlockVoicingWithTopNote(key, topNote);
  }

  return [];
}
