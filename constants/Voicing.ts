export type VoicingIds = {
  blockvoicing: VoicingName;
  drop2nd: VoicingName;
};

export type VoicingName = "blockvoicing" | "drop2nd";

export type ChordName = "Maj7" | "7" | "m7" | "dim7" | "sus4" | "aug" | "b9b13";

type VoicingTable = {
  [key in VoicingName]: { [key: number]: number[] };
};

export const voicingTable: VoicingTable = {
  blockvoicing: {
    1: [3, 5, 6, 1],
    2: [4, 5.5, 7, 2],
    3: [5, 6, 1, 3],
    4: [5.5, 7, 2, 4],
    5: [6, 1, 3, 5],
    5.5: [7, 2, 4, 5.5],
    6: [1, 3, 5, 6],
    7: [2, 4, 5.5, 7],
  },
  drop2nd: { 1: [6, 3, 5, 1] },
};
