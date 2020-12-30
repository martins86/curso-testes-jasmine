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