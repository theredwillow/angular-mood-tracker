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
    7: 5,
    8: 5,
    9: 5,
    10: 5,
    11: 5,
    12: 5,
    13: 5,
    14: 5,
    15: 5,
    16: 5,
    17: 5,
    18: 5,
    19: 5,
    20: 5,
    21: 5,
    22: 5,
    23: 5,
    24: 5,
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
