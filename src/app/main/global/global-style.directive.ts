import { Directive, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appGlobalStyle]'
})
export class GlobalStyleDirective {

  constructor(private readonly router: Router, el: ElementRef) {
    this.router.events.subscribe((data: any) => {
      if (data instanceof NavigationEnd) {
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
    if (url.includes('/contact')) {
      return 'bg-dark';
    } else if (url.includes('/about')) {
      return 'bg-danger';
    } else {
      return 'bg-info';
    }
  }

}
