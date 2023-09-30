import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubServiceComponent } from './stub-service.component';

describe('Testando o StubServiceComponent', () => {
  let component: StubServiceComponent;
  let fixture: ComponentFixture<StubServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StubServiceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o StubServiceComponent', () => {
    expect(component).toBeTruthy();
  });
});
