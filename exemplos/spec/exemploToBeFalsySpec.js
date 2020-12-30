describe("Comparador toBeFalsy:", () => {
    it("Deve validar o uso do toBeFalsy.", () => {
        // Arrange
        let a = undefined;
        let b = 0;
        let c= '';
        let d = null;
        let e = NaN;
        let f;
        
        // Assert
        expect(a).toBeFalsy();
        expect(b).toBeFalsy();
        expect(c).toBeFalsy();
        expect(d).toBeFalsy();
        expect(e).toBeFalsy();
        expect(f).toBeFalsy();
        expect(false).toBeFalsy();
    });
});