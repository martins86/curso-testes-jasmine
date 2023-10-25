import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing-route',
  templateUrl: './testing-route.component.html',
  styleUrls: ['./testing-route.component.scss']
})
export class TestingRouteComponent {

  constructor(private router: Router) { }

  navigateUrl(url: string): void {
    this.router.navigate([`/${url}`]);
  }

  reloadPage(): void {
    const url = this.router.url;
    this.router.navigateByUrl(url);
  }

}
