import { HoverFocusDirective } from './hover-focus.directive';

describe('Testando o HoverFocusDirective', () => {
  it('Deve instanciar o HoverFocusDirective', () => {
    const directive = new HoverFocusDirective();
    expect(directive).toBeTruthy();
  });
});
