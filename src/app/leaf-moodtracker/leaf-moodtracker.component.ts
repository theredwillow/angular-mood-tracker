import { Component, OnInit } from '@angular/core';
import {
  Month,
  DAILY_MOODS,
  HexColor,
  MOODS,
} from './leaf-moodtracker.fixtures';

@Component({
  selector: 'app-leaf-moodtracker',
  templateUrl: './leaf-moodtracker.component.html',
  styleUrls: ['./leaf-moodtracker.component.css'],
})
export class LeafMoodtrackerComponent implements OnInit {
  // FIXME Make these inputs
  dailyMoods: Month = DAILY_MOODS;
  /**
   * An array of seven hex-coded colors to be used to color the leaves.
   * With the first one being used as the "N/A", then the second to seventh ones being used as a scale from very happy to very sad.
   * */
  moods: HexColor[] = MOODS;

  constructor() {}

  ngOnInit(): void {}

  getMoodOfDay = (day: number): number => this.dailyMoods.days[day] || 0;
  getMoodColor = (moodNum: number): string =>
    this.moods[moodNum] || this.moods[0];
  getColorOfDay = (day: number): string =>
    this.getMoodColor(this.getMoodOfDay(day));
}
