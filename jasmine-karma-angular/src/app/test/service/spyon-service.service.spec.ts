import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SpyonServiceService } from './spyon-service.service';

describe('Testando o SpyonServiceService', () => {
  let service: SpyonServiceService;
  const logger = jasmine.createSpy("log")
  const status = jasmine.createSpyObj('service', ['name', 'age', 'email'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it('Deve instanciar o SpyonServiceService', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar uma lista de usuários', () => {
    const response = [
      { name: 'Fulano', age: 30, email: 'Fulanodev.silva@gmail.com' },
      { name: 'Jose', age: 40, email: 'jose.silva@gmail.com' },
      { name: 'Maria', age: 22, email: 'maria.silva@gmail.com' },
    ]

    spyOn(service, 'getUsers').and.returnValue(of(response))

    service.getUsers().subscribe(res => {
      expect(res).toEqual(response)
    })
  })

  it('Deve criar método com jasmine.createSpy', () => {
    logger('Loguei no sistema')

    expect(logger).toHaveBeenCalledTimes(1)
    expect(logger).toHaveBeenCalledWith('Loguei no sistema')
  })

  it('De criar métos com jasmine.createSpyObj', () => {
    status.name('Fulano')
    status.email('Fulanodev.silva@gmail.com')
    status.age('30')

    expect(status.name).toHaveBeenCalledTimes(1)
    expect(status.name).toHaveBeenCalledWith('Fulano')
    expect(status.email).toHaveBeenCalledWith('Fulanodev.silva@gmail.com')
    expect(status.email).toHaveBeenCalledTimes(1)
    expect(status.age).toHaveBeenCalledTimes(1)
    expect(status.age).toHaveBeenCalledWith('30')
  })
});
