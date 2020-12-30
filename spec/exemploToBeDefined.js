describe("Comparador toBeDefined:", () => {
    it("Deve validar o uso do toBeDefined.", () => {
        // Arrange
        const a = 10;

        // Assert
        expect(a).toBeDefined();    // a n1 esta definida
        expect(null).toBeDefined();  // nulo é uma definição
        expect(NaN).toBeDefined();   // náo é um numero é uma definição
    });
});