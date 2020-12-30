describe('Comparador toBeGreaterThan:', () => {
    it('Deve validar o uso do toBeGreaterThan.', () => {
    // Arrange
    const PI = 3.1415;
    let numero = 4;
    
    // Assert
    expect(numero).toBeGreaterThan(PI);  // numero é maior que PI
    expect("5").toBeGreaterThan(PI);   // "5" é maior que PI
    });
});