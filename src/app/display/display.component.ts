import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  tablelist = [
    { topic: 'String Interpolation', complete: 'done' },
    { topic: 'property', complete: 'done' },
    { topic: 'Event', complete: 'ongoing' },
    { topic: 'two-way-binding', complete: 'ongoing' },
    { topic: 'directives', complete: 'learning' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
