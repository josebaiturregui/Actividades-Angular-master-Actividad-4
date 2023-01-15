
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appRequiredInfo]'
})
export class RequiredInfoDirective  {
    
    constructor(private element:ElementRef, private renderer:Renderer2) { }
    
    
    @HostListener('input')
    onInput(){
      const initValue = this.element.nativeElement.value;
  
      if(!initValue){
  
          this.element.nativeElement.style.outlineColor='red';
          
         }else{
          
          this.element.nativeElement.style.outlineColor='';
        }
  
      }
  
  }
   
    
  

