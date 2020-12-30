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