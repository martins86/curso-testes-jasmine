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