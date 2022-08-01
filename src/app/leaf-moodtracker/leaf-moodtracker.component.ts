import { Component, OnInit } from '@angular/core';

export interface Month {
  month: string;
  days: any;
}

// FIXME Make this an input
const dailyMoods = {
  month: 'January',
  days: {
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
    7: 6,
    8: 5,
    9: 4,
    10: 3,
    11: 2,
    12: 1,
    13: 6,
    14: 5,
    15: 4,
    16: 3,
    17: 2,
    18: 1,
    19: 6,
    20: 5,
    21: 4,
    22: 3,
    23: 2,
    24: 1,
    25: 5,
    26: 5,
    27: 5,
    28: 5,
    29: 5,
    30: 5,
    31: 5,
  }
} as Month;

export interface Mood {
  num: number;
  color: string;
}

const MOODS: Mood[] = [
  {
    num: 1,
    color: '#06410e'
  },
  {
    num: 2,
    color: '#096115'
  },
  {
    num: 3,
    color: '#0c821c'
  },
  {
    num: 4,
    color: '#0fa323'
  },
  {
    num: 5,
    color: '#12c32a'
  },
  {
    num: 6,
    color: '#15e431'
  }
];

@Component({
  selector: 'app-leaf-moodtracker',
  templateUrl: './leaf-moodtracker.component.html',
  styleUrls: ['./leaf-moodtracker.component.css']
})
export class LeafMoodtrackerComponent implements OnInit {
  dailyMoods: Month = dailyMoods;
  MOODS: Mood[] = MOODS;

  constructor() { }

  ngOnInit(): void {
  }

  getMoodOfDay = (day: number): number => this.dailyMoods.days[day];
  getMoodColor = (moodNum: number): string => this.MOODS?.find(({num}) => num === moodNum)?.color || 'BLACK';
  getColorOfDay = (day: number): string => this.getMoodColor(this.getMoodOfDay(day));
}
