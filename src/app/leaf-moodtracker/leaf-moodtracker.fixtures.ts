export interface Month {
  month: string;
  days: any;
}

export const DAILY_MOODS = {
  month: 'January',
  days: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 1,
    8: 2,
    9: 3,
    10: 4,
    11: 5,
    12: 6,
    13: 1,
    14: 2,
    15: 3,
    16: 4,
    17: 5,
    18: 6,
    19: 1,
    20: 2,
    21: 3,
    22: 4,
    23: 5,
    24: 6,
    25: 1,
    26: 2,
    27: 3,
    28: 4,
    29: 5,
  }
} as Month;

export type HexColor = `#${string}`;
export const MOODS: HexColor[] = [
  '#78866b',
  '#06410e',
  '#096115',
  '#0c821c',
  '#0fa323',
  '#12c32a',
  '#15e431',
];
