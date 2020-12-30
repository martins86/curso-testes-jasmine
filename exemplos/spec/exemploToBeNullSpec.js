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