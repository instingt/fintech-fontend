import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {
  @HostBinding('style.transform') transform: string;
  @HostBinding('style.transition') transition = 'transform 0.3s linear';

  @HostListener('mouseenter')
  hover() {
    this.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave')
  blur() {
    this.transform = '';
  }
}
