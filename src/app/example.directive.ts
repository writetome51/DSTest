import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
    selector: '[appExample]'
})
export class ExampleDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.setBgColor('white');
    }


    setBgColor(color) {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'backgroundColor',
            color
        );
    }


    @HostListener('mouseenter') onMouseEnter() {
        this.setBgColor('yellow');
    }


    @HostListener('mouseleave') onMouseLeave() {
        this.setBgColor('white');
    }


}
