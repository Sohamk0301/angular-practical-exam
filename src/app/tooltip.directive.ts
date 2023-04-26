import { Directive,ElementRef, Input, OnInit  } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input() appTooltip: string;
  
  constructor(private elementRef: ElementRef) { }
  
  ngOnInit() {
    new Tooltip(this.elementRef.nativeElement, {
      title: this.appTooltip,
      placement: 'top',
      trigger: 'hover'
    });
  }

}