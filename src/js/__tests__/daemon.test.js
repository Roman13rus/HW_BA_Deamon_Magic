import Daemon from '../deamon';

test('checking the creation of class Daemon instances and their attributes', () => {
  const received = new Daemon('dead', 'Daemon');
  const expected = {
    name: 'dead',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 100,
    _stoned: false,
  };
  expect(received).toEqual(expected);
});

test('checking the method of attack by a Daemon without a dope with a blow to 3 cells', () => {
  const dead = new Daemon('dead', 'Daemon');
  dead.attack = 1;
  const expected = 100;
  const received = dead.attack;
  expect(received).toBe(expected);
});

test('checking the method of attack by a Daemon with a datura blow on 2 cells', () => {
  const dead = new Daemon('mag', 'Daemon');
  dead.stoned = true;
  dead.attack = 3;
  const expected = 72.07518749639422;
  const received = dead.attack;
  expect(received).toBe(expected);
});
