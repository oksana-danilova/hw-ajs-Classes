import Character from '../character';

test('should check the class Character no name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Name is short or long'));
});

test('should check the class Character no name', () => {
  expect(() => new Character('Player', 'Hero')).toThrowError(new Error('Wrong type'));
});

test('should check the class Character no name', () => {
  const character = new Character('Player', 'Magician');
  expect(character.name).toBe('Player');
});

test('should check the class Character no name', () => {
  const character = new Character('Player', 'Magician');
  expect(character.type).toBe('Magician');
});
test('should check the class Character no name', () => {
  const character = new Character('Player', 'Magician');
  const result = {
    name: 'Player',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toEqual(result);
});