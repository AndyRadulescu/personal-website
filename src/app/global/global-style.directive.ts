import { Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appGlobalStyle]'
})
export class GlobalStyleDirective {

  constructor(private readonly router: Router, el: ElementRef) {
    this.router.events.subscribe((data: any) => {
      if (data.constructor.name === 'NavigationEnd') {
        const color = this.getColorAccordingToRoute(data.url);
        (el.nativeElement as HTMLElement).classList.value
                                         .split(' ')
                                         .filter(className => className.includes('bg-') && className !== color)
                                         .forEach(className => el.nativeElement.classList.remove(className));
        el.nativeElement.classList.add(color);
      }
    });
  }

  private getColorAccordingToRoute(url: string): string {
    switch (url) {
      case '/contact':
        return 'bg-dark';
      case '/about':
        return 'bg-danger';
      default:
        return 'bg-info';
    }
  }

}
