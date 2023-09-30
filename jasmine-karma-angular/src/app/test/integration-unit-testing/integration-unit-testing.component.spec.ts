import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationUnitTestingComponent } from './integration-unit-testing.component';

describe('Testando o IntegrationUnitTestingComponent', () => {
  let component: IntegrationUnitTestingComponent;
  let fixture: ComponentFixture<IntegrationUnitTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationUnitTestingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IntegrationUnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o IntegrationUnitTestingComponent', () => {
    expect(component).toBeTruthy();
  });
});
