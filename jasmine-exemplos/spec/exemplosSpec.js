describe('Exemplo do um Suíte de Testes - titulo informativo e descritivo do teste:', () => {
    it('Deve garantir que 1 + 1 = 2.', () => {
        // Afirma
        expect(1 + 1).toBe(2)
    });
});

describe('Exemplos de Comparadores - comparando valores e ou retornos:', () => {

    // Comparador de parâmetro igual... ==
    describe('Comparador toBe:', () => {
        it('Deve validar o uso do toBe.', () => {
            // Organiza
            const objetoUm = { value: true };
            const objetoDois = { value: true };

            // Afirma
            expect(true).toBe(true);               // true === true (valor e tipo).
            expect('Teste').toBe('Teste');         // 'Teste' === 'Teste' (valor e tipo).
            expect(objetoUm).not.toBe(objetoDois); // tem o mesmo valor mas não é o mesmo.
        });
    });

    // Comparador de parâmetro e valor igual... ===
    describe('Comparador toEqual:', () => {
        it('Deve validar o uso do toEqual.', () => {
            // Organiza
            const objetoUm = { value: true };
            const objetoDois = { value: true };

            // Afirma
            expect(true).toEqual(true);           // valor true é igual a true, true == true
            expect(objetoUm).toEqual(objetoDois); // objetoUm == objetoDois
        });
    });

    // Comparador de parâmetro ou array que contem...
    describe('Comparador toContain:', () => {
        it('Deve validar o uso do toContain.', () => {
            // Organiza
            let texto = 'Hoje é uma Segunda';
            let frutas = ['banana', 'laranja', 'manga'];

            // Afirma
            expect(texto).toContain('Segunda');
            expect(frutas).toContain('manga');

            expect(frutas).not.toContain('uva');
        });
    });

    describe('Comparador toMatch:', () => {
        it('Deve validar o uso do toMatch.', () => {
            // Organiza
            const texto = 'Teste com Jasmine';

            // Afirma
            expect(texto).toMatch('Jasmine');             // existe um 'Jasmine' em texto
            expect(texto).toMatch(/jasmine/i);            // existe um 'Jasmine' ou 'jasmine' em texto
            expect('12345-123').toMatch(/^\d{5}-\d{3}$/); // expressão regular:  ^ - começa, \d - digito, {5} - cinco, - tem um hifen, $ - termina
        });
    });

    // Comparador de parâmetro nula...
    describe('comparador toBeNull:', () => {
        it('Deve validar o uso do toBeNull.', () => {
            // Organiza
            const objeto = null;
            let vazio;
            let numero = 10;

            // Afirma
            expect(objeto).toBeNull();     // o objeto esta definido como null

            expect(vazio).not.toBeNull();  // o vazio não esta definido como null
            expect(numero).not.toBeNull(); // o numero não esta definido como null
        });
    });

    // Comparador de parâmetro definida...
    describe('Comparador toBeDefined:', () => {
        it('Deve validar o uso do toBeDefined.', () => {
            // Organiza
            const a = 10;

            // Afirma
            expect(a).toBeDefined();    // a esta definida
            expect(null).toBeDefined();  // nulo é uma definição
            expect(NaN).toBeDefined();   // náo é um numero é uma definição
        });
    });

    // Comparador de parâmetro indefinida...
    describe('Comparador toBeUndefined:', () => {
        it('Deve validar o uso do toBeUndefined.', () => {
            // Organiza
            let texto;
            let objeto = { value: true }

            // Afirma
            expect(texto).toBeUndefined();             // a esta indefinida
            expect(objeto.message).toBeUndefined();    // objeto.message esta indefinida
        });
    });

    // Comparador de parâmetro válida...
    describe('Comparador toBeTruthy:', () => {
        it('Deve validar o uso do toBeTruthy.', () => {
            // Organiza
            let a = 10;

            // Afirma
            expect(a).toBeTruthy();
            expect('Teste').toBeTruthy();
            expect(true).toBeTruthy();
        });
    });

    // Comparador de parâmetro inválida...
    describe('Comparador toBeFalsy:', () => {
        it('Deve validar o uso do toBeFalsy.', () => {
            // Organiza
            let a = undefined;
            let b = 0;
            let c = '';
            let d = null;
            let e = NaN;
            let f;

            // Afirma
            expect(a).toBeFalsy();
            expect(b).toBeFalsy();
            expect(c).toBeFalsy();
            expect(d).toBeFalsy();
            expect(e).toBeFalsy();
            expect(f).toBeFalsy();
            expect(false).toBeFalsy();
        });
    });

    // Comparador de exceção de erro sem validações...
    describe('Comparador toThrow:', () => {
        it('Deve validar o uso do toThrow.', () => {
            // Organiza
            const semErro = (numero) => { return numero * 10 };
            const comErro = () => { return numero * 10 };

            // Afirma
            expect(semErro).not.toThrow();
            expect(comErro).toThrow();
        });
    });

    // Comparador de exceção de erro e validações...
    describe('Comparador toThrowError:', () => {
        it('Deve validar o uso do toThrowError.', () => {
            // Organiza
            let calculoDobro = (numero) => {
                if (numero <= 0) {
                    throw new TypeError('O número deve ser maior que 0.');
                }
                return numero * numero;
            };

            // Afirma
            expect(() => { calculoDobro(0) }).toThrowError(TypeError);
            expect(() => { calculoDobro(0) }).toThrowError(TypeError, 'O número deve ser maior que 0.');
            expect(() => { calculoDobro(0) }).toThrowError(/maior que 0/);

            expect(() => { calculoDobro(1) }).not.toThrowError();
        });
    });

    // Comparador de valor menor que...
    describe('Comparador toBeLessThan:', () => {
        it('Deve validar o uso do toBeLessThan.', () => {
            // Organiza
            const PI = 3.1415;
            let numero = 2;

            // Afirma
            expect(numero).toBeLessThan(PI);  // numero é menor que PI
            expect('1.2').toBeLessThan(PI);   // '1.2' é menor que PI
        });
    });

    // Comparador de valor maior que...
    describe('Comparador toBeGreaterThan:', () => {
        it('Deve validar o uso do toBeGreaterThan.', () => {
            // Organiza
            const PI = 3.1415;
            let numero = 4;

            // Afirma
            expect(numero).toBeGreaterThan(PI);  // numero é maior que PI
            expect('5').toBeGreaterThan(PI);   // '5' é maior que PI
        });
    });

    // Comparador personalizado
    // Comparador de email = toBeValidEmail
    let matcherEmail = {
        toBeValidEmail: (util, customEqualityTesters) => {
            let emailRegex = /\S+@\S+\.\S+/; // nome + @ + domínio + . com
            return {
                compare: (actual, expected) => {
                    let result = {};
                    if (expected === undefined) {
                        result.pass = emailRegex.test(actual);
                    } else {
                        result.pass = expected.test(actual);
                    }

                    if (result.pass) {
                        result.message = `${actual} é um email válido`;
                    } else {
                        result.message = `${actual} não é um email válido`;
                    }

                    return result;
                }
            }
        }
    };

    describe('Comparador toBeValidEmail:', () => {
        beforeEach(() => {
            jasmine.addMatchers(matcherEmail);
        });

        it('Deve validar se é um email.com válido.', () => {
            // Afirma
            expect('email@dominio.com').toBeValidEmail();
        });

        it('Deve validar se é um email.com.br válido.', () => {
            // Afirma
            expect('email@dominio.com.br').toBeValidEmail(/\S+@\S+\.\S+\.\S/);
        })

        it('Deve validar que é um email.com inválido.', () => {
            // Afirma
            expect('email').not.toBeValidEmail();
        });
    });
});

describe('Exemplo de Spy - simulando retorno de uma calculadora com spyOn:', () => {
    // Mock da função calculadora
    // Ela não vai ser chamada por causa do spy
    let Calculadora = {
        somar: (val1, val2) => {
            return val1 + val2;
        },
        subtrair: (val1, val2) => {
            return val1 - val2;
        },
        dividir: (val1, val2) => {
            return val1 / val2;
        },
        multiplicar: (val1, val2) => {
            return val1 * val2;
        },
        somarFake: (val1, val2) => {
            return val1 - val2;
        },
        somarError: (val1, val2) => {
            return val1 + val2;
        }
    };

    // Antes de cada testes inicia o spy
    beforeEach(() => {
        // MockSpy simulando o método
        spyOn(Calculadora, 'somar');                                    // spy sem retorno
        spyOn(Calculadora, 'subtrair').and.callThrough();               // spy que utiliza o método original como spy
        spyOn(Calculadora, 'dividir').and.returnValue(2);               // spy que retorna o valor 2 como determinado no mock
        spyOn(Calculadora, 'multiplicar').and.returnValues(10, 20);     // spy que retorna os valores 10 e 20 como determinado no mock

        spyOn(Calculadora, 'somarFake').and.callFake((val1, val2) => {  // spy que retorna um fake soma com resultado de um subtrair
            return val1 - val2;
        });

        spyOn(Calculadora, 'somarError').and.throwError('Valores Inválidos.'); // spy que retorna uma mensagem de erro na validação
    });

    it('Deve possuir o método de somar como indefinido.', () => {
        // Ação
        let retorno = Calculadora.somar(1, 3);

        // Afirma
        expect(retorno).toBeUndefined();
    });

    it('Deve chamar o método ao menos um vez, depois limpa o spy.', () => {
        // Ação
        Calculadora.somar(1, 1);

        // Afirma
        expect(Calculadora.somar).toHaveBeenCalled();        // valida que foi chamado
        expect(Calculadora.somar.calls.any()).toBeTruthy();  // valida que foi chamado

        Calculadora.somar.calls.reset();                     // limpa os resultados do spy somar usados nesse teste
        expect(Calculadora.somar.calls.any()).toBeFalsy();   // valida que foi limpo
    });

    it('Deve chamar o método ao menos tres vezes, depois limpa o spy.', () => {
        // Ação
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);
        Calculadora.somar(3, 3);

        // Afirma
        expect(Calculadora.somar).toHaveBeenCalledTimes(3);   // valida que foi chamado
        expect(Calculadora.somar.calls.any()).toBeTruthy();   // valida que foi chamado

        Calculadora.somar.calls.reset();                      // limpa os resultados do spy somar usados nesse teste
        expect(Calculadora.somar.calls.any()).toBeFalsy();    // valida que foi limpo
    });

    it('Deve chamar o método com os valores dois e seis.', () => {
        // Ação
        Calculadora.somar(2, 6);

        // Afirma
        expect(Calculadora.somar).toHaveBeenCalledWith(2, 6);
    });

    it('Deve executar o método subtrair original.', () => {
        // Ação
        let retorno = Calculadora.subtrair(6, 2);

        // Afirma
        expect(Calculadora.subtrair).toHaveBeenCalled();
        expect(Calculadora.subtrair).toHaveBeenCalledWith(6, 2);
        expect(retorno).toEqual(4);
    });

    it('Deve executar o método dividir e retornar o valor dois como resultado.', () => {
        // Ação
        let retorno = Calculadora.dividir(4, 2);

        // Afirma
        expect(Calculadora.dividir).toHaveBeenCalled();
        expect(Calculadora.dividir).toHaveBeenCalledWith(4, 2);
        expect(retorno).toEqual(2);

        expect(Calculadora.dividir(4, 4)).toEqual(2);       // vai sempre retornar o valor determinado
    });

    it('Deve executar o método multiplicar e retornar o valor dez e vinte como resultado.', () => {
        // Afirma
        expect(Calculadora.multiplicar(4, 2)).toEqual(10);                                // retorna o primeiro valor
        expect(Calculadora.multiplicar(5, 3)).toEqual(20);                                // retorna o segundo valor
        expect(Calculadora.multiplicar(6, 4)).toBeUndefined();                            // retorna indefinido por não ter um terceiro valor
        expect(Calculadora.multiplicar).toHaveBeenCalledTimes(3);   // o multiplicar foi chamado 3 vezes
    });

    it('Deve executar o método somarFake e retornar o valor de uma subtração como resultado.', () => {
        // Ação
        let retorno = Calculadora.somarFake(4, 2);

        // Afirma
        expect(retorno).toEqual(2);
    });

    it('Deve executar o método somarError e retornar uma mensagem de erro na validação.', () => {
        // Afirma
        expect(() => { Calculadora.somarError(4, 2); }).toThrowError('Valores Inválidos.');;
    });

});

describe('Exemplo de CreateSpy - criando um spy:', () => {

    it('Deve validar o uso do CreateSpy com o somar.', () => {
        // Organiza
        let somar = jasmine.createSpy('somar');

        // Ação
        somar(1, 2);

        // Afirma
        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1, 2);
    });
});

describe('Exemplo de CreateSpyObj - simulando objeto usando spy:', () => {

    let Calculadora;

    beforeAll(() => {
        Calculadora = jasmine.createSpyObj('calculadora', ['somar', 'subtrair']);

        Calculadora.somar.and.returnValue(10);
        Calculadora.subtrair.and.returnValue(5);
    });

    it('Deve validar o uso do somar com CreateSpyObj retornando o dez como resultado.', () => {
        // Ação
        let retorno = Calculadora.somar(1, 2);

        // Afirma
        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
        expect(retorno).toEqual(10);
    });

    it('Deve validar o uso do subtrair com CreateSpyObj retornando o cinco como resultado.', () => {
        // Ação
        let retorno = Calculadora.subtrair(1, 2);

        // Afirma
        expect(Calculadora.subtrair).toHaveBeenCalled();
        expect(Calculadora.subtrair).toHaveBeenCalledWith(1, 2);
        expect(retorno).toEqual(5);
    });
});

describe('Exemplo de Jasmine.any - validando o tipo usado no spy:', () => {
    let somar;

    beforeEach(() => {
        somar = jasmine.createSpy("somar");
    });

    it('Deve validar que o tipo é um number.', () => {
        // Ação
        somar(1, 2);

        // Afirma
        expect(somar).toHaveBeenCalledWith(
            jasmine.any(Number),
            jasmine.any(Number)
        );
    });

    it('Deve validar que o tipo é um objeto.', () => {
        // Afirma
        expect({}).toEqual(
            jasmine.any(Object)
        );
    });

    it('Deve validar que o tipo é uma string.', () => {
        // Afirma
        expect('texto').toEqual(
            jasmine.any(String)
        );
    });
});

describe('Exemplo de Jasmine.objectContaining - valida o conteúdo de um objeto:', () => {
    let carro;

    beforeEach(() => {
        carro = {
            'movido': 'Gasolina',
            'ano': 2016,
            'ativo': true
        };
    });

    it('Deve validar o carro.', () => {
        // Afirma
        expect(carro).toEqual(
            jasmine.objectContaining(
                { 'movido': 'Gasolina' }
            )
        );

        expect(carro).toEqual(
            jasmine.objectContaining(
                { 'ano': 2016 }
            )
        );

        expect(carro).not.toEqual(
            jasmine.objectContaining(
                { 'ativo': false }
            )
        );

        expect(carro).not.toEqual(
            jasmine.objectContaining(
                { 'movido': 'gasolina' }
            )
        );
    });
});

describe('Exemplo de Jasmine.arrayContaining - valida os valores de um array:', () => {
    let valores;

    beforeEach(() => {
        valores = [1, 3, 4, 5, 12];
    });

    it('Deve validar os valores.', () => {
        // Afirma
        expect(valores).toEqual(
            jasmine.arrayContaining(
                [1, 3, 4, 5, 12]
            )
        );

        expect(valores).toEqual(
            jasmine.arrayContaining(
                [1, 3, 4]
            )
        );

        expect(valores).toEqual(
            jasmine.arrayContaining(
                [5, 12]
            )
        );

        expect(valores).not.toEqual(
            jasmine.arrayContaining(
                [2, 11]
            )
        );
    });
});

describe('Exemplo de Jasmine.clock - valida uma chamada síncrona (sync):', () => {

    let dobro;

    beforeAll(() => {
        dobro = jasmine.createSpy('dobro');
    });

    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('Deve validar que o dobro foi chamado, usando setTimeout (delay).', () => {
        // Organiza
        setTimeout(() => { dobro(10); }, 1000); // chama após 1000 ms

        jasmine.clock().tick(1000);

        // Afirma
        expect(dobro).toHaveBeenCalled();
    });

    it('Deve validar que o dobro foi chamado, usando setInterval (loop).', () => {
        // Organiza
        setInterval(() => { dobro(20); }, 500); // chama a cada 500 ms

        jasmine.clock().tick(500);

        // Afirma
        expect(dobro).toHaveBeenCalled();
    });
});

describe('Exemplo de Debug em testes:', () => {

    it('Deve validar um resultado como verdadeiro.', () => {
      // debugger;                  // remova o "//" que esta antes de debugger;
      let isTrue = true;
      expect(isTrue).toBeTruthy();
    });
  });