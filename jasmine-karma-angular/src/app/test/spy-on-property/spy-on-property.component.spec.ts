import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyOnPropertyComponent } from './spy-on-property.component';

describe('Testando o SpyOnPropertyComponent', () => {
  let component: SpyOnPropertyComponent;
  let fixture: ComponentFixture<SpyOnPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpyOnPropertyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpyOnPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o SpyOnPropertyComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar a mensagem correta', () => {
    const mensagem = 'Olá, Mundo!';

    spyOnProperty(component, 'message', 'get').and.returnValue(mensagem);

    expect(component.message).toEqual(mensagem);

  })

});
