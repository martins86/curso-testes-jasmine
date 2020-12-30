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