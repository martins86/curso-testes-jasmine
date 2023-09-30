import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFormComponent } from './fill-form.component';
import { By } from '@angular/platform-browser';

describe('Testando o FillFormComponent', () => {
  let component: FillFormComponent;
  let fixture: ComponentFixture<FillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FillFormComponent],
      imports: [ReactiveFormsModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o FillFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Deve prencher campos do formulario', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement
    input.value = 'Fulano'
    input.dispatchEvent(new Event('input'))


    expect(input.value).toBe('Fulano')
  })

  it('Deve preencher formulário', () => {
    component.name = 'Fulano'
    component.fillForm()

    fixture.detectChanges();

    expect(component.form.controls['name'].value).toBeDefined();
  })

});
