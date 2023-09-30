import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractComponent } from './extract.component';

describe('Testando o ExtractComponent', () => {
  let component: ExtractComponent;
  let fixture: ComponentFixture<ExtractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtractComponent]
    });
    fixture = TestBed.createComponent(ExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o ExtractComponent', () => {
    expect(component).toBeTruthy();
  });
});
