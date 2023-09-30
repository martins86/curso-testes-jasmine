import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('Testando o HttpService', () => {
  let service: HttpService;
  let htppTestingController: HttpTestingController;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    htppTestingController = TestBed.inject(HttpTestingController)
    url = 'http://localhost:3000';
  });

  it('Deve instanciar o HttpService', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar login', () => {
    const response = [
      {
        "id": 1,
        "name": "Fulano",
        "email": "fulano@gmail.com",
        "age": 30
      }
    ];
    const user = {
      "name": "Fulano",
      "email": "fulano@gmail.com",
      "age": 30
    }
    service.login(user).subscribe()
    const request = htppTestingController.expectOne(`${url}/login`)
    service.login(user).subscribe(res => {
      expect(res).toBe(response)
    })

    expect(request.request.method).toBe('POST')
    expect(request.request.url).toBe(`${url}/login`)
    request.flush(response)

  });

  it('Deve realizar chamada GET por id', () => {
    const id = 3;
    const response = { name: 'Fulano', email: 'fulano@gmail.com', age: 30 }

    service.getUsersById(id).subscribe(res => {
      expect(res).toBe(response)
    })
    const request = htppTestingController.expectOne(`${url}/users/${id}`)

    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${url}/users/${id}`)

    request.flush(response)

  });

  it('Deve realizar chamada GET para obter usuários', () => {
    const response = [
      {
        "id": 1,
        "name": "Carlos",
        "email": "carlos@gmail.com",
        "age": 30
      },
      {
        "id": 2,
        "name": "Julia",
        "email": "julia@gmail.com",
        "age": 18
      },
      {
        "id": 3,
        "name": "Marina",
        "email": "marina@gmail.com",
        "age": 22
      }
    ];
    service.getUsers().subscribe();
    const request = htppTestingController.expectOne(`${url}/users`)
    service.getUsers().subscribe(res => {
      expect(res).toBe(response)
    })

    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${url}/users`)
    request.flush(response)

  });

  it('Deve realizar chamada GET com headers para obter usuários', () => {
    const response = [
      {
        "id": 1,
        "name": "Carlos",
        "email": "carlos@gmail.com",
        "age": 30
      },
      {
        "id": 2,
        "name": "Julia",
        "email": "julia@gmail.com",
        "age": 18
      },
      {
        "id": 3,
        "name": "Marina",
        "email": "marina@gmail.com",
        "age": 22
      }
    ];
    service.getUsersWithPromise().then(() => { });
    const request = htppTestingController.expectOne(`${url}/users`)
    service.getUsersWithPromise().then(res => {
      expect(res).toBe(response)
    })

    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${url}/users`)
    request.flush(response)

  });

  it('Deve retornar que usuário esta autenticado', (done) => {
    const isAuth = true;

    service.isAuthenticated().then(res => {
      expect(res).toBe(isAuth);
      done();
    });
  });

  it('Deve gerar erro ao obter usuários', () => {
    service.getUsers().subscribe({
      error: (erro) => {
        expect(erro.status).toBe(500)
      }
    });

    const request = htppTestingController.expectOne(`${url}/users`)

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`)

    request.flush(500, {
      status: 500,
      statusText: 'Ero de Rede'
    })
  });

  it('Deve fazer requisição POST para cadastrar usuário', () => {
    const user = { "id": 0.18013741332928745, "name": "Neide", "email": "neide@gmail.com", "age": "40" };
    const response = {
      "id": 0.18013741332928745,
      "name": "Neide",
      "email": "neide@gmail.com",
      "age": "40"
    }
    service.postUser(user).subscribe(res => {
      expect(res).toBe(response)
    })

    const request = htppTestingController.expectOne(`${url}/users`)
    expect(request.request.method).toBe('POST')
    request.flush(response)
  });

  it('Deve atualizar usuário PUT', () => {
    const id = 1;
    const user = { "name": "Rafeal", "email": "rafael@gmail.com", "age": "22" }
    const response = { "name": "Rafeal", "email": "rafael@gmail.com", "age": "22" }

    service.putUser(id, user).subscribe(res => {
      expect(res).toBe(response)
    })

    const request = htppTestingController.expectOne(`${url}/users/${id}`)
    expect(request.request.method).toBe('PUT')
    expect(request.request.url).toBe(`${url}/users/${id}`)


    request.flush(response)

  });

  it('Deve excluir usuário DELETE', () => {
    const id = 2;
    const response = {};
    service.deleteUser(id).subscribe(res => {
      expect(res).toBe(response)
    })
    const request = htppTestingController.expectOne(`${url}/users/${id}`)

    expect(request.request.method).toBe('DELETE')

    expect(request.request.url).toBe(`${url}/users/${id}`)

    request.flush(response)

  });

  it('Deve conter headers na requisição', () => {
    service.getUserWithHeaders().subscribe();
    const request = htppTestingController.expectOne(`${url}/users`)

    expect(request.request.headers.has('content-type')).toEqual(true)
    expect(request.request.headers.has('Authorization')).toEqual(true)
  });
});
