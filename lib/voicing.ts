import { Key } from "../constants/Key";
import { Note, NoteIndex, NOTE_NAMES } from "../constants/Note";
import { VoicingName, voicingTable } from "../constants/Voicing";

export function generateVoicingWithTopNote(
  key: Key,
  voicingName: VoicingName,
  topNote: Note
): Note[] {
  const notes = voicingTable[voicingName][topNote.noteIndex % 7];
  let result: Note[] = [];

  notes.forEach((note) => {
    result.push({ noteIndex: note, length: 4 });
  });

  return result;
}
