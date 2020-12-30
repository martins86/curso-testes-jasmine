describe('Comparador toBeLessThan:', () => {
    it('Deve validar o uso do toBeLessThan.', () => {
    // Arrange
    const PI = 3.1415;
    let numero = 2;
    
    // Assert
    expect(numero).toBeLessThan(PI);  // numero é menor que PI
    expect("1.2").toBeLessThan(PI);   // "1.2" é menor que PI
    });
});