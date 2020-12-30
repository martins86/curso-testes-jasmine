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