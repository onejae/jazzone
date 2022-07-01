export const Keys = [
  {
    name: "C",
    idx: 0,
  },
  {
    name: "Db",
    idx: 1,
  },
  {
    name: "D",
    idx: 2,
  },
  {
    name: "Eb",
    idx: 3,
  },
  {
    name: "F",
    idx: 4,
  },
  {
    name: "Gb",
    idx: 5,
  },
  {
    name: "G",
    idx: 6,
  },
  {
    name: "Ab",
    idx: 7,
  },
  {
    name: "A",
    idx: 8,
  },
  {
    name: "Ab",
    idx: 9,
  },
  {
    name: "B",
    idx: 10,
  },
];

export type KeyName =
  | "C"
  | "Db"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "Ab"
  | "A"
  | "Bb"
  | "B";

export interface Key {
  name: string;
  idx: number;
}
