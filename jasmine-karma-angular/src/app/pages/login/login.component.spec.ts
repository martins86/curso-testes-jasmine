import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Testando o LoginComponent', () => {
  let router: Router;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [LoginComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('Deve instanciar o LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testando o ngOnInit', () => {
    it('Deve definir valor para user', () => {
      // Act
      component.ngOnInit()

      // Assert
      expect(component.user).toBeDefined();
    });
  });

  describe('Testando o goTo', () => {
    it('Deve navegar para url passada', () => {
      // Arrange
      let route = 'dashboad'
      spyOn(router, 'navigate');

      // Act
      component.goTo(route);

      // Assert
      expect(router.navigate).toHaveBeenCalledWith(['/dashboad']);
    });
  });
});
