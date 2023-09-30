import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggerTestsComponent } from './debugger-tests.component';

describe('Testando o DebuggerTestsComponent', () => {
  let component: DebuggerTestsComponent;
  let fixture: ComponentFixture<DebuggerTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebuggerTestsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DebuggerTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o DebuggerTestsComponent', () => {
    debugger;
    let data = { name: 'Fulano' }
    expect(component).toBeTruthy();
  });
});
