import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input('story') story: Story

  constructor() { }

  ngOnInit(): void {
    console.log(this.story)
  }

}
