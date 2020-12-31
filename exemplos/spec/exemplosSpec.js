describe("Exemplo do um Suíte de Testes:", () => {
    it("Deve garantir que 1 + 1 = 2.", () => {
        expect(1+1).toBe(2)
    });
});

describe("Exemplos de Comparadores:", () => {
    
    // Comparador de prop igual... ==
    describe("Comparador toBe:", () => {
        it("Deve validar o uso do toBe.", () => {
            // Arrange
            const objetoUm = { value: true };
            const objetoDois = { value: true };
            
            // Assert
            expect(true).toBe(true);               // true === true (valor e tipo).
            expect("Teste").toBe("Teste");         // "Teste" === "Teste" (valor e tipo).
            expect(objetoUm).not.toBe(objetoDois); // tem o mesmo valor mas não é o mesmo.
        });
    });
    
    // Comparador de prop e valor igual... ===
    describe("Comparador toEqual:", () => {
        it("Deve validar o uso do toEqual.", () => {
            // Arrange
            const objetoUm = { value: true };
            const objetoDois = { value: true };
            
            // Assert
            expect(true).toEqual(true);           // valor true é igual a true, true == true
            expect(objetoUm).toEqual(objetoDois); // objetoUm == objetoDois
        });
    });
    
    // Comparador de prop ou array que contem...
    describe('Comparador toContain:', () => {
        it('Deve validar o uso do toContain.', () => {
        // Arrange
        let texto = "Hoje é uma Segunda";
        let frutas = ["banana", "laranja", "manga"];
        
        // Assert
        expect(texto).toContain("Segunda");
        expect(frutas).toContain("manga");
        
        expect(frutas).not.toContain("uva");
        });
    });
    
    describe("Comparador toMatch:", () => {
        it("Deve validar o uso do toMatch.", () => {
            // Arrange
            const texto = "Teste com Jasmine";
            
            // Assert
            expect(texto).toMatch("Jasmine");             // existe um "Jasmine" em texto
            expect(texto).toMatch(/jasmine/i);            // existe um "Jasmine" ou "jasmine" em texto
            expect("12345-123").toMatch(/^\d{5}-\d{3}$/); // ^ - começa, \d - digito, {5} - cinco, - tem um hifen, $ - termina 
        });
    });
    
    // Comparador de prop nula...
    describe("comparador toBeNull:", () => {
        it("Deve validar o uso do toBeNull.", () => {
            // Arrange
            const objeto = null;
            let vazio;
            let numero = 10;
            
            // Assert
            expect(objeto).toBeNull();     // o objeto esta definido como null 
            
            expect(vazio).not.toBeNull();  // o vazio não esta definido como null
            expect(numero).not.toBeNull(); // o numero não esta definido como null
        });
    });
    
    // Comparador de prop definida...
    describe("Comparador toBeDefined:", () => {
        it("Deve validar o uso do toBeDefined.", () => {
            // Arrange
            const a = 10;
    
            // Assert
            expect(a).toBeDefined();    // a esta definida
            expect(null).toBeDefined();  // nulo é uma definição
            expect(NaN).toBeDefined();   // náo é um numero é uma definição
        });
    });
    
    // Comparador de prop indefinida...
    describe("Comparador toBeUndefined:", () => {
        it("Deve validar o uso do toBeUndefined.", () => {
            // Arrange
            let texto;
            let objeto = { value: true }
    
            // Assert
            expect(texto).toBeUndefined();             // a esta indefinida
            expect(objeto.message).toBeUndefined();    // objeto.message esta indefinida
        });
    });
    
    // Comparador de prop válida...
    describe("Comparador toBeTruthy:", () => {
        it("Deve validar o uso do toBeTruthy.", () => {
            // Arrange
            let a = 10;
            
            // Assert
            expect(a).toBeTruthy();
            expect("Teste").toBeTruthy();
            expect(true).toBeTruthy();
        });
    });
    
    // Comparador de prop inválida...
    describe("Comparador toBeFalsy:", () => {
        it("Deve validar o uso do toBeFalsy.", () => {
            // Arrange
            let a = undefined;
            let b = 0;
            let c= '';
            let d = null;
            let e = NaN;
            let f;
            
            // Assert
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
            // Arrange
            const semErro = function(numero) { return numero*10 };
            const comErro = function() { return numero*10 };
            
            // Assert
            expect(semErro).not.toThrow();
            expect(comErro).toThrow();
        });
    });
    
    // Comparador de exceção de erro e validações...
    describe('Comparador toThrowError:', () => {
        it('Deve validar o uso do toThrowError.', () => {
            // Arrange
            let calculoDobro = function(numero) { 
                if (numero <= 0) {
                    throw new TypeError("O número deve ser maior que 0.");
                }
                return numero*numero;
            };
            
            // Assert
            expect(function() { calculoDobro(0) }).toThrowError(TypeError);
            expect(function() { calculoDobro(0) }).toThrowError(TypeError, "O número deve ser maior que 0.");
            expect(function() { calculoDobro(0) }).toThrowError(/maior que 0/);
            
            expect(function() { calculoDobro(1) }).not.toThrowError();
        });
    });
    
    // Comparador de valor menor que...
    describe('Comparador toBeLessThan:', () => {
        it('Deve validar o uso do toBeLessThan.', () => {
        // Arrange
        const PI = 3.1415;
        let numero = 2;
        
        // Assert
        expect(numero).toBeLessThan(PI);  // numero é menor que PI
        expect("1.2").toBeLessThan(PI);   // "1.2" é menor que PI
        });
    });
    
    // Comparador de valor maior que...
    describe('Comparador toBeGreaterThan:', () => {
        it('Deve validar o uso do toBeGreaterThan.', () => {
        // Arrange
        const PI = 3.1415;
        let numero = 4;
        
        // Assert
        expect(numero).toBeGreaterThan(PI);  // numero é maior que PI
        expect("5").toBeGreaterThan(PI);   // "5" é maior que PI
        });
    });
});