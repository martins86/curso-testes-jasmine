import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';


describe('Testando o AuthGuard', () => {
  let authGuard: AuthGuard;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/login' };
  let routerMock = { navigate: jasmine.createSpy('navigate') }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock }
      ],
      imports: [RouterTestingModule]
    });
    authGuard = TestBed.inject(AuthGuard);

    localStorage.removeItem('token');
  });

  it('Deve instanciar o AuthGuard', () => {
    expect(authGuard).toBeTruthy();
  });

  it('Deve redirecionar usuário para pagina de login quando não tiver logado', () => {
    // Arrange & Act
    const response = authGuard.canActivate(routeMock, routeStateMock);

    // Assert
    expect(response).toEqual(false)
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login'])
  })

  it('Deve conceder acesso quando usuário tiver token válido', () => {
    // Arrange
    const token = 'Any_ToKen!123';
    localStorage.setItem('token', token)

    // Act
    const response = authGuard.canActivate(routeMock, routeStateMock);

    // Assert
    expect(response).toEqual(true)
  })

});
