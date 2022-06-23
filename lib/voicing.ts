import { Note, NoteIndex, NOTE_NAMES } from "../constants/Note";
import { Voicing, VOICINGNAMES } from "../constants/Voicing";

function generateBlockVoicingWithTopNote(note: Note): Note[] {
  return [{ noteIndex: NoteIndex.A0 }, { noteIndex: NoteIndex.C0 }];
}

export function generateVoicingWithTopNote(
  voicing: Voicing,
  note: Note
): Note[] {
  switch (voicing.name) {
    case VOICINGNAMES.blockVoicing:
      return generateBlockVoicingWithTopNote(note);
  }

  return [];
}
