import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule } from '@angular/forms';

describe('Testando o RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [RequestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve instanciar o RequestComponent', () => {
    expect(component).toBeTruthy();
  });

  it("Deve chamar getUsers", () => {
    let spiedComponent = spyOn(component, 'getUsers').and.callThrough()
    component.getUsers()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
  })

  it("Deve criar um usuário postUsers", () => {
    let spiedComponent = spyOn(component, 'postUsers').and.callThrough()
    component.postUsers()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
  })

  it("Deve atualizar um usuário putUsers", () => {
    let spiedComponent = spyOn(component, 'putUsers').and.callThrough()
    const id = 1;
    component.putUsers(id)

    expect(spiedComponent).toHaveBeenCalledTimes(1)
  })

  it("Deve deletar um usuário deleteUser", () => {
    let spiedComponent = spyOn(component, 'deleteUser').and.callThrough()
    const id = 1;
    component.deleteUser(id)

    expect(spiedComponent).toHaveBeenCalledTimes(1)
  })

  it("Deve chamar getUsersWithHeaders", () => {
    let spiedComponent = spyOn(component, 'getUsersWithHeaders').and.callThrough()
    component.getUsersWithHeaders()
    expect(spiedComponent).toHaveBeenCalledTimes(1)
  })

  it("Deve listar usuário por id getUsersById", () => {
    let spiedComponent = spyOn(component, 'getUsersById').and.callThrough()
    const id = 1;
    component.getUsersById(id)

    expect(spiedComponent).toHaveBeenCalledTimes(1)
  })
});
