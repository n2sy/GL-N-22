import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bgColor = 'pink';
  @HostBinding('style.color') cl = 'blue';

  constructor() {}

  @HostListener('mouseenter') mouseenter() {
    this.bgColor = 'grey';
    this.cl = 'white';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'white';
    this.cl = 'black';
  }
}
