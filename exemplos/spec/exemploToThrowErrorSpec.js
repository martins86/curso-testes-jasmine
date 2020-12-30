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