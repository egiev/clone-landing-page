import { Component, OnInit } from '@angular/core';

// services
import { BurgerMenuService } from 'src/app/shared/services/burger-menu.service';

// models
import { SideNav } from 'src/app/shared/models/sidenav.model';
import { Tag } from 'src/app/shared/models/tag.model';
import { Story } from 'src/app/shared/models/story.model';
import { Topic } from 'src/app/shared/models/topic.model';

// mocks
import { sidenav } from '../../shared/utils/navs'
import { popular_tags } from '../../shared/mocks/popular-tags.mock'
import { stories } from 'src/app/shared/mocks/stories.mock';
import { topics } from 'src/app/shared/mocks/topics.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggle_state: boolean = null

  nav_items: SideNav[] = sidenav
  popular_tags: Tag[] = popular_tags
  stories: Story[] = stories
  topics: Topic[] = topics

  constructor(
    private burgerMenuService: BurgerMenuService
  ) { }

  ngOnInit(): void {
    this.burgerMenuService.$toggle_state.subscribe(v => {
      this.toggle_state = v
    })

    // integration of api
  }

  hideMenu() {
    this.burgerMenuService.$toggle_state.next(false)
    this.toggle_state = false
  }

}
