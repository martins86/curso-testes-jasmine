import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'src/app/shared/interfaces/menu-item';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: User;

  menuItems: MenuItem[] = [
    { label: 'Item 1', value: 'item-1' },
    { label: 'Item 2', value: 'item-2' },
    { label: 'Item 3', value: 'item-3' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = {
      name: 'Name Fulano',
      email: 'name_fulano@gmail.com',
      password: '091011'
    };
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`])
  }
}
