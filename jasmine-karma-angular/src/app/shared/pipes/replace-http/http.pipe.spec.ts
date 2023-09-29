import { HttpPipe } from './http.pipe';

describe('Testando o HttpPipe', () => {
  const pipe = new HttpPipe();

  it('Deve instanciar o HttpPipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('Deve transformar http em https', () => {
    // Arrange & Act
    const response = pipe.transform('http://www.google.com');

    // Assert
    expect(response).toBe('https://www.google.com');
  })
});


