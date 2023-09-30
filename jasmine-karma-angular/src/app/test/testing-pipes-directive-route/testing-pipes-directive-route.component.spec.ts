import { HttpPipe } from './../../shared/pipes/replace-http/http.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPipesDirectiveRouteComponent } from './testing-pipes-directive-route.component';

describe('Testando o TestingPipesDirectiveRouteComponent', () => {
  let component: TestingPipesDirectiveRouteComponent;
  let fixture: ComponentFixture<TestingPipesDirectiveRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingPipesDirectiveRouteComponent, HttpPipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestingPipesDirectiveRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o TestingPipesDirectiveRouteComponent', () => {
    expect(component).toBeTruthy();
  });
});
