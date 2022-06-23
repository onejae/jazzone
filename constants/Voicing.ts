export const VOICINGNAMES = {
  blockVoicing: "block voicing",
  drop2nd: "drop2nd",
};

export const Voicings = [
  { name: VOICINGNAMES.blockVoicing, idx: 0 },
  { name: VOICINGNAMES.drop2nd, idx: 1 },
];

export interface Voicing {
  name: string;
  idx: number;
}
