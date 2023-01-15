import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

    constructor(private element:ElementRef, private renderer:Renderer2) { }
    
    @HostListener('mouseover')
    onhover():void {
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#991B1B');
      this.renderer.setStyle(this.element.nativeElement, 'font-size','25px' );
      this.renderer.setStyle(this.element.nativeElement, 'color','white' );
      this.renderer.setStyle(this.element.nativeElement, 'border-right-color','white' );
      this.renderer.setStyle(this.element.nativeElement, 'padding-right','5px' );
      this.renderer.setStyle(this.element.nativeElement, 'border-radius','3px' );
      this.renderer.setStyle(this.element.nativeElement, 'box-shadow','5px 10px 18px red');
      this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
        }
    @HostListener('mouseout')
    onMouseOut(){
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '');
      this.renderer.setStyle(this.element.nativeElement, 'color','' );
      this.renderer.setStyle(this.element.nativeElement, 'padding-right','5px' );
      this.renderer.setStyle(this.element.nativeElement, 'border-right-color','' );
      this.renderer.setStyle(this.element.nativeElement, 'font-size','' );
      this.renderer.setStyle(this.element.nativeElement, 'box-shadow','');
    }
  
}
