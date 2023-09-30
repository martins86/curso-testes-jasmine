import { HttpService } from './../service/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { AsynchronousComponentComponent } from './asynchronous-component.component';

describe('Testando o AsynchronousComponentComponent', () => {
  let component: AsynchronousComponentComponent;
  let fixture: ComponentFixture<AsynchronousComponentComponent>;
  let http: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsynchronousComponentComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpService)
  });

  it('Deve instanciar o AsynchronousComponentComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Deve fazer request para obter lista de usuários', () => {
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

    spyOn(http, 'getUsers').and.returnValue(of(response))

    component.getUsers();

    expect(component.data).toEqual(response)
  })

  it('Deve fazer chamada para obter lista de usuários com promise', async () => {
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

    spyOn(http, 'getUsersWithPromise').and.returnValue(Promise.resolve(response));

    await component.getUsersWithPromise();

    expect(component.dataPromise).toEqual(response);
  })

  it('Deve logar usuário', (done: DoneFn) => {
    const loggedOut = fixture.debugElement.query(By.css('.logged-out')).nativeElement

    let spy = spyOn(http, 'isAuthenticated').and.returnValue(Promise.resolve(true))

    component.isAuthenticated()

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const logged = fixture.debugElement.query(By.css('.logged')).nativeElement
      expect(logged.textContent).toBe('Logado')
      done();

    })
    expect(loggedOut.textContent).toBe('Deslogado')
  })

  it('Deve logar usuário com whenStable', async () => {
    const loggedOut = fixture.debugElement.query(By.css('.logged-out')).nativeElement

    expect(loggedOut.textContent).toBe('Deslogado')

    spyOn(http, 'isAuthenticated').and.returnValue(Promise.resolve(true))

    component.isAuthenticated()

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const logged = fixture.debugElement.query(By.css('.logged')).nativeElement
      expect(logged.textContent).toBe('Logado')

    })
  })

  it('Deve setar nome', fakeAsync(() => {
    component.defineValue()

    tick(100)
    expect(component.name).toBe('Felicia')
  }))

});
