describe('Testes do reloadPage ', () => {
    it('Deve acionar window.open com target _self', () => {
      // Arrange
      const spyWindowOpen = spyOn(window, 'open');

      // Act
      component.reloadPage();

      // Assert
      expect(spyWindowOpen.calls.mostRecent().args[0]).toMatch(/localhost/);
      expect(spyWindowOpen.calls.mostRecent().args[1]).toMatch(/_self/);
    });
});
