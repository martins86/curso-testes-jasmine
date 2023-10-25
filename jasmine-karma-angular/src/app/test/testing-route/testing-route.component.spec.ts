import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TestingRouteComponent } from './testing-route.component';

describe('Testando o TestingRouteComponent', () => {
  let component: TestingRouteComponent;
  let fixture: ComponentFixture<TestingRouteComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingRouteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestingRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
  });

  it('Deve instanciar o TestingRouteComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Deve navegar para url passada', () => {
    let route = 'dashboad'
    spyOn(router, 'navigate')

    component.navigateUrl(route)

    expect(router.navigate).toHaveBeenCalledWith(['/dashboad'])
  });

  it('Deve recarregar a rota atual', () => {
    let route = 'dashboad'
    spyOn(router, 'navigate')

    component.reloadPage(route)

    expect(router.navigate).toHaveBeenCalledWith(['/dashboad'])
  });
});
