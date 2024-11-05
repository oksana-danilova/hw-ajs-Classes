import Character from '../character';

test('checking the length of the name', () => {
  expect(() => new Character('a', 'Bowman')).toThrow(new Error('Name is short or long'));
});

test('type checking', () => {
  expect(() => new Character('Player', 'Hero')).toThrow(new Error('Wrong type'));
});