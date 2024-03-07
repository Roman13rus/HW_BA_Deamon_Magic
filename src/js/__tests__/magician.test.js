import Magician from '../magician';

test('checking the creation of class Magician instances and their attributes', () => {
  const received = new Magician('mag', 'Magician');
  const expected = {
    name: 'mag',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 100,
    _stoned: false,
  };
  expect(received).toEqual(expected);
});

test('checking the method of attack by a magician without a dope with a blow to 3 cells', () => {
  const mag = new Magician('mag', 'Magician');
  mag.attack = 3;
  const expected = 80;
  const received = mag.attack;
  expect(received).toBe(expected);
});

test('checking the method of attack by a magician with a datura blow on 2 cells', () => {
  const mag = new Magician('mag', 'Magician');
  mag.stoned = true;
  mag.attack = 2;
  const expected = 85;
  const received = mag.attack;
  expect(received).toBe(expected);
});
