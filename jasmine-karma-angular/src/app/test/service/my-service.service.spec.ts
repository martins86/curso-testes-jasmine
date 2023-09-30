import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { MyServiceService } from './my-service.service';

@Injectable()
class MyServiceMock extends MyServiceService {
  response = [
    {
      "name": "Fulano 2",

      "email": "fulano@gmail.com",
      "age": "30",
      "id": 1
    },
    {
      "id": 3,
      "name": "Ciclano",
      "email": "ciclano@gmail.com",
      "age": 22
    },
    {
      "id": 4,
      "name": "Ciclano",
      "email": "ciclano@gmail.com",
      "age": 22
    },
    {
      "id": 0.8230837961873159,
      "name": "Fulano ",
      "email": "fulano@gmail.com",
      "age": "30"
    }
  ];
  override getUsers() {
    return of(this.response)
  }
}

describe('Testando o MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MyServiceService,
          useClass: MyServiceMock
        }
      ]
    });
    service = TestBed.inject(MyServiceService);
  });

  it('Deve instanciar o MyServiceService', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada HTTP', () => {
    const response = [
      {
        "name": "Fulano 2",
        "email": "fulano@gmail.com",
        "age": "30",
        "id": 1
      },
      {
        "id": 3,
        "name": "Ciclano",
        "email": "ciclano@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Ciclano",
        "email": "ciclano@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Fulano ",
        "email": "fulano@gmail.com",
        "age": "30"
      }
    ];
    service.getUsers().subscribe(res => {
      expect(res).toEqual(response)
    })
  })

});
