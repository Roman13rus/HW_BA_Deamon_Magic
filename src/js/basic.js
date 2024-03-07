export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this._attack = 100;
    this._stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    return this._attack;
  }

  set attack(distance) {
    const damageStrength = new Map([[1, 1], [2, 0.9], [3, 0.8], [4, 0.7], [5, 0.6]]);
    const damage = (damageStrength.get(distance));
    if (!this.stoned) {
      this._attack = this.attack * damage;
    } else {
      this._attack = (this.attack * damage - Math.log2(distance) * 5);
    }
  }
}
