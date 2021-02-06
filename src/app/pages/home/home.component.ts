import { Component, OnInit } from '@angular/core';

import { BurgerMenuService } from 'src/app/shared/services/burger-menu.service';
import { sidenav } from '../../shared/utils/navs'
import { popular_tags } from '../../shared/mocks/popular-tags'
import { stories } from 'src/app/shared/mocks/stories.mock';

import { Story } from 'src/app/shared/models/story.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggle_state: boolean = null
  nav_items = sidenav
  popular_tags = popular_tags
  stories: Story[] = stories

  constructor(
    private burgerMenuService: BurgerMenuService
  ) { }

  ngOnInit(): void {
    this.burgerMenuService.$toggle_state.subscribe(v => {
      this.toggle_state = v
    })
  }

  hideMenu() {
    this.burgerMenuService.$toggle_state.next(false)
    this.toggle_state = false
  }

}
