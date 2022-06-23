import { Voicing, VOICINGNAMES } from "../constants/Voicing";
import { Note } from "../constants/Note";

export function noteToAbcjsString(notes: Note[]) {
  notes.forEach(note => {
    console.log(note)
  })

  return ''
}
