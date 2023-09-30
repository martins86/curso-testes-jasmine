import { Component } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-asynchronous-component',
  templateUrl: './asynchronous-component.component.html',
  styleUrls: ['./asynchronous-component.component.scss']
})
export class AsynchronousComponentComponent {
  data: any;
  dataPromise: any;
  isLogged: any;
  name!: string;
  constructor(private http: HttpService) { }

  getUsers() {
    this.http.getUsers().subscribe(res => {
      this.data = res;
    })
  }

  getUsersWithPromise() {
    this.http.getUsersWithPromise().then(res => {

      this.dataPromise = res;
    })
  }

  isAuthenticated() {
    this.http.isAuthenticated().then(res => {
      this.isLogged = res;
    })
  }

  defineValue() {
    this.name = 'Fulano';
    setTimeout(() => {
      this.name = 'Felicia'
    }, 100)
  }
}
