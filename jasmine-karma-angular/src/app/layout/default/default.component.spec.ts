import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DefaultComponent } from './default.component';

describe('Testando o DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o DefaultComponent', () => {
    expect(component).toBeTruthy();
  });
});
