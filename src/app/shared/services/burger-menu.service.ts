import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgerMenuService {
  $toggle_state: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor() { }
}
