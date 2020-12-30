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