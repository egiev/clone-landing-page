import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';
import { BurgerMenuService } from '../services/burger-menu.service';

@Directive({
  selector: '[appBurgerMenu]'
})
export class BurgerMenuDirective {
  @HostBinding('class.show') isOpen = false

  constructor(
    private burgerMenuService: BurgerMenuService
  ) { }
  
  @HostListener('click') toggleMenu() {
    this.burgerMenuService.$toggle_state.next(true)
  }
}
