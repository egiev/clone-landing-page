import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTags]'
})
export class TagsDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') mouseover() {
    let btn_element = this.el.nativeElement.querySelector('button') 
    this.renderer.removeClass(btn_element, 'sr-only')
  }
  
  @HostListener('mouseleave') mouseleave() {
    let btn_element = this.el.nativeElement.querySelector('button')
    this.renderer.addClass(btn_element, 'sr-only')
  }

}
