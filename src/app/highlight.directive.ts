import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  @Input('myHighlight') highlightColor: string;

  constructor(private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }





}
