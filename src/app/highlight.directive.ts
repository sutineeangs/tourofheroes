import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  // @Input() highlightColor: string;
  @Input('myHighlight') highlightColor: string;

  @Input() defaultColor: string;

  constructor(private el: ElementRef) { 
    // this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onmouseenter(){
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight(null);
  }

}
