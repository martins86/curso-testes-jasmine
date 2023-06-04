import { TruncateStringPipe } from './truncate-string.pipe';

describe('TruncateStringPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be returns the string reduced from 55 to 30 characters using "..." in the center', () => {
    // Arrange
    const stringTextWith55: string =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    const formattedTextWith30: string = 'Lorem ipsum dol...piscing elit';
    const pipe = new TruncateStringPipe();

    // Act
    const result = pipe.transform(stringTextWith55, 30, '...');

    // Assert
    expect(result).toEqual(formattedTextWith30);
  });

  it('should be does not return the reduced string from 55 to 56, it returns the original text', () => {
    // Arrange
    const stringTextWith55: string =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    const pipe = new TruncateStringPipe();

    // Act
    const result = pipe.transform(stringTextWith55, 56, '...');

    // Assert
    expect(result).toEqual(stringTextWith55);
  });
});
