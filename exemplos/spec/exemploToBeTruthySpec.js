describe("Comparador toBeTruthy:", () => {
    it("Deve validar o uso do toBeTruthy.", () => {
        // Arrange
        let a = 10;
        let b = undefined;
        let c = 0;
        let d = '';
        let e = null;
        let f = NaN;
        let g;
        
        // Assert (! => false, 0, '', undefined, null ou NaN)
        expect(a).toBeTruthy();
        expect("Teste").toBeTruthy();
        expect(true).toBeTruthy();
        
        expect(b).not.toBeTruthy();
        expect(c).not.toBeTruthy();
        expect(d).not.toBeTruthy();
        expect(e).not.toBeTruthy();
        expect(f).not.toBeTruthy();
        expect(g).not.toBeTruthy();
        expect(false).not.toBeTruthy();
    });
});