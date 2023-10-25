import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing-route',
  templateUrl: './testing-route.component.html',
  styleUrls: ['./testing-route.component.scss']
})
export class TestingRouteComponent {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){ return false; }
  }

  navigateUrl(url: string): void {
    this.router.navigate([`/${url}`]);
  }

  reloadPage(): void {
    const url = this.router.url;
    this.router.navigated = false;
    this.router.navigate([url]);

    // ou
    // mudar no route - RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' })
    this.router.onSameUrlNavigation ='reload'

    // ou

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([url]));
  }
}
