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